<template>
	<view>
		<view class="tabr" :style="{ top: headerTop }">
			<view :class="{ on: typeClass == 'valid' }" @tap="switchType('valid')">未使用({{ couponValidList.length }})</view>
			<view :class="{ on: typeClass == 'completed' }" @tap="switchType('completed')">已使用</view>
			<view :class="{ on: typeClass == 'invalid' }" @tap="switchType('invalid')">已失效</view>
			<view class="border" :class="typeClass"></view>
		</view>
		<view class="place"></view>
		<view class="list">
			<!-- 优惠券列表 -->
			<view class="sub-list valid" :class="subState">
				<view class="tis" v-if="couponValidList.length == 0">没有数据~</view>
				<view class="row" v-for="(row, index) in couponValidList" :key="index">
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
			</view>
			<view class="sub-list completed" :class="subState">
				<view class="tis" v-if="completedList.length == 0">没有数据~</view>
				<view class="row" v-for="(row, index) in completedList" :key="index">
					<!-- content -->
					<view class="carrier">
						<view class="left">
							<view class="title">{{ row.couponsName }}</view>
							<view class="term">{{ row.effectiveDate }} ~ {{ row.expiryDate }}</view>
							<!-- <view class="icon shixiao"></view> -->
							<view class="gap-top"></view>
							<view class="gap-bottom"></view>
						</view>
						<view class="right completed">
							<view class="ticket">
								<view class="num">{{ row.couponsAmount }}</view>
								<view class="unit">元</view>
							</view>
							<view class="criteria" v-if="row.minimumAmount !== 0">满{{ row.minimumAmount }}使用</view>
							<view class="criteria" v-if="row.minimumAmount === 0">无门槛</view>
							<view class="use2">已使用</view>
						</view>
					</view>
				</view>
			</view>
			<view class="sub-list invalid" :class="subState">
				<view class="tis" v-if="couponinvalidList.length == 0">没有数据~</view>
				<view class="row" v-for="(row, index) in couponinvalidList" :key="index">
					<!-- content -->
					<view class="carrier">
						<view class="left">
							<view class="title">{{ row.couponsName }}</view>
							<view class="term">{{ row.effectiveDate }} ~ {{ row.expiryDate }}</view>
							<view class="icon shixiao"></view>
							<view class="gap-top"></view>
							<view class="gap-bottom"></view>
						</view>
						<view class="right invalid">
							<view class="ticket">
								<view class="num">{{ row.couponsAmount }}</view>
								<view class="unit">元</view>
							</view>
							<view class="criteria" v-if="row.minimumAmount !== 0">满{{ row.minimumAmount }}使用</view>
							<view class="criteria" v-if="row.minimumAmount === 0">无门槛</view>
							<view class="use2">已过期</view>
						</view>
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
			couponValidList: [],
			completedList: [],
			couponinvalidList: [],
			headerTop: 0,
			//控制滑动效果
			typeClass: 'valid',
			subState: 'showvalid'
		};
	},
	onPageScroll(e) {},
	//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
	onPullDownRefresh() {
		setTimeout(function() {
			uni.stopPullDownRefresh();
		}, 1000);
	},
	onLoad() {
		uni.request({
			url: this.$tempUrl + 'buyer/coupons/list',
			method: 'GET',
			data: { openId: uni.getStorageSync('openId') },
			success: res => {
				console.log(res.data.data);
				const data = res.data.data;
				this.couponValidList = data.unused;
				this.completedList = data.used;
				this.couponinvalidList = data.disabled;
			}
		});
		//兼容H5下排序栏位置
		// #ifdef H5
		//定时器方式循环获取高度为止，这么写的原因是onLoad中head未必已经渲染出来。
		let Timer = setInterval(() => {
			let uniHead = document.getElementsByTagName('uni-page-head');
			if (uniHead.length > 0) {
				this.headerTop = uniHead[0].offsetHeight + 'px';
				clearInterval(Timer); //清除定时器
			}
		}, 1);
		// #endif
		console.log(this.subState);
	},
	methods: {
		toCart() {
			uni.switchTab({
				url: '../../tabBar/cart'
			});
		},
		switchType(type) {
			if (this.typeClass == type) {
				return;
			}
			uni.pageScrollTo({
				scrollTop: 0,
				duration: 0
			});
			this.typeClass = type;
			this.subState = this.typeClass == '' ? '' : 'show' + type;
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
@font-face {
	font-family: 'HMfont-home';
	src: url('data:application/x-font-woff2;charset=utf-8;base64,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')
		format('woff2');
}
.icon {
	font-family: 'HMfont-home' !important;
	font-size: 60upx;
	font-style: normal;
	color: #000000;
	&.jia {
		&:before {
			content: '\e641';
		}
	}
	&.jian {
		&:before {
			content: '\e643';
		}
	}
	&.shanchu {
		&:before {
			content: '\e6a4';
		}
	}
	&.shixiao {
		&:before {
			content: '\e669';
		}
	}
}
.hidden {
	display: none !important;
}
.place {
	width: 100%;
	height: 95upx;
}
.tabr {
	background-color: #fff;
	width: 94%;
	height: 95upx;
	padding: 0 3%;
	border-bottom: solid 1upx #dedede;
	position: fixed;
	top: 0;
	z-index: 10;
	view {
		width: 33%;
		height: 90upx;
		justify-content: center;
		align-items: center;
		font-size: 32upx;
		color: #999;
	}
	.on {
		color: #f06c7a;
	}
	.border {
		height: 4upx;
		background-color: #f06c7a;
		transition: all 0.3s ease-out;
		&.completed {
			transform: translate3d(100%, 0, 0);
		}
		&.invalid {
			transform: translate3d(200%, 0, 0);
		}
	}
}
.list {
	width: 100%;
	display: block;
	position: relative;
}
.sub-list {
	&.valid {
		position: absolute;
		top: 0;
		left: 0;
		display: none;
	}
	&.completed {
		position: absolute;
		top: 0;
		left: 100%;
		display: none;
	}
	&.invalid {
		position: absolute;
		top: 0;
		left: 200%;
		display: none;
	}
	transition: all 0.3s ease-out;
	&.showvalid {
		display: flex;
		transform: translateX(0);
	}
	&.showcompleted {
		display: flex;
		transform: translateX(-100%);
	}
	&.showinvalid {
		display: flex;
		transform: translateX(-200%);
	}
	width: 100%;
	padding: 20upx 0 120upx 0;
	.tis {
		width: 100%;
		height: 60upx;
		justify-content: center;
		align-items: center;
		font-size: 32upx;
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
		.menu {
			.icon {
				color: #fff;
				font-size: 50upx;
			}
			position: absolute;
			width: 28%;
			height: 100%;
			right: 0;
			justify-content: center;
			align-items: center;
			background-color: red;
			color: #fff;
			z-index: 2;
		}
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
}
</style>
