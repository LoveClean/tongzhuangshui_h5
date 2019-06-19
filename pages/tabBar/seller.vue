<template>
	<view>
		<view v-show="validApply">
			<!-- 占位 -->
			<view class="place"></view>
			<!-- <view v-show="goodsList.length === 0">暂无订单~</view> -->
			<view class="goods-list" v-show="goodsList.length > 0">
				<view class="product-list">
					<view :class="goods.orderStatus === 2 ? 'product watermark-image' : 'product'" v-for="goods in goodsList" :key="goods.id" @tap="changeOrderStatus(goods)">
						<!-- <image mode="widthFix" :src="goods.img"></image> -->
						<!-- <view class="info">
						<view class="slogan">企业名称：</view>
					</view> -->
						<view class="info">
							<view class="slogan">下单时间：{{ goods.createDate }}</view>
						</view>
						<view v-show="goods.orderDetailModels.length > 0" v-for="orderDetail in goods.orderDetailModels" :key="orderDetail.id">
							<view class="info">
								<view class="name">{{ orderDetail.productName }}</view>
								<view class="name">数量：{{ orderDetail.quantity }}</view>
							</view>
						</view>
						<view class="info">
							<view class="price">姓名：{{ goods.userName }}</view>
							<view class="price" @tap="toCall(goods.userPhone)">电话：{{ goods.userPhone }}</view>
							<view class="price">总价：￥{{ goods.payableAmount }}</view>
						</view>
						<view class="info">
							<view class="slogan">地址：{{ goods.userAddress }}</view>
						</view>
					</view>
				</view>
			</view>
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
export default {
	data() {
		return {
			validApply: true,
			goodsList: []
		};
	},
	onLoad(option) {
		uni.showLoading({ title: '加载中' });
		uni.request({
			url: this.$tempUrl + 'wechat/getOpenId',
			data: { code: window.location.search.substr(6, 32) },
			method: 'GET',
			success: res => {
				const openId = res.data;
				uni.request({
					url: this.$tempUrl + 'seller/login',
					data: { openId: openId },
					method: 'GET',
					success: res => {
						if (res.data.code === 0) {
							uni.setStorageSync('seller', res.data.data);
							setTimeout(() => {
								this.refresh();
							}, 500);
						} else {
							uni.hideLoading();
							uni.showModal({
								title: '提示',
								content: '抱歉，您不是商家哦=。=',
								showCancel: false,
								success: res => {
									if (res.confirm) {
										console.log('用户点击确定');
										this.validApply = false;
									}
								}
							});
						}
					}
				});
			}
		});
		// uni.setNavigationBarTitle({
		// 	title: '订单列表'
		// });
	},
	onPullDownRefresh() {
		console.log('refresh');
		this.refresh();
		setTimeout(function() {
			uni.stopPullDownRefresh();
		}, 500);
	},
	methods: {
		refresh() {
			uni.request({
				url: this.$tempUrl + 'seller/order/list',
				data: { shopId: uni.getStorageSync('seller').shopId, token: uni.getStorageSync('seller').accessToken },
				method: 'GET',
				success: res => {
					uni.hideLoading();
					// uni.showToast({ title: 'success', icon: 'none' });
					this.goodsList = res.data.data;
					if (res.data.data.length === 0) {
						uni.showModal({
							title: '提示',
							content: '暂无订单哦~',
							showCancel: false
						});
					}
				}
			});
		},
		changeOrderStatus(goods) {
			if (goods.orderStatus === 1) {
				uni.showModal({
					title: '提示',
					content: '确认接受此订单？',
					success: res => {
						if (res.confirm) {
							console.log('用户点击确定');
							uni.request({
								url: this.$tempUrl + 'seller/order/receive?token=' + uni.getStorageSync('seller').accessToken + '&orderId=' + goods.id,
								// data: { orderId: goods.id },
								method: 'POST',
								success: res => {
									uni.startPullDownRefresh();
									if (res.data.code === 0) {
										uni.showToast({ title: '接受成功，请尽快配送', icon: 'success' });
									} else {
										uni.showModal({
											title: '失败',
											content: '买家已取消此订单',
											showCancel: false
										});
									}
								}
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		},
		// 拨打电话
		toCall(phoneNumber) {
			uni.showModal({
				title: '提示',
				content: '是否拨打客户电话？',
				success: res => {
					if (res.confirm) {
						console.log('用户点击确定');
						uni.makePhoneCall({
							phoneNumber: phoneNumber
						});
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		}
	}
};
</script>

<style lang="scss">
.watermark-image {
	position: relative;

	// width: 300px;
	// height: 300px;

	background: url('../../static/img/shuiyin/jiedan.png') no-repeat;
	background-size: 30%;
	background-position-x: 98%;
	background-position-y: 40%;
	// filter:alpha(opacity=60);-moz-opacity:0.6;opacity:0.60;

	border: 1px dotted #f00;
}

.watermark-image:before {
	// content: 'Success.';
	font-size: 21pt;

	position: absolute;
	top: 50%;
	left: 50%;
	margin-left: -80px;

	background-color: rgba(255, 255, 0, 0.7);
	-webkit-transform: rotate(-15deg);
}
.place {
	background-color: #ffffff;
	height: 20upx;
}
.goods-list {
	.loading-text {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60upx;
		color: #979797;
		font-size: 24upx;
	}
	.product-list {
		width: 92%;
		padding: 0 4% 3vw 4%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		.product {
			// margin-top: 20upx;
			width: 100%;
			border-radius: 20upx;
			background-color: #fff;
			margin: 0 0 15upx 0;
			box-shadow: 0upx 5upx 25upx rgba(0, 0, 0, 0.1);
			image {
				width: 100%;
				border-radius: 20upx 20upx 0 0;
			}
			.name {
				width: 92%;
				padding: 10upx 4%;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 4;
				text-align: justify;
				overflow: hidden;
				font-size: 28upx;
			}
			.info {
				display: flex;
				justify-content: space-between;
				align-items: flex-end;
				width: 92%;
				padding: 10upx 4% 10upx 4%;
				.price {
					color: #e65339;
					font-size: 28upx;
					font-weight: 600;
				}
				.slogan {
					color: #807c87;
					font-size: 26upx;
				}
			}
		}
	}
}
.swiper-box {
	position: relative;
	width: 100%;
	height: 70vw;
	swiper {
		width: 100%;
		height: 70vw;
		swiper-item {
			image {
				width: 100%;
				height: 70vw;
			}
		}
	}
	.indicator {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 25upx;
		height: 40upx;
		border-radius: 40upx;
		font-size: 22upx;
		position: absolute;
		bottom: 20upx;
		right: 20upx;
		color: #fff;
		background-color: rgba(0, 0, 0, 0.2);
	}
}
</style>
