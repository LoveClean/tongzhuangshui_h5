<template>
	<view>
		<view class="row" v-for="(row, index) in couponValidList" :key="index">
			<!-- content -->
			<view class="carrier">
				<view class="left0">
					<image class="icon" src="../../../static/img/VIP.png" mode="aspectFit"></image>
					<!-- <view class="ticket">
						<view class="num">{{ row.couponsAmount }}</view>
						<view class="unit">元</view>
					</view>
					<view class="criteria" v-if="row.minimumAmount !== 0">满{{ row.minimumAmount }}使用</view>
					<view class="criteria" v-if="row.minimumAmount === 0">无门槛</view>
					<view class="use" :class="row.couponsScope === 4 ? '' : 'onlyShop'">去使用</view> -->
				</view>
				<view class="left">
					<view class="term">{{ row.couponsName }}</view>
					<view class="term">
						<label class="money0">总余额</label>
						<label class="money">￥127</label>
					</view>
					<view class="notMsg"><label>先买卡，再购物。仅黄哥送水站可用。</label></view>
				</view>
				<view class="right">
					<view class="criteria"></view>
					<view class="ticket">
						<view class="unit"></view>
						<view class="num">></view>
						<!-- <view class="unit">></view> -->
					</view>
					<view class="use" @tap="toDeposit()">去充值</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			couponValidList: [
				{
					userCouponsId: 51,
					couponsId: 1,
					couponsName: '黄哥送水站会员卡',
					couponsAmount: 0.05,
					minimumAmount: 0,
					effectiveDate: '2019-06-28',
					expiryDate: '2019-07-08',
					couponsScope: 4,
					shopId: 0,
					status: 2,
					notMsg: null,
					createBy: null,
					createDate: '2019-06-28 16:23:42',
					updateBy: null,
					updateDate: '2019-06-28 16:24:30'
				},
				{
					userCouponsId: 51,
					couponsId: 1,
					couponsName: '测试',
					couponsAmount: 0.05,
					minimumAmount: 0,
					effectiveDate: '2019-06-28',
					expiryDate: '2019-07-08',
					couponsScope: 4,
					shopId: 0,
					status: 2,
					notMsg: null,
					createBy: null,
					createDate: '2019-06-28 16:23:42',
					updateBy: null,
					updateDate: '2019-06-28 16:24:30'
				}
			]
		};
	},
	onPageScroll(e) {},
	//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
	onPullDownRefresh() {
		setTimeout(function() {
			uni.stopPullDownRefresh();
		}, 1000);
	},
	onLoad() {},
	methods: {
		toDeposit() {
			uni.navigateTo({
				url: '../deposit/deposit'
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
		.left0 {
			flex-shrink: 0;
			width: 20%;
			color: #fff;
			background: #fff;
			// background: linear-gradient(to right, #ec625c, #ee827f);
			justify-content: center;
			.icon {
				margin-top: 20upx;
				margin-left: 14upx;
				width: 90upx;
				height: 90upx;
				border: solid 1upx #e2e2e2;
				border-radius: 100%;
			}
		}
		.left {
			width: 100%;
			// .title {
			// 	padding-top: 3vw;
			// 	width: 90%;
			// 	margin: 0 5%;
			// 	font-size: 36upx;
			// }
			padding-top: 2vw;
			.term {
				// padding-top: 1vw;
				width: 100%;
				margin-left: 5%;
				font-size: 26upx;
				color: #666;
				.money0 {
					padding-top: 1vw;
				}
				.money {
					color: black;
					font-size: 36upx;
				}
			}
			.notMsg {
				width: 100%;
				margin-left: 5%;
				font-size: 22upx;
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
		}
		.right {
			flex-shrink: 0;
			width: 150upx;
			color: #777;
			// background: linear-gradient(to right, #ec625c, #ee827f);
			background: #fff;
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
					// font-weight: 600;
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
				background-color: #ee827f;
				color: #fff;
				// border-radius: 40upx;
				margin-top: 40upx;
				padding: 0 10upx;
				&.onlyShop {
					color: #1e9fff;
				}
			}
		}
	}
}
</style>
