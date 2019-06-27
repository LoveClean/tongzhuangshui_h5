<template>
	<view>
		<inputs
			:inputsArray="inputsArray"
			activeName="保存并使用"
			@chaildOpenEvent="openWin"
			@activeFc="activeFc"
			:onLoadData="onLoadData"
			animationType="slide-fade-right"
			:animationDuration="0.1"
			submitReSet
			:titleSet="titleSet"
			:contentSet="contentSet"
			:buttonStyle="buttonStyle"
			:inputDebounceSet="inputDebounceSet"
			@inputsChange="inputsChange"
		/>
	</view>
</template>

<script>
import inputs from '@/components/QuShe-inputs/inputs.vue';
export default {
	data() {
		return {
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
				activeButton: 'background-color: #f06c7a;border-radius: 30px;box-shadow: 2px 2px 1px 1px #f06c7a;height:60upx;font-size:28upx;', //主按钮样式
				changeButton: 'background-color: #f06c7a;border-radius: 30px;box-shadow: 2px 2px 1px 1px #f06c7a;', //picker类型更改按钮样式
				selectButton: 'background-color: #f06c7a;border-radius: 30px;box-shadow: 2px 2px 1px 1px #f06c7a;', //picker类型选择按钮样式
				confirmButton: 'background-color: #f06c7a;border-radius: 30px;box-shadow: 2px 2px 1px 1px #f06c7a;', //picker类型弹出框中确定按钮样式
				getcodeButton: 'background-color: #f06c7a;border-radius: 30px;box-shadow: 2px 2px 1px 1px #f06c7a;' //获取验证码按钮样式
			},
			inputsArray: [
				{
					segmentationTitle: '新增收获地址', //分割大标题
					border_top: '1px solid #f2f2f2', //上划线
					title: '收货人',
					iconColor: '#f06c7a', //input图标颜色
					variableName: 'contactName' //自定义变量名
				},
				{
					title: '手机号码',
					verifyFc: function(value) {
						if (/^[1][3,4,5,7,8][0-9]{9}$/.test(value)) return true;
						return false;
					},
					verifyErr: '手机号校验错误',
					variableName: 'contactPhone' //自定义变量名
				},
				{
					type: 'picker-provincialStreet',
					title: '所在地区',
					chooseName: '选择地区',
					onceShowDefaultValue: false, //初始化时显示初始值
					variableName: 'area'
				},
				{
					title: '详细地址',
					tapClear: true, //input一键清除功能
					iconColor: '#f06c7a', //input图标颜色
					variableName: 'address' //自定义变量名
				},
				{
					title: '标签',
					type: 'radio',
					ignore: true,
					itemArray: [
						{
							//子循环数组
							name: '家',
							value: '0'
						},
						{
							name: '公司',
							value: '1'
						},
						{
							name: '学校',
							value: '2'
							// defaultValue: true
						}
					],
					color: '#f06c7a',
					scale: '.8', //比例大小
					variableName: 'label' //自定义变量名
				},
				{
					type: 'switch',
					title: '设置默认地址',
					color: '#f06c7a',
					ignore: true,
					defaultValue: true,
					scale: '.8', //比例大小
					variableName: 'isSure' //自定义变量名
				}
			],
			onLoadData: 'data_'
		};
	},
	methods: {
		inputsChange(option) {
			console.log('ffffff');
			console.log(option);
			uni.chooseLocation({
				success: function(res) {
					console.log('位置名称：' + res.name);
					console.log('详细地址：' + res.address);
					console.log('纬度：' + res.latitude);
					console.log('经度：' + res.longitude);
					console.log(res);
				}
			});
		},
		activeFc(res) {
			const _res = res;
			uni.showToast({
				title: '获取输入成功'
			});
			console.log(_res);
			uni.request({
				url: this.$tempUrl + 'userAddress/insert',
				method: 'POST',
				data: {
					userWechatOpenid: uni.getStorageSync('openId'),
					contactName: _res.contactName,
					contactPhone: _res.contactPhone,
					areaCode: _res.area.cityCode,
					areaName: _res.area.label,
					areaArray: _res.area.value + '',
					address: _res.address,
					label: _res.label
				},
				success: res => {
					if (res.data.code === 0) {
						uni.setStorage({
							key: 'confirmAddr',
							data: _res,
							success: () => {
								uni.navigateBack({ delta: 2 });
							}
						});
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
