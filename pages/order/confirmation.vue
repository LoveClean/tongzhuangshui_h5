<template>
	<view>
		<!-- 收货地址 -->
		<view class="addr" @tap="changeAddr">
			<view class="icon"><image src="../../static/img/addricon.png" mode=""></image></view>
			<view class="right">
				<view class="tel-name">
					<view class="name">{{ addrMain.contactName }}</view>
					<view class="tel">{{ addrMain.contactPhone }}</view>
				</view>
				<!-- <view class="addres" v-if="addrMain.area">{{ addrMain.area.label }}-{{ addrMain.address }}</view> -->
				<view class="addres">{{ addrMain.areaName }} {{ addrMain.address }}</view>
			</view>
		</view>
		<!-- 购买商品列表 -->
		<view class="buy-list">
			<view class="row" v-for="(row, index) in buylist" :key="index">
				<view class="goods-info">
					<view class="img"><image :src="row.cover"></image></view>
					<view class="info">
						<view class="title">{{ row.name }}</view>
						<view class="spec">{{ row.promotion }} 数量:{{ row.stock }}</view>
						<view class="price-number">
							<view class="price">￥{{ row.price * row.stock }}</view>
							<view class="number"></view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 提示-备注 -->
		<view class="order">
			<view class="row" @tap="toCoupon(goodsPrice)">
				<view class="left">优惠券 :</view>
				<view class="right">
					<label v-show="!coupon.couponsAmount">点击选择</label>
					<label v-show="coupon.couponsAmount">已选择{{ coupon.couponsName }}，优惠￥{{ coupon.couponsAmount }}</label>
					<!-- <label style="margin-left: 10upx;">></label> -->
					<label style="margin-left: 10upx;color: #2F4056;">></label>
					>
				</view>
			</view>
			<view class="row">
				<view class="left">备注 :</view>
				<view class="right"><input placeholder="选填,备注内容" v-model="note" /></view>
			</view>
		</view>
		<!-- 明细 -->
		<view class="detail">
			<view class="row">
				<view class="nominal">商品金额</view>
				<view class="content">￥{{ goodsPrice }}</view>
			</view>
			<!-- <view class="row">
				<view class="nominal">运费</view>
				<view class="content">￥+{{ freight }}</view>
			</view> -->
			<view class="row" v-if="coupon.couponsAmount">
				<view class="nominal">优惠券</view>
				<view class="content">-￥{{ deduction }}</view>
			</view>
		</view>
		<view class="blck"></view>
		<view class="footer">
			<view class="settlement">
				<view class="sum">
					合计:
					<view class="money">￥{{ sumPriceFixed }}</view>
				</view>
				<view class="btn" @tap="toPay">提交订单</view>
			</view>
		</view>
	</view>
</template>

