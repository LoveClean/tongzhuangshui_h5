<template>
	<view>
		<view v-show="validApply">
			<inputs
				:inputsArray="inputsArray"
				activeName="提交"
				@chaildOpenEvent="openWin"
				@activeFc="activeFc"
				:onLoadData="onLoadData"
				animationType="rotate3d-fade"
				:animationDuration="0.1"
				submitReSet
				:titleSet="titleSet"
				:contentSet="contentSet"
				:buttonStyle="buttonStyle"
				:inputDebounceSet="inputDebounceSet"
			/>
		</view>
		<view v-show="validApply === false" style="text-align: center; padding-top: 20%;">
			<image src="../../static/img/logo.jpg" mode="aspectFit"></image>
			<br />
			<br />
			永远相信美好的事情即将发生
		</view>
	</view>
</template>

<script>
import inputs from '@/components/QuShe-inputs/inputs.vue';
export default {
	data() {
		return {
			validApply: true,
			openId: '',
			inputDebounceSet: {
				openInputDebounce: true,
				delay: 500
			},
			titleSet: {
				size: 14
				// color: '#f06c7a'
			},
			contentSet: {
				size: 14
			},
			buttonStyle: {
				//按钮样式
				activeButton: 'background-color: #009688;border-radius: 30px;box-shadow: 2px 2px 1px 1px #009688;height:60upx;font-size:28upx;', //主按钮样式
				changeButton: 'background-color: #009688;border-radius: 30px;box-shadow: 2px 2px 1px 1px #009688;', //picker类型更改按钮样式
				selectButton: 'background-color: #009688;border-radius: 30px;box-shadow: 2px 2px 1px 1px #009688;', //picker类型选择按钮样式
				confirmButton: 'background-color: #009688;border-radius: 30px;box-shadow: 2px 2px 1px 1px #009688;', //picker类型弹出框中确定按钮样式
				getcodeButton: 'background-color: #009688;border-radius: 30px;box-shadow: 2px 2px 1px 1px #009688;' //获取验证码按钮样式
			},
			inputsArray: [
				{
					segmentationTitle: '商户入驻', //分割大标题
					border_top: '1px solid #f2f2f2', //上划线
					title: '店铺名',
					iconColor: '#009688', //input图标颜色
					variableName: 'shopName' //自定义变量名
				},
				{
					type: 'picker-provincialStreet',
					title: '所在地区',
					chooseName: '选择地区',
					onceShowDefaultValue: false, //是否显示初始数据
					variableName: 'shopArea'
				},
				{
					title: '详细地址',
					tapClear: true, //input一键清除功能
					iconColor: '#f06c7a', //input图标颜色
					variableName: 'shopAddress' //自定义变量名
				},
				{
					title: '经营人',
					variableName: 'sellerName' //自定义变量名
				},
				{
					title: '联系方式',
					verifyFc: function(value) {
						if (/^[1][3,4,5,7,8][0-9]{9}$/.test(value)) return true;
						return false;
					},
					verifyErr: '请输入正确的手机号码',
					variableName: 'sellerPhone' //自定义变量名
				}
			],
			onLoadData: 'data_'
		};
	},
	onLoad() {
		uni.request({
			url: this.$tempUrl + 'wechat/getOpenId',
			data: { code: window.location.search.substr(6, 32) },
			method: 'GET',
			success: res => {
				this.openId = res.data;
				// console.log(this.openId);
				uni.request({
					url: this.$tempUrl + 'seller/check',
					data: { openId: this.openId },
					method: 'GET',
					success: res => {
						if (res.data.code !== 0) {
							this.validApply = false;
						}
					}
				});
			}
		});
	},
	methods: {
		activeFc(res) {
			const _res = res;
			// uni.showToast({
			// 	title: '获取输入成功'
			// });
			console.log(_res);
			uni.request({
				url: this.$tempUrl + 'common/geocoderByAddress',
				method: 'GET',
				data: { address: _res.shopArea.label + _res.shopAddress },
				success: res => {
					if (res.data.status === 0) {
						// console.log(res.data.result.location.lat);
						// console.log(res.data.result.location.lng);
						uni.request({
							url: this.$tempUrl + 'shop/seller/insert',
							method: 'POST',
							data: {
								address: _res.shopAddress,
								areaCode: _res.shopArea.cityCode,
								areaName: _res.shopArea.label,
								contact: _res.sellerPhone,
								latitude: res.data.result.location.lat,
								longitude: res.data.result.location.lng,
								name: _res.shopName
							},
							success: res => {
								if (res.data.code === 0) {
									uni.request({
										url: this.$tempUrl + 'seller/insert',
										method: 'POST',
										data: {
											shopId: res.data.data.id,
											name: _res.sellerName,
											phone: _res.sellerPhone,
											type: 2,
											wechatOpenid: this.openId
										},
										success: res => {
											if (res.data.code === 0) {
												uni.showModal({
													title: '申请成功',
													content: '请耐心等待，我们将在1-2个工作日内给您答复！',
													showCancel: false,
													success: res => {
														if (res.confirm) {
															console.log('用户点击确定');
															this.validApply = false;
														}
													}
												});
											} else {
												uni.showModal({
													title: '申请失败',
													content: '请勿重复申请！',
													showCancel: false
												});
												// uni.showToast({ title: '店长申请失败', icon: 'none' });
											}
										}
									});
								} else {
									uni.showToast({ title: '店铺申请失败', icon: 'none' });
								}
							}
						});
					} else {
						uni.showToast({ title: res.data.message });
					}
				}
			});
		}
	},
	components: {
		inputs
	}
};
</script>

<style></style>
