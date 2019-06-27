<template>
	<view>
		<view class="content">
			<view class="row">
				<view class="nominal">收件人</view>
				<view class="input"><input placeholder="请输入收件人姓名" type="text" v-model="name" /></view>
			</view>
			<view class="row">
				<view class="nominal">电话号码</view>
				<view class="input"><input placeholder="请输入收件人电话号码" type="text" v-model="tel" /></view>
			</view>
			<view class="row">
				<view class="nominal">所在地区</view>
				<view class="input" @tap="chooseCity">{{ region.address }}</view>
			</view>
			<view class="row">
				<view class="nominal">详细地址</view>
				<view class="input"><textarea v-model="region.name" auto-height="true" placeholder="输入详细地址"></textarea></view>
			</view>
			<view class="row">
				<view class="nominal">标签</view>
				<view class="input">
					<radio-group @change="radioChange">
						<label class="radio">
							<radio value="0" :checked="label === '0'" color="#f06c7a" />
							家
						</label>
						<label class="radio">
							<radio value="1" :checked="label === '1'" color="#f06c7a" />
							公司
						</label>
						<label class="radio">
							<radio value="2" :checked="label === '2'" color="#f06c7a" />
							学校
						</label>
					</radio-group>
				</view>
			</view>
			<view class="row">
				<view class="nominal">设置默认地址</view>
				<view class="input switch"><switch color="#f06c7a" :checked="isDefault" @change="isDefaultChange" /></view>
			</view>
			<view class="row" v-if="editType == 'edit'" @tap="del"><view class="del">删除收货地址</view></view>
		</view>
		<view class="save" @tap="save"><view class="btn">保存地址</view></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			editType: 'edit',
			id: '',
			name: '',
			tel: '',
			isDefault: true,
			region: { address: '请点击选择地址' },
			label: null
		};
	},
	methods: {
		radioChange: function(evt) {
			this.label = evt.detail.value;
			// console.log(evt.detail.value);
			// console.log(this.label);
			// console.log(evt.detail.value === this.label);
		},
		chooseCity() {
			uni.chooseLocation({
				success: res => {
					// console.log(res);
					this.region = res;
				}
			});
		},
		isDefaultChange(e) {
			this.isDefault = e.detail.value;
		},
		del() {
			uni.showModal({
				title: '提示',
				content: '确认删除此地址？',
				success: res => {
					if (res.confirm) {
						uni.request({
							url: this.$tempUrl + 'userAddress/delete',
							method: 'DELETE',
							data: { id: this.id, openId: uni.getStorageSync('openId') },
							success: res => {
								if (res.data.code === 0) {
									uni.getStorage({
										key: 'confirmAddr',
										success: ret => {
											if (ret.data.id == this.id) {
												uni.removeStorage({
													key: 'confirmAddr',
													success: () => {
														uni.navigateBack({ delta: 1 });
													}
												});
											} else {
												uni.navigateBack({ delta: 1 });
											}
										}
									});
								}
							}
						});
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		},
		save() {
			let data = {
				userWechatOpenid: uni.getStorageSync('openId'),
				contactName: this.name,
				contactPhone: this.tel,
				areaName: this.region.address,
				address: this.region.name,
				latitude: this.region.latitude,
				longitude: this.region.longitude,
				label: this.label
				// isDefault: this.isDefault
			};
			if (this.editType == 'edit') {
				data.id = this.id;
			}
			if (!data.contactName) {
				uni.showToast({ title: '请输入收件人姓名', icon: 'none' });
				return;
			}
			if (!data.contactPhone) {
				uni.showToast({ title: '请输入收件人电话号码', icon: 'none' });
				return;
			}
			if (!data.areaName == '请点击选择地址') {
				uni.showToast({ title: '请选择收件地址', icon: 'none' });
				return;
			}
			if (!data.address) {
				uni.showToast({ title: '请输入收件人详细地址', icon: 'none' });
				return;
			}
			// uni.showLoading({
			// 	title: '正在提交'
			// });
			//实际应用中请提交ajax,模板定时器模拟提交效果
			if (this.editType == 'edit') {
				uni.request({
					url: this.$tempUrl + 'userAddress/updateForLatitudeAndLongitude',
					method: 'PUT',
					data: data,
					success: res => {
						if (res.data.code === 0) {
							uni.setStorage({
								key: 'confirmAddr',
								data: data,
								success: () => {
									// uni.hideLoading();
									uni.showToast({ title: '编辑地址成功', icon: 'none' });
									setTimeout(() => {
										uni.navigateBack({ delta: 2 });
									}, 200);
								}
							});
						} else {
							uni.showToast({ title: '失败', icon: 'none' });
						}
					}
				});
			} else {
				uni.request({
					url: this.$tempUrl + 'userAddress/insertForLatitudeAndLongitude',
					method: 'POST',
					data: data,
					success: res => {
						if (res.data.code === 0) {
							uni.setStorage({
								key: 'confirmAddr',
								data: data,
								success: () => {
									// uni.hideLoading();
									uni.showToast({ title: '新建地址成功', icon: 'none' });
									setTimeout(() => {
										uni.navigateBack({ delta: 2 });
									}, 200);
								}
							});
						} else {
							uni.showToast({ title: '失败', icon: 'none' });
						}
					}
				});
			}
		}
	},
	onLoad(e) {
		//获取传递过来的参数
		this.editType = e.type;
		if (e.type == 'edit') {
			uni.setNavigationBarTitle({
				title: '编辑收货地址'
			});
			// uni.getStorage({
			// 	key: 'address',
			// 	success: e => {
			this.id = e.id;
			this.name = e.contactName;
			this.tel = e.contactPhone;
			this.region.address = e.areaName;
			this.region.name = e.address;
			this.region.latitude = e.latitude;
			this.region.longitude = e.longitude;
			console.log(e.label);
			this.label = e.label;
			// this.isDefault = e.isDefault;
			// 	}
			// });
		}
	}
};
</script>
<style lang="scss">
.save {
	view {
		display: flex;
	}
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 120upx;
	display: flex;
	justify-content: center;
	align-items: center;
	.btn {
		box-shadow: 0upx 5upx 10upx rgba(0, 0, 0, 0.4);
		width: 70%;
		height: 80upx;
		border-radius: 80upx;
		background-color: #f06c7a;
		color: #fff;
		justify-content: center;
		align-items: center;
		.icon {
			height: 80upx;
			color: #fff;
			font-size: 30upx;
			justify-content: center;
			align-items: center;
		}
		font-size: 30upx;
	}
}
.content {
	display: flex;
	flex-wrap: wrap;
	view {
		display: flex;
	}
	.row {
		width: 94%;

		margin: 0 3%;
		border-top: solid 1upx #eee;
		.nominal {
			width: 30%;
			height: 120upx;
			font-weight: 200;
			font-size: 30upx;
			align-items: center;
		}
		.input {
			width: 70%;
			padding: 20upx 0;
			align-items: center;
			font-size: 30upx;
			&.switch {
				justify-content: flex-end;
			}
			.textarea {
				margin: 20upx 0;
				min-height: 120upx;
			}
			.radio {
				margin-right: 20upx;
			}
		}
		.del {
			width: 100%;
			height: 100upx;
			justify-content: center;
			align-items: center;
			font-size: 36upx;
			color: #f06c7a;
			background-color: rgba(255, 0, 0, 0.05);
			border-bottom: solid 1upx #eee;
		}
	}
}
</style>