<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue';
export default {
	components: {
		uniPopup
	},
	data() {
		return {
			addrMain: { contactName: '点击选择地址' },
			buylist: [], //订单列表
			goodsPrice: 0.0, //商品合计价格
			sumPrice: 0.0, //用户付款价格
			freight: 0.0, //运费
			note: '', //备注
			int: 1200, //抵扣积分
			deduction: 0, //抵扣价格
			coupon: {}
		};
	},
	onShow() {
		//页面显示时，加载我选择的优惠券
		uni.getStorage({
			key: 'confirmCoupon',
			success: ret => {
				// console.log(ret.data);
				this.coupon = ret.data;
				this.deduction = ret.data.couponsAmount;
				// console.log(this.deduction);
			}
		});
		//页面显示时，加载我选择的地址
		uni.getStorage({
			key: 'confirmAddr',
			success: ret => {
				this.addrMain = ret.data;
				// console.log(ret.data.id);
			},
			fail: () => {
				this.addrMain = { contactName: '点击选择地址' };
			}
		});
		//页面显示时，加载订单信息
		uni.getStorage({
			key: 'buylist',
			success: ret => {
				this.buylist = ret.data;
				this.goodsPrice = 0;
				//合计
				let len = this.buylist.length;
				for (let i = 0; i < len; i++) {
					this.goodsPrice = this.goodsPrice + this.buylist[i].stock * this.buylist[i].price;
				}
				// this.deduction = this.int / 100;
				this.sumPrice = this.goodsPrice - this.deduction + this.freight;
				//强制保留两位小数，竟然不支持过滤器~~~~~~~ (O..O)
				// this.sumPrice = this.sumPrice.toFixed(2);
				// this.goodsPrice = this.goodsPrice.toFixed(2);
				// this.freight = this.freight.toFixed(2);
				// this.deduction = this.deduction.toFixed(2);
			}
		});
	},
	onHide() {
		//页面隐藏清除订单信息
		this.clearOrder();
	},
	onBackPress() {
		//页面后退时候，清除订单信息
		this.clearOrder();
	},
	computed: {
		sumPriceFixed: function() {
			return this.sumPrice.toFixed(2);
		},
		goodsPriceFixed: function() {
			return this.goodsPrice.toFixed(2);
		},
		freightFixed: function() {
			return this.freight.toFixed(2);
		}
		// ,deductionFixed: function() {
		// 	return this.deduction.toFixed(2);
		// }
	},
	methods: {
		changeAddr() {
			uni.navigateTo({
				url: '../address/address'
			});
		},
		clearOrder() {
			// uni.removeStorage({
			// 	key: 'buylist',
			// 	success: function(res) {
			// 		this.buylist = [];
			// 		console.log('remove buylist success');
			// 	}
			// });
		},
		toPay() {
			if (this.addrMain.contactPhone) {
				//商品列表
				let goods = [];
				let len = this.buylist.length;
				for (let i = 0; i < len; i++) {
					let good = {
						price: 0,
						productId: 1,
						productName: 'string',
						quantity: 1
					};
					good.price = this.buylist[i].price;
					good.productId = this.buylist[i].id;
					good.productName = this.buylist[i].name;
					good.quantity = this.buylist[i].stock;
					goods.push(good);
				}
				// console.log(this.note);
				uni.request({
					url: this.$tempUrl + 'buyer/order/create',
					method: 'POST',
					data: {
						orderDetailBeans: goods,
						remark: this.note,
						shopId: uni.getStorageSync('shopId'),
						userAddress: this.addrMain.address,
						userCouponsId: this.coupon.userCouponsId,
						userName: this.addrMain.contactName,
						userPhone: this.addrMain.contactPhone,
						userWechatOpenid: uni.getStorageSync('openId')
					},
					success: res => {
						if (res.data.code === 2) {
							uni.showModal({
								title: '失败',
								content: res.data.message,
								showCancel: false
							});
						} else {
							uni.showLoading({
								title: '提交中...'
							});
							setTimeout(() => {
								uni.hideLoading();
								this.payment(res.data.data.id);
							}, 500);
						}
					}
				});
			} else {
				uni.showModal({
					title: '提交失败',
					content: '请选择收货地址',
					showCancel: false
				});
			}
		},
		payment(orderId) {
			uni.showModal({
				title: '支付',
				content: '确认支付￥' + this.sumPrice,
				success: res => {
					if (res.confirm) {
						uni.request({
							url: this.$tempUrl + 'buyer/order/paid',
							method: 'POST',
							data: { openId: uni.getStorageSync('openId'), orderId: orderId },
							success: res => {
								if (res.data.code === 0) {
									uni.reLaunch({
										url: '../tabBar/user',
										success: () => {
											uni.showToast({ title: '支付成功', icon: 'success' });
										}
									});
									// uni.showToast({ title: '支付成功', icon: 'success' });
									// //刷新当前（待付款）列表
									// this.refreshList(1);
									// //刷新已发货列表
									// this.refreshListOther(2);
									// //刷新全部列表
									// this.refreshListOther(0);
								} else {
									uni.showModal({
										title: '提示',
										content: '订单异常，支付失败',
										showCancel: false
									});
									// //刷新当前（待付款）列表
									// this.refreshList(1);
									// //刷新全部列表
									// this.refreshListOther(0);
								}
							}
						});
					} else if (res.cancel) {
						uni.reLaunch({
							url: '../tabBar/user',
							success: () => {
								uni.showToast({ title: '支付已取消，请尽快完成付款', icon: 'none' });
							}
						});
						// uni.showToast({ title: '支付已取消，请尽快完成付款', icon: 'none' });
					}
				}
			});
		},
		toCoupon(goodsPrice) {
			uni.navigateTo({
				url: 'orderCoupon?goodsPrice=' + goodsPrice
			});
		}
	}
};
</script>

