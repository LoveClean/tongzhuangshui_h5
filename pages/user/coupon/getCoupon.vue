<template>
	<view>
		<view><image style="width: 750upx; height: 450upx; background-color: #f5f5f5;" src="../../../static/img/coupon/top2.gif" mode="aspectFit"></image></view>
		<view class="row" v-if="row.couponsName">
			<!-- content -->
			<view class="carrier">
				<view class="left">
					<view class="title">{{ row.couponsName }}</view>
					<view class="term">{{ row.effectiveDate }} ~ {{ row.expiryDate }}</view>
					<view class="gap-top"></view>
					<view class="gap-bottom"></view>
				</view>
				<view class="right" :class="row.couponsScope === 4 ? '' : 'onlyShop'" @tap="toCart()">
					<view class="ticket">
						<view class="num">{{ row.couponsAmount }}</view>
						<view class="unit">元</view>
					</view>
					<view class="criteria" v-if="row.minimumAmount !== 0">满{{ row.minimumAmount }}使用</view>
					<view class="criteria" v-if="row.minimumAmount === 0">无门槛</view>
					<view class="use" :class="row.couponsScope === 4 ? '' : 'onlyShop'">去使用</view>
				</view>
			</view>
		</view>
		<view class="row2">
			<view>
				<label class="title">---------------活动规则---------------</label>
				<ol>
					<li>1. 下单即可享受红包立减优惠；</li>
					<li>2. 每个分享红包链接仅限10人领取；</li>
					<li>3. 每人只有1次领取红包机会；</li>
					<li>4. 红包仅限在线支付使用，且收货人手机号、领取红包时输入的手机号和账号中的手机号需为同一手机号；</li>
					<li>5. 红包可以与满减、折扣等其他优惠叠加使用，首单红包不可叠加使用；</li>
					<li>6. 红包可以在来一桶水小程序下单时选择在线支付时使用；</li>
					<li>7. 其他未尽事宜，请咨询客服85222235</li>
				</ol>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			row: {},
			couponsId: 0
		};
	},
	onHide() {
		this.toCart();
	},
	onShareAppMessage(res) {
		return {
			title: '【来一桶水】快捷定水专享红包，不仅是快更能省钱!',
			path: '/pages/user/coupon/getCoupon?couponsId=' + this.couponsId,
			imageUrl: '../../../static/img/coupon/top2.gif'
		};
	},
	onLoad(option) {
		this.couponsId = option.couponsId;
		// #ifdef MP-WEIXIN
		uni.showShareMenu({
			withShareTicket: true
		});
		uni.showLoading({ title: '加载中' });
		uni.login({
			provider: 'weixin',
			success: loginRes => {
				uni.request({
					url: this.$tempUrl + 'wechat/getOpenIdXcx',
					data: {
						appid: 'wxc04f9bfb1157e062',
						secret: '9258da2f76f0de7ff1b3d740be743128',
						js_code: loginRes.code,
						grant_type: 'authorization_code'
					},
					method: 'GET',
					success: res => {
						uni.setStorageSync('openId', res.data.openid);
						uni.request({
							url: this.$tempUrl + 'user/insert?wechatOpenid=' + uni.getStorageSync('openId'),
							method: 'POST',
							success: res => {
								uni.request({
									url: this.$tempUrl + 'buyer/coupons/receive',
									method: 'POST',
									data: {
										couponsId: this.couponsId,
										openId: uni.getStorageSync('openId')
									},
									success: res => {
										uni.hideLoading();
										switch (res.data.code) {
											case 0:
												this.row = res.data.data;
												break;
											case 401:
											case 403:
												this.showFail('来晚了,优惠券已被领完啦!');
												break;
											case 405:
												this.showFail('您已领取过此券,请勿重复领取!');
												break;
											default:
												this.showFail(res.data.message);
												break;
										}
									}
								});
							}
						});
					}
				});
			}
		});
		// #endif
	},
	methods: {
		toCart() {
			uni.reLaunch({
				url: '../../tabBar/cart'
			});
		},
		showFail(content) {
			uni.showModal({
				title: '失败',
				content: content,
				showCancel: false,
				success: res => {
					if (res.confirm) {
						uni.reLaunch({
							url: '../../tabBar/user'
						});
					}
				}
			});
		}
	}
};
</script>

<style lang="scss">
view {
	display: flex;
	flex-wrap: wrap;
}
page {
	position: relative;
	background-color: #f5f5f5;
}
.row {
	width: 92%;
	height: 24vw;
	margin: 20upx auto 10upx auto;
	border-radius: 8upx;
	// box-shadow: 0upx 0 10upx rgba(0,0,0,0.1);
	align-items: center;
	position: relative;
	overflow: hidden;
	z-index: 4;
	border: 0;
	.carrier {
		background-color: #fff;
		position: absolute;
		width: 100%;
		padding: 0 0;
		height: 100%;
		z-index: 3;
		flex-wrap: nowrap;
		.left {
			width: 100%;
			.title {
				padding-top: 3vw;
				width: 90%;
				margin: 0 5%;
				font-size: 36upx;
			}
			.term {
				width: 90%;
				margin: 0 5%;
				font-size: 26upx;
				color: #999;
			}
			position: relative;
			.gap-top,
			.gap-bottom {
				position: absolute;
				width: 20upx;
				height: 20upx;
				right: -10upx;
				border-radius: 100%;
				background-color: #f5f5f5;
			}
			.gap-top {
				top: -10upx;
			}
			.gap-bottom {
				bottom: -10upx;
			}
			.shixiao {
				position: absolute;
				right: 20upx;
				font-size: 150upx;
				z-index: 6;
				color: rgba(153, 153, 153, 0.2);
			}
		}
		.right {
			flex-shrink: 0;
			width: 28%;
			color: #fff;
			background: linear-gradient(to right, #ec625c, #ee827f);
			&.onlyShop {
				background: linear-gradient(to right, #01aaed, #1e9fff);
			}
			&.completed {
				background: linear-gradient(to right, #aaa, #999);
				.use {
					color: #aaa;
				}
				.use2 {
					font-size: 24upx;
				}
			}
			&.invalid {
				background: linear-gradient(to right, #aaa, #999);
				.use {
					color: #aaa;
				}
				.use2 {
					font-size: 24upx;
				}
			}
			justify-content: center;
			.ticket,
			.criteria {
				width: 100%;
			}
			.ticket {
				padding-top: 1vw;
				justify-content: center;
				align-items: baseline;
				height: 6vw;
				.num {
					font-size: 42upx;
					font-weight: 600;
				}
				.unit {
					font-size: 24upx;
				}
			}
			.criteria {
				justify-content: center;

				font-size: 28upx;
			}
			.use {
				width: 50%;
				height: 40upx;
				justify-content: center;
				align-items: center;
				font-size: 24upx;
				background-color: #fff;
				color: #ee827f;
				border-radius: 40upx;
				padding: 0 10upx;
				&.onlyShop {
					color: #1e9fff;
				}
			}
		}
	}
}
.row2 {
	width: 100%;
	height: 500upx;
	margin: 20upx 30upx;
	padding: 0 20upx;
	border-radius: 8upx;
	// box-shadow: 0upx 0 10upx rgba(0,0,0,0.1);
	// align-items: center;
	// position: relative;
	// overflow: hidden;
	// z-index: 4;
	// border: 0;
	// border: #000 1upx solid;
	background-color: #ffffff;
	color: #626262;
	font-size: 28upx;
	padding-bottom: 20upx;
	.title {
		width: 100%;
		padding-top: 20upx;
		text-align: center;
		font-size: 32upx;
	}
}
</style>
