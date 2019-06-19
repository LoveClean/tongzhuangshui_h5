<template>
	<view>
		<!-- 占位 -->
		<view class="place"></view>
		<view class="goods-list" v-show="goodsList.length > 0">
			<view class="product-list">
				<view :class="goods.orderStatus === 2 ? 'product watermark-image' : 'product'" v-for="goods in goodsList" :key="goods.id" @tap="toGoods(goods)">
					<!-- <image mode="widthFix" :src="goods.img"></image> -->
					<!-- <view class="info">
						<view class="slogan">企业名称：</view>
					</view> -->
					<view class="info">
						<view class="slogan">订单号：{{ goods.id }}</view>
					</view>
					<view v-show="goods.orderDetailList.length > 0" v-for="orderDetail in goods.orderDetailList" :key="orderDetail.id">
						<view class="info">
							<view class="name">{{ orderDetail.productName }}</view>
							<view class="name">数量：{{ orderDetail.quantity }}</view>
						</view>
					</view>
					<view class="info">
						<view class="price">姓名：{{ goods.userName }}</view>
						<view class="price">电话：{{ goods.userPhone }}</view>
						<view class="price">总价：￥{{ goods.payableAmount }}</view>
					</view>
					<view class="info">
						<view class="slogan">地址：{{ goods.userAddress }}</view>
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
			goodsList: [
				{
					id: '1560152978155841193',
					shopId: 1,
					userId: 1,
					userOpenid: null,
					userName: 'string',
					userPhone: 'string',
					userAddress: 'string',
					orderAmount: 20,
					payableAmount: 20,
					orderStatus: 2,
					payStatus: 0,
					orderDetailList: [
						{
							id: 2,
							orderId: '1560152978155841193',
							productId: 7,
							productName: '农夫山泉桶装水19L',
							price: 20,
							quantity: 1
						}
					],
					createBy: null,
					createDate: '2019-06-10 15:49:39',
					updateBy: null,
					updateDate: '2019-06-10 15:49:39'
				},
				{
					id: '1560240947460319492',
					shopId: 1,
					userId: 4,
					userOpenid: null,
					userName: '黄先生',
					userPhone: '18867726399',
					userAddress: '浙江省-杭州市-滨江区-浦沿街道高润云杉郡3幢1单元1401室',
					orderAmount: 260,
					payableAmount: 260,
					orderStatus: 0,
					payStatus: 0,
					orderDetailList: [
						{
							id: 3,
							orderId: '1560240947460319492',
							productId: 7,
							productName: '农夫山泉桶装水19L',
							price: 20,
							quantity: 7
						},
						{
							id: 4,
							orderId: '1560240947460319492',
							productId: 8,
							productName: '哇哈哈桶装水19L',
							price: 15,
							quantity: 8
						}
					],
					createBy: null,
					createDate: '2019-06-11 16:15:48',
					updateBy: null,
					updateDate: '2019-06-11 16:15:48'
				},
				{
					id: '1560241074858309931',
					shopId: 1,
					userId: 4,
					userOpenid: null,
					userName: '黄先生',
					userPhone: '18867726399',
					userAddress: '浙江省-杭州市-滨江区-浦沿街道高润云杉郡3幢1单元1401室',
					orderAmount: 260,
					payableAmount: 260,
					orderStatus: 0,
					payStatus: 0,
					orderDetailList: [
						{
							id: 5,
							orderId: '1560241074858309931',
							productId: 7,
							productName: '农夫山泉桶装水19L',
							price: 20,
							quantity: 7
						},
						{
							id: 6,
							orderId: '1560241074858309931',
							productId: 8,
							productName: '哇哈哈桶装水19L',
							price: 15,
							quantity: 8
						}
					],
					createBy: null,
					createDate: '2019-06-11 16:17:55',
					updateBy: null,
					updateDate: '2019-06-11 16:17:55'
				},
				{
					id: '1560241408757585880',
					shopId: 1,
					userId: 4,
					userOpenid: 'oB34W5sAgBnm6-mLHn4ouX5635LI',
					userName: '黄先生',
					userPhone: '18867726399',
					userAddress: '浙江省-杭州市-滨江区-浦沿街道高润云杉郡3幢1单元1401室',
					orderAmount: 260,
					payableAmount: 260,
					orderStatus: 0,
					payStatus: 0,
					orderDetailList: [
						{
							id: 7,
							orderId: '1560241408757585880',
							productId: 7,
							productName: '农夫山泉桶装水19L',
							price: 20,
							quantity: 7
						},
						{
							id: 8,
							orderId: '1560241408757585880',
							productId: 8,
							productName: '哇哈哈桶装水19L',
							price: 15,
							quantity: 8
						}
					],
					createBy: null,
					createDate: '2019-06-11 16:23:29',
					updateBy: null,
					updateDate: '2019-06-11 16:23:29'
				},
				{
					id: '1560242055960396693',
					shopId: 1,
					userId: 4,
					userOpenid: 'oB34W5sAgBnm6-mLHn4ouX5635LI',
					userName: '黄先生',
					userPhone: '18867726399',
					userAddress: '浙江省-杭州市-滨江区-浦沿街道高润云杉郡3幢1单元1401室',
					orderAmount: 40,
					payableAmount: 40,
					orderStatus: 0,
					payStatus: 0,
					orderDetailList: [
						{
							id: 14,
							orderId: '1560242055960396693',
							productId: 7,
							productName: '农夫山泉桶装水19L',
							price: 20,
							quantity: 1
						},
						{
							id: 15,
							orderId: '1560242055960396693',
							productId: 7,
							productName: '农夫山泉桶装水19L',
							price: 20,
							quantity: 1
						}
					],
					createBy: null,
					createDate: '2019-06-11 16:34:15',
					updateBy: null,
					updateDate: '2019-06-11 16:34:15'
				},
				{
					id: '1560242108464629468',
					shopId: 1,
					userId: 4,
					userOpenid: 'oB34W5sAgBnm6-mLHn4ouX5635LI',
					userName: '胡歌',
					userPhone: '15836982365',
					userAddress: '北京市-市辖区-东城区-东华门街道天安门广场',
					orderAmount: 40,
					payableAmount: 40,
					orderStatus: 0,
					payStatus: 0,
					orderDetailList: [
						{
							id: 16,
							orderId: '1560242108464629468',
							productId: 7,
							productName: '农夫山泉桶装水19L',
							price: 20,
							quantity: 1
						},
						{
							id: 17,
							orderId: '1560242108464629468',
							productId: 7,
							productName: '农夫山泉桶装水19L',
							price: 20,
							quantity: 1
						}
					],
					createBy: null,
					createDate: '2019-06-11 16:35:08',
					updateBy: null,
					updateDate: '2019-06-11 16:35:08'
				},
				{
					id: '1560242168271736482',
					shopId: 1,
					userId: 4,
					userOpenid: 'oB34W5sAgBnm6-mLHn4ouX5635LI',
					userName: '胡歌',
					userPhone: '15836982365',
					userAddress: '北京市-市辖区-东城区-东华门街道天安门广场',
					orderAmount: 40,
					payableAmount: 40,
					orderStatus: 0,
					payStatus: 0,
					orderDetailList: [
						{
							id: 18,
							orderId: '1560242168271736482',
							productId: 7,
							productName: '农夫山泉桶装水19L',
							price: 20,
							quantity: 1
						},
						{
							id: 19,
							orderId: '1560242168271736482',
							productId: 7,
							productName: '农夫山泉桶装水19L',
							price: 20,
							quantity: 1
						}
					],
					createBy: null,
					createDate: '2019-06-11 16:36:08',
					updateBy: null,
					updateDate: '2019-06-11 16:36:08'
				},
				{
					id: '1560242454397566738',
					shopId: 1,
					userId: 4,
					userOpenid: 'oB34W5sAgBnm6-mLHn4ouX5635LI',
					userName: '胡歌',
					userPhone: '15836982365',
					userAddress: '北京市-市辖区-东城区-东华门街道天安门广场',
					orderAmount: 70,
					payableAmount: 70,
					orderStatus: 0,
					payStatus: 0,
					orderDetailList: [
						{
							id: 20,
							orderId: '1560242454397566738',
							productId: 8,
							productName: '哇哈哈桶装水19L',
							price: 15,
							quantity: 2
						},
						{
							id: 21,
							orderId: '1560242454397566738',
							productId: 7,
							productName: '农夫山泉桶装水19L',
							price: 20,
							quantity: 2
						}
					],
					createBy: null,
					createDate: '2019-06-11 16:40:54',
					updateBy: null,
					updateDate: '2019-06-11 16:40:54'
				},
				{
					id: '1560244226638183011',
					shopId: 1,
					userId: 4,
					userOpenid: 'oB34W5sAgBnm6-mLHn4ouX5635LI',
					userName: '胡歌',
					userPhone: '15836982365',
					userAddress: '北京市-市辖区-东城区-东华门街道天安门广场',
					orderAmount: 35,
					payableAmount: 35,
					orderStatus: 0,
					payStatus: 0,
					orderDetailList: [
						{
							id: 23,
							orderId: '1560244226638183011',
							productId: 8,
							productName: '哇哈哈桶装水19L',
							price: 15,
							quantity: 1
						},
						{
							id: 24,
							orderId: '1560244226638183011',
							productId: 7,
							productName: '农夫山泉桶装水19L',
							price: 20,
							quantity: 1
						}
					],
					createBy: null,
					createDate: '2019-06-11 17:10:26',
					updateBy: null,
					updateDate: '2019-06-11 17:10:26'
				},
				{
					id: '1560251209525588769',
					shopId: 1,
					userId: 4,
					userOpenid: 'oB34W5sAgBnm6-mLHn4ouX5635LI',
					userName: '黄先生',
					userPhone: '18867726399',
					userAddress: '浙江省-杭州市-滨江区-浦沿街道高润云杉郡3幢1单元1401室',
					orderAmount: 35,
					payableAmount: 35,
					orderStatus: 0,
					payStatus: 0,
					orderDetailList: [
						{
							id: 25,
							orderId: '1560251209525588769',
							productId: 8,
							productName: '哇哈哈桶装水19L',
							price: 15,
							quantity: 1
						},
						{
							id: 26,
							orderId: '1560251209525588769',
							productId: 7,
							productName: '农夫山泉桶装水19L',
							price: 20,
							quantity: 1
						}
					],
					createBy: null,
					createDate: '2019-06-11 19:06:49',
					updateBy: null,
					updateDate: '2019-06-11 19:06:49'
				}
			]
		};
	},
	onLoad(option) {},
	onPullDownRefresh() {
		console.log('refresh');
		setTimeout(function() {
			uni.stopPullDownRefresh();
		}, 1000);
	},
	methods: {
		toGoods(goods) {
			uni.showModal({
				title: '提示',
				content: '是否完结订单？',
				success: res => {
					if (res.confirm) {
						console.log('用户点击确定');
						uni.request({
							url: this.$tempUrl + 'seller/order/finish',
							data: { orderId: goods.id },
							method: 'POST',
							success: res => {
								uni.startPullDownRefresh();
								uni.showToast({ title: '订单' + goods.id + '已完结', icon: 'success' });
							}
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

	background: url('../../static/img/shuiyin/shuiyinquxiao.png') no-repeat;
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
