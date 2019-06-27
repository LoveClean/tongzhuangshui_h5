<template>
	<view>
		<view class="content">
			<view class="list">
				<view class="row" v-for="(row, index) in items" :key="index">
					<view class="left" @tap="confirmAddr(row)">
						<view :class="row.label ? 'head2' : 'head'">{{ row.updateBy }}</view>
						<!-- <view class="head2">{{ row.updateBy }}</view> -->
					</view>
					<view class="center" @tap="confirmAddr(row)">
						<view class="name-tel">
							<view class="name">{{ row.contactName }}</view>
							<view class="tel">{{ row.contactPhone }}</view>
							<view class="label" v-if="row.label">{{ row.updateBy }}</view>
						</view>
						<view class="address">{{ row.areaName }} {{ row.address }}</view>
					</view>
					<view class="right"><view class="icon bianji" @tap.stop="editButton(row)"></view></view>
				</view>
			</view>
		</view>
		<view class="tis" v-if="items.length === 0">空空如也，快去添加个地址吧~</view>
		<view class="add">
			<view class="btn" @tap="addButton">
				<view class="icon tianjia"></view>
				新建收货地址
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			type: '',
			items: [],
			// buylist: [], //订单列表
			goodsPrice: 0.0, //商品合计价格
			sumPrice: 0.0, //用户付款价格
			freight: 12.0, //运费
			note: '', //备注
			int: 1200, //抵扣积分
			deduction: 0 //抵扣价格
		};
	},
	onShow() {
		uni.request({
			url: this.$tempUrl + 'userAddress/list',
			method: 'GET',
			data: { openId: uni.getStorageSync('openId') },
			success: res => {
				console.log(res.data.data);
				this.items = res.data.data;
				this.items.forEach(item => {
					switch (item.label) {
						case '0':
							item.updateBy = '家';
							break;
						case '1':
							item.updateBy = '公司';
							break;
						case '2':
							item.updateBy = '学校';
							break;
						default:
							item.updateBy = item.contactName.substring(0, 1);
							break;
					}
				});
			}
		});
	},
	methods: {
		confirmAddr(item) {
			console.log('confirmAddr');
			uni.setStorage({
				key: 'confirmAddr',
				data: item,
				success: () => {
					uni.navigateBack({});
				}
			});
		},
		addButton() {
			console.log('addButton');
			uni.navigateTo({
				url: 'edit'
			});
		},
		editButton(row) {
			console.log('editButton');
			uni.navigateTo({
				url:
					'edit?id=' +
					row.id +
					'&contactName=' +
					row.contactName +
					'&contactPhone=' +
					row.contactPhone +
					'&areaName=' +
					row.areaName +
					'&address=' +
					row.address +
					'&latitude=' +
					row.latitude +
					'&longitude=' +
					row.longitude +
					'&label=' +
					row.label +
					'&type=edit'
			});
		}
	}
};
</script>

<style lang="scss">
view {
	display: flex;
}
@font-face {
	font-family: 'HMfont-home';
	src: url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAMIAAsAAAAABvwAAAK8AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDBgqBSIFAATYCJAMMCwgABCAFhG0HVBskBsiusClj9ljNiEIaBdizs389YOCARVDt99mzu+8dMMpzQEn5KEAZRez+yRDbSDIixkYo1tF/+vv5OxYJFk2VghXWbbzzPn8D/OMG3vvXGTU90ZFhOrNJROZwCRGjj/Iry36wAbfSxBsuNGggeG9sMbJKDd7xg8vpr4ACmWdZLnMtGxMwwUD3wCiywi3oDWMXuITzBNpNc4BP3j5/Q1thTQvE1SQiaOd8isKSrUJds7aIVyqt6XECAF6Gj49/sBcUSZVZc09duQng/CfPcXTVrIs+gj+fBWwTGZsghbhcGzurJhgZ1S6rt2fXipDmCv5PyNMltf2HRxJEzSrsBKtIk9wU32WS+E1w14UZ1HFiG+QkJg3ODWmyn5/20eOvTz5LnR6l8aWDT5Sn3wLtYlfNe7RIik/fN961C3Vftf6YZLr5ZMcjU/LExqD9u3LzvKE8KQtBGAp9ilm1XbAK2m83TdlozEvQ0Zbrh8HBMrKDB03MjRwHaJKP2f5jf+NfDvML4f+tHQX8+EJvkwL1z9Mqwfi/kd+zq+hCS5+LynN5piObGRlNaNedmrJc/R7jVUO3agmtOT7zJy32WkjWahGihbQJlQ5bklpT7ENotyG3ucOAjpoobVi3BxB6HSDp9h2yXne0kDSoDPtBrTdQaHc61D07LEezm1Im4wBLc2z6UoaO0bpR8SdHLifNCkPKL+s4CaLX5Skm77hknWNBdxLt9SzEmkqBWXAZ57lgSyVl37YaZqMzt7tWd6OtshTQdYJixLAAKplDTT5RCv3Bplu6/ycWcXJEW+pqrL+YGkuGR14unh7onazsVXcv13RNRPb0mBCqUaKAssDCcjsmUKt+VIr5zJbGiMjIGTfqV+sr21pfUXxALmvCmpMjRY5i9G5CZepynIyYZOr+sksyR2W0UHLiChIrRmXfA0E')
		format('woff2');
}
.icon {
	font-family: 'HMfont-home' !important;
	font-size: 60upx;
	font-style: normal;
	color: #000000;
	&.bianji {
		&:before {
			content: '\e61b';
		}
	}
	&.tianjia {
		&:before {
			content: '\e81a';
		}
	}
}
.add {
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 120upx;
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
.list {
	flex-wrap: wrap;
	.row {
		width: 96%;
		padding: 20upx 2%;
		.left {
			width: 90upx;
			flex-shrink: 0;
			align-items: center;
			.head {
				width: 70upx;
				height: 70upx;
				background: linear-gradient(to right, #c2c2c2, #aaaaaa);
				color: #fff;
				justify-content: center;
				align-items: center;
				border-radius: 60upx;
				font-size: 35upx;
			}
			.head2 {
				width: 70upx;
				height: 70upx;
				background: linear-gradient(to right, #ffb800, #ff5722);
				color: #fff;
				justify-content: center;
				align-items: center;
				border-radius: 60upx;
				font-size: 30upx;
			}
		}
		.center {
			width: 100%;
			flex-wrap: wrap;
			.name-tel {
				width: 100%;
				align-items: baseline;
				.name {
					font-size: 34upx;
				}
				.tel {
					margin-left: 30upx;
					font-size: 24upx;
					color: #777;
				}
				.default {
					font-size: 22upx;

					background-color: #f06c7a;
					color: #fff;
					padding: 0 18upx;
					border-radius: 24upx;
					margin-left: 20upx;
				}
				.label {
					font-size: 22upx;

					background-color: #f06c7a;
					// background-color: #1e9fff;
					color: #fff;
					padding: 0 18upx;
					border-radius: 24upx;
					margin-left: 20upx;
				}
			}
			.address {
				width: 100%;
				font-size: 24upx;
				align-items: baseline;
				color: #777;
			}
		}
		.right {
			flex-shrink: 0;
			align-items: center;
			margin-left: 20upx;
			.icon {
				justify-content: center;
				align-items: center;
				width: 80upx;
				height: 60upx;
				border-left: solid 1upx #aaa;
				font-size: 40upx;
				color: #777;
			}
		}
	}
}
</style>