<style lang="scss">
.addr {
	width: 86%;
	padding: 20upx 3%;
	margin: 30upx auto 20upx auto;
	box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
	border-radius: 20upx;
	display: flex;
	.icon {
		width: 80upx;
		height: 80upx;
		display: flex;
		align-items: center;
		image {
			width: 60upx;
			height: 60upx;
		}
		// margin-right: 10upx;
	}
	.tel-name {
		width: 570upx;
		display: flex;
		font-size: 32upx;
		.tel {
			margin-left: 40upx;
		}
	}
	.addres {
		width: 570upx;
		font-size: 26upx;
		color: #999;
	}
}
.buy-list {
	width: 86%;
	padding: 10upx 3%;
	margin: 30upx auto 20upx auto;
	box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
	border-radius: 20upx;
	.row {
		margin: 30upx 0;
		.goods-info {
			width: 100%;
			display: flex;
			.img {
				width: 22vw;
				height: 22vw;
				border-radius: 10upx;
				overflow: hidden;
				flex-shrink: 0;
				margin-right: 10upx;
				image {
					width: 22vw;
					height: 22vw;
				}
			}
			.info {
				width: 100%;
				height: 22vw;
				overflow: hidden;
				display: flex;
				flex-wrap: wrap;
				position: relative;
				.title {
					width: 100%;
					font-size: 28upx;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					// text-align: justify;
					overflow: hidden;
				}
				.spec {
					font-size: 22upx;
					background-color: #f3f3f3;
					color: #a7a7a7;
					height: 40upx;
					display: flex;
					align-items: center;
					padding: 0 10upx;
					border-radius: 20upx;
					margin-bottom: 20vw;
				}
				.price-number {
					position: absolute;
					width: 100%;
					bottom: 0upx;
					display: flex;
					justify-content: space-between;
					align-items: flex-end;
					font-size: 28upx;
					height: 40upx;
					.price {
						color: #f06c7a;
					}
					.number {
						display: flex;
						justify-content: center;
						align-items: center;
					}
				}
			}
		}
	}
}
.order {
	width: 86%;
	padding: 10upx 3%;
	margin: 30upx auto 20upx auto;
	box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
	border-radius: 20upx;
	.row {
		margin: 20upx 0;
		height: 40upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.left {
			font-size: 28upx;
		}
		.right {
			margin-left: 40upx;
			font-size: 26upx;
			text-align: right;
			color: #999;
			input {
				font-size: 26upx;
				color: #999;
			}
		}
	}
}
.blck {
	width: 100%;
	height: 100upx;
}
.footer {
	width: 92%;
	padding: 0 4%;
	background-color: #fbfbfb;
	height: 100upx;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	font-size: 28upx;
	position: fixed;
	bottom: 0upx;
	z-index: 5;

	.settlement {
		width: 80%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		.sum {
			width: 50%;
			font-size: 28upx;
			margin-right: 10upx;
			display: flex;
			justify-content: flex-end;
			.money {
				font-weight: 600;
			}
		}
		.btn {
			padding: 0 30upx;
			height: 60upx;
			background-color: #f06c7a;
			color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 30upx;
			border-radius: 40upx;
		}
	}
}
.detail {
	width: 86%;
	padding: 10upx 3%;
	margin: 30upx auto 20upx auto;
	box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
	border-radius: 20upx;
	.row {
		height: 60upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.nominal {
			font-size: 28upx;
		}
		.content {
			font-size: 26upx;
			color: #f06c7a;
		}
	}
}
</style>
