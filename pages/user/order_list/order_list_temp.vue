<template>
	<view>
		<!-- 顶部导航 -->
		<view class="topTabBar" :style="{ position: headerPosition, top: headerTop }">
			<view class="grid" v-for="(grid, tbIndex) in orderType" :key="tbIndex" @tap="showType(tbIndex)">
				<view class="text" :class="[tbIndex == tabbarIndex ? 'on' : '']">{{ grid }}</view>
			</view>
		</view>
		<!-- 考虑非APP端长列表和复杂的DOM使用scroll-view会卡顿，所以漂浮顶部选项卡使用page本身的滑动 -->
		<view class="order-list">
			<view class="list">
				<view class="onorder" v-if="list.length == 0">
					<image src="../../../static/img/noorder.png"></image>
					<view class="text">没有相关订单</view>
				</view>
				<view class="row" v-for="(row, index) in list" :key="index">
					<view class="type">
						<view class="left">{{ row.createDate }}</view>
						<view class="right">{{ typeText[row.type] }}</view>
					</view>
					<view class="order-info" v-for="(orderDetailModel, index2) in row.orderDetailModels" :key="index2">
						<view class="left"><image :src="orderDetailModel.cover"></image></view>
						<view class="right">
							<view class="name">{{ orderDetailModel.productName }}</view>
							<view class="spec">{{ orderDetailModel.introduction }}</view>
							<view class="price-number">
								￥
								<view class="price">{{ orderDetailModel.price }}</view>
								x
								<view class="number">{{ orderDetailModel.quantity }}</view>
							</view>
						</view>
					</view>
					<view class="detail">
						<view class="number" v-if="row.orderDetailModels">共{{ row.orderDetailModels.length }}类商品</view>
						<view class="sum">
							合计￥
							<view class="price">{{ row.payableAmount }}</view>
						</view>
						<view class="nominal" v-if="row.orderAmount - row.payableAmount > 0">(已优惠 ￥{{ row.orderAmount - row.payableAmount }})</view>
					</view>
					<view class="btns">
						<block v-if="row.type == 'unpaid'">
							<view class="default" @tap="changeType(row.id, 'unpaid')">取消订单</view>
							<view class="pay" @tap="payment(row)">付款</view>
						</block>
						<block v-if="row.type == 'back'"><view class="default" @tap="changeType(row.id, 'back')">取消订单</view></block>
						<block v-if="row.type == 'unreceived'">
							<view class="default" @tap="toCall(row.shopContact)">联系商家</view>
							<view class="pay" @tap="changeType(row.id, 'unreceived')">确认收货</view>
						</block>
						<block v-if="row.type == 'completed'"><view class="default" @tap="toConfirmation(row)">再次购买</view></block>
						<block v-if="row.type == 'refunds'"><view class="default" @tap="toConfirmation(row)">重新下单</view></block>
						<!-- <block v-if="row.type=='received'"><view class="default">评价</view><view class="default">再次购买</view></block>
						<block v-if="row.type=='completed'"><view class="default">再次购买</view></block>
						<block v-if="row.type=='refunds'"><view class="default">查看进度</view></block> -->
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			headerPosition: 'fixed',
			headerTop: '0px',
			typeText: {
				unpaid: '等待付款',
				back: '等待商家发货',
				unreceived: '商家正在配送',
				// received:'等待用户评价',
				completed: '交易已完成',
				refunds: '订单已取消'
			},
			orderType: ['全部', '待付款', '待发货', '待收货', '已完成', '已取消'],
			//订单列表 演示数据
			orderList: [[], [], [], [], [], []],
			list: [],
			tabbarIndex: 0
		};
	},
	onLoad(option) {
		//option为object类型，会序列化上个页面传递的参数
		console.log('option: ' + JSON.stringify(option));
		let tbIndex = parseInt(option.tbIndex) + 1;
		// this.list = this.orderList[tbIndex];
		this.tabbarIndex = tbIndex;
		console.log(tbIndex);
		this.showType(tbIndex);
		// this.loading(tbIndex);
		//兼容H5下排序栏位置
		// #ifdef H5
		let Timer = setInterval(() => {
			let uniHead = document.getElementsByTagName('uni-page-head');
			if (uniHead.length > 0) {
				this.headerTop = uniHead[0].offsetHeight + 'px';
				clearInterval(Timer); //清除定时器
			}
		}, 1);
		// #endif
	},
	onPageScroll(e) {
		return;
		//兼容iOS端下拉时顶部漂移
		this.headerPosition = e.scrollTop >= 0 ? 'fixed' : 'absolute';
	},
	methods: {
		refreshList(tbIndex) {
			uni.request({
				url: this.$tempUrl + 'buyer/order/listByStatus',
				method: 'GET',
				data: { openId: uni.getStorageSync('openId'), status: tbIndex - 1 },
				success: res => {
					this.orderList[tbIndex] = res.data.data;
					this.list = this.orderList[tbIndex];
				}
			});
		},
		refreshListOther(tbIndex) {
			uni.request({
				url: this.$tempUrl + 'buyer/order/listByStatus',
				method: 'GET',
				data: { openId: uni.getStorageSync('openId'), status: tbIndex - 1 },
				success: res => {
					this.orderList[tbIndex] = res.data.data;
				}
			});
		},
		showType(tbIndex) {
			this.tabbarIndex = tbIndex;
			if (this.orderList[tbIndex].length === 0) {
				uni.request({
					url: this.$tempUrl + 'buyer/order/listByStatus',
					method: 'GET',
					data: { openId: uni.getStorageSync('openId'), status: tbIndex - 1 },
					success: res => {
						this.orderList[tbIndex] = res.data.data;
						this.list = this.orderList[tbIndex];
					}
				});
			} else {
				this.list = this.orderList[tbIndex];
			}
		},
		changeType(orderId, type) {
			console.log(orderId);
			if (type === 'unpaid') {
				uni.showModal({
					title: '提示',
					content: '取消此订单？',
					success: res => {
						if (res.confirm) {
							console.log('用户点击确定');
							uni.request({
								url: this.$tempUrl + 'buyer/order/cancel',
								method: 'POST',
								data: { openId: uni.getStorageSync('openId'), orderId: orderId },
								success: res => {
									if (res.data.code === 0) {
										uni.showToast({
											title: '订单已取消',
											icon: 'success'
										});
										//刷新当前（待付款）列表
										this.refreshList(1);
										//刷新已取消列表
										this.refreshListOther(5);
										//刷新全部列表
										this.refreshListOther(0);
									} else {
										uni.showModal({
											title: '提示',
											content: '订单取消失败',
											showCancel: false
										});
										//刷新当前（待付款）列表
										this.refreshList(1);
										//刷新全部列表
										this.refreshListOther(0);
									}
								}
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			} else if (type === 'back') {
				uni.showModal({
					title: '提示',
					content: '取消此订单？',
					success: res => {
						if (res.confirm) {
							console.log('用户点击确定');
							uni.request({
								url: this.$tempUrl + 'buyer/order/cancel',
								method: 'POST',
								data: { openId: uni.getStorageSync('openId'), orderId: orderId },
								success: res => {
									if (res.data.code === 0) {
										uni.showToast({
											title: '订单已取消',
											icon: 'success'
										});
										//刷新当前（待发货）列表
										this.refreshList(2);
										//刷新已取消列表
										this.refreshListOther(5);
										//刷新全部列表
										this.refreshListOther(0);
									} else {
										uni.showModal({
											title: '提示',
											content: '商家已接单，订单取消失败',
											showCancel: false
										});
										//刷新当前（待发货）列表
										this.refreshList(2);
										//刷新待收货列表
										this.refreshListOther(3);
										//刷新全部列表
										this.refreshListOther(0);
									}
								}
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			} else if (type === 'unreceived') {
				uni.showModal({
					title: '提示',
					content: '完结此订单？',
					success: res => {
						if (res.confirm) {
							console.log('用户点击确定');
							uni.request({
								url: this.$tempUrl + 'buyer/order/finish',
								method: 'POST',
								data: { openId: uni.getStorageSync('openId'), orderId: orderId },
								success: res => {
									if (res.data.code === 0) {
										uni.showToast({
											title: '订单已完结',
											icon: 'success'
										});
										this.refreshList(3);
										this.refreshListOther(4);
										//刷新全部列表
										this.refreshListOther(0);
									} else {
										uni.showModal({
											title: '提示',
											content: '订单完结失败',
											showCancel: false
										});
										this.refreshList(3);
										//刷新全部列表
										this.refreshListOther(0);
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
		//跳转确认订单页面
		toConfirmation(row) {
			uni.setStorageSync('shopId', row.shopId);
			uni.setStorage({
				key: 'buylist',
				data: row.orderDetailModels,
				success: () => {
					uni.navigateTo({
						url: '../../order/confirmation'
					});
				}
			});
		},
		// 拨打电话
		toCall(phoneNumber) {
			uni.makePhoneCall({
				phoneNumber: phoneNumber
			});
		},
		payment(order) {
			uni.showModal({
				title: '支付',
				content: '确认支付￥' + order.payableAmount,
				success: res => {
					if (res.confirm) {
						uni.request({
							url: this.$tempUrl + 'buyer/order/paid',
							method: 'POST',
							data: { openId: uni.getStorageSync('openId'), orderId: order.id },
							success: res => {
								if (res.data.code === 0) {
									// uni.reLaunch({
									// 	url: '../tabBar/user',
									// 	success: () => {
									// 		uni.showToast({ title: '支付成功', icon: 'success' });
									// 	}
									// });
									uni.showToast({ title: '支付成功', icon: 'success' });
									//刷新当前（待付款）列表
									this.refreshList(1);
									//刷新已发货列表
									this.refreshListOther(2);
									//刷新全部列表
									this.refreshListOther(0);
								} else {
									uni.showModal({
										title: '提示',
										content: '订单异常，支付失败',
										showCancel: false
									});
									//刷新当前（待付款）列表
									this.refreshList(1);
									//刷新全部列表
									this.refreshListOther(0);
								}
							}
						});
					} else if (res.cancel) {
						// uni.reLaunch({
						// 	url: '../tabBar/user',
						// 	success: () => {
						// 		uni.showToast({ title: '支付已取消，请尽快完成付款', icon: 'none' });
						// 	}
						// });
						uni.showToast({ title: '支付已取消，请尽快完成付款', icon: 'none' });
					}
				}
			});
		}
	}
};
</script>

<style lang="scss">
page {
	background-color: #f3f3f3;
}
.topTabBar {
	width: 100%;
	position: fixed;
	top: 0;
	z-index: 10;
	background-color: #f8f8f8;
	height: 80upx;
	display: flex;
	justify-content: space-around;
	.grid {
		width: 20%;
		height: 80upx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #444;
		font-size: 28upx;
		.text {
			height: 76upx;
			display: flex;
			align-items: center;
			&.on {
				color: #f06c7a;
				border-bottom: solid 4upx #f06c7a;
			}
		}
	}
}
.order-list {
	margin-top: 80upx;
	padding-top: 20upx;
	width: 100%;
	.list {
		width: 94%;
		margin: 0 auto;
		.onorder {
			width: 100%;
			height: 50vw;
			display: flex;
			justify-content: center;
			align-content: center;
			flex-wrap: wrap;
			image {
				width: 20vw;
				height: 20vw;
				border-radius: 100%;
			}
			.text {
				width: 100%;
				height: 60upx;
				font-size: 28upx;
				color: #444;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
		.row {
			width: calc(100% - 40upx);
			padding: 10upx 20upx;
			border-radius: 10upx;
			background-color: #fff;
			margin-bottom: 20upx;
			.type {
				font-size: 26upx;
				color: #ec652f;
				height: 50upx;
				display: flex;
				align-items: center;
				position: relative;
				.left {
					color: #979797;
					font-size: 22upx;
				}
				.right {
					position: absolute;
					right: 0;
				}
			}
			.order-info {
				width: 100%;
				display: flex;
				.left {
					flex-shrink: 0;
					width: 20vw;
					height: 20vw;
					text-align: center;
					padding-top: 3vw;
					image {
						width: 14vw;
						height: 14vw;
						border-radius: 10upx;
					}
				}
				.right {
					width: 100%;
					margin-left: 10upx;
					position: relative;
					padding-top: 3vw;
					.name {
						width: 100%;
						font-size: 28upx;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
					}
					.spec {
						color: #a7a7a7;
						font-size: 22upx;
					}
					.price-number {
						position: absolute;
						bottom: 0;
						width: 100%;
						display: flex;
						justify-content: flex-end;
						font-size: 22upx;
						color: #333;
						display: flex;
						align-items: flex-end;
						.price {
							font-size: 24upx;
							margin-right: 5upx;
						}
					}
				}
			}
			.detail {
				display: flex;
				justify-content: flex-end;
				align-items: flex-end;
				height: 60upx;
				font-size: 26upx;
				.sum {
					padding: 0 8upx;
					display: flex;
					align-items: flex-end;
					.price {
						font-size: 30upx;
					}
				}
			}
			.btns {
				height: 80upx;
				display: flex;
				align-items: center;
				justify-content: flex-end;
				view {
					min-width: 120upx;
					height: 50upx;
					padding: 0 20upx;
					border-radius: 50upx;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 28upx;
					margin-left: 20upx;
				}
				.default {
					border: solid 1upx #ccc;
					color: #666;
				}
				.pay {
					border: solid 1upx #ec652f;
					color: #ec652f;
				}
			}
		}
	}
}
</style>
