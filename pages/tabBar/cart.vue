<template>
	<view>
		<uni-popup :h5Top="flag" :show="type === 'middle-list'" position="middle" mode="fixed" @hidePopup="togglePopup('')">
			<view class="" v-for="(item, index) in items" :key="index">
				<view class="popup" @tap="addrChange(item)">
					<view class="left">
						<view class="icon"><image src="../../static/img/log.png" mode=""></image></view>
						<view>
							<view class="tel-name">
								<view class="name">{{ item.name }}</view>
								<view class="tel">{{ item.contact }}</view>
								<view class="distance" v-show="item.distance < 1000">距离:{{ item.distance }}m</view>
								<view class="distance" v-show="item.distance > 1000">距离:{{ item.distance / 1000 }}km</view>
							</view>
							<view class="addres">{{ item.areaName }} {{ item.address }}</view>
						</view>
					</view>
				</view>
			</view>
		</uni-popup>
		<view class="status" :style="{ position: headerPosition, top: statusTop }" @tap="toAddress">
			<label style="padding-left: 20upx;"></label>
			<uni-icon type="location-filled" color="#FFB800" size="16"></uni-icon>
			<label style="font-size: 30upx;padding: 0 5upx;">{{ myAddrMain.address }}</label>
			<label style="font-size: 20upx;">></label>
		</view>
		<!-- <view class="title" @tap="toAddress">
			<view>
				<uni-icon type="location-filled" color="#FFB800" size="16"></uni-icon>
				<label style="font-size: 30upx;padding: 0 5upx;">{{ myAddrMain.address }}</label>
				<label style="font-size: 20upx;">></label>
			</view>
		</view> -->
		<view class="header" :style="{ position: headerPosition, top: headerTop }">
			<!-- 商家地址 -->
			<view class="main" v-if="addrMain.name">
				<view class="left">
					<view class="icon"><image src="../../static/img/log.png" mode=""></image></view>
					<view>
						<view class="tel-name">
							<view class="name">{{ addrMain.name }}</view>
							<view class="tel" @tap="toCall(addrMain.contact)">
								{{ addrMain.contact }}
								<uni-icon class="phone-icon" type="phone-filled" color="#f06c7a" size="18"></uni-icon>
							</view>
						</view>
						<!-- <view class="addres">{{ addrMain.areaName }}{{ addrMain.address }}</view> -->
						<view class="addres">{{ addrMain.address }}</view>
					</view>
				</view>
				<view class="btn" v-if="items.length > 1" @tap="togglePopup('middle-list')">更换</view>
			</view>
		</view>
		<!-- 占位 -->
		<view class="place"></view>
		<!-- 商品列表 -->
		<view class="goods-list">
			<view class="" style="text-align: center; padding-top: 20%;" v-if="goodsList.length == 0">
				<image src="../../static/img/logo.jpg" mode="aspectFit"></image>
				<br />
				<br />
				<!-- 哇，空空如也~ 换家点吧=。= -->
			</view>
			<view class="row" v-for="(row, index) in goodsList" :key="index">
				<!-- 删除按钮 -->
				<view class="menu" @tap.stop="deleteGoods(row.id)"><view class="icon shanchu"></view></view>
				<!-- 商品 -->
				<view
					class="carrier"
					:class="[theIndex == index ? 'open' : oldIndex == index ? 'close' : '']"
					@touchstart="touchStart(index, $event)"
					@touchmove="touchMove(index, $event)"
					@touchend="touchEnd(index, $event)"
					@tap="selected(index)"
				>
					<!-- checkbox -->
					<view class="checkbox-box">
						<view class="checkbox"><view :class="[row.selected ? 'on' : '']"></view></view>
					</view>
					<!-- 商品信息 -->
					<view class="goods-info" @tap="toGoods(row)">
						<view class="img"><image :src="row.cover"></image></view>
						<view class="info">
							<view class="title">{{ row.name }}</view>
							<view class="spec">{{ row.promotion }}</view>
							<view class="price-number">
								<view class="price">￥{{ row.price }}</view>
								<view class="number">
									<view class="sub" @tap.stop="sub(index)"><view class="icon jian"></view></view>
									<view class="input" @tap.stop="discard"><input type="number" v-model="row.stock" @input="sum" /></view>
									<view class="add" @tap.stop="add(index)"><view class="icon jia"></view></view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 脚部菜单 -->
		<view class="footer">
			<view class="checkbox-box" @tap="allSelect">
				<view class="checkbox"><view :class="[isAllselected ? 'on' : '']"></view></view>
				<view class="text">全选</view>
			</view>
			<view class="delBtn" @tap="deleteList" v-if="selectedList.length > 0">删除</view>
			<view class="settlement">
				<view class="sum">
					合计:
					<view class="money">￥{{ sumPrice }}</view>
				</view>
				<view class="btn" @tap="toConfirmation">结算({{ selectedList.length }})</view>
			</view>
		</view>
	</view>
</template>

<script>
import uniIcon from '@/components/uni-icon/uni-icon.vue';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
export default {
	components: {
		uniPopup,
		uniIcon
	},
	data() {
		return {
			flag: true,
			type: '',
			addrMain: {},
			myAddrMain: {},
			items: [],
			sumPrice: '0.00',
			headerPosition: 'fixed',
			headerTop: null,
			statusTop: null,
			selectedList: [],
			isAllselected: false,
			goodsList: [],
			//控制滑动效果
			theIndex: null,
			oldIndex: null,
			isStop: false
		};
	},
	onPageScroll(e) {
		//兼容iOS端下拉时顶部漂移
		this.headerPosition = e.scrollTop >= 0 ? 'fixed' : 'absolute';
		this.headerTop = e.scrollTop >= 0 ? null : 0;
		this.statusTop = e.scrollTop >= 0 ? null : -this.statusHeight + 'px';
	},
	//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
	onPullDownRefresh() {
		// #ifdef MP-WEIXIN
		this.reFlash();
		// #endif
		setTimeout(function() {
			uni.stopPullDownRefresh();
		}, 1000);
	},
	onShow() {
		// #ifdef MP-WEIXIN
		//页面显示时，加载我选择的地址
		this.reFlash();
		// #endif
	},
	onShareAppMessage(res) {
		return {
			title: '来一桶水小程序，订水又快又方便',
			path: '/pages/tabBar/cart',
			imageUrl: '../../static/img/logo.jpg'
		};
	},
	onLoad() {
		// #ifdef MP-WEIXIN
		uni.showShareMenu({
			withShareTicket: true
		});
		uni.login({
			provider: 'weixin',
			success: loginRes => {
				// console.log(loginRes);
				// console.log(loginRes.code);
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
							success: res => {}
						});
					}
				});
			}
		});
		// #endif
		// #ifndef MP-WEIXIN
		uni.request({
			url: this.$tempUrl + 'wechat/getOpenId',
			data: {
				code: window.location.search.substr(6, 32)
			},
			method: 'GET',
			success: res => {
				uni.setStorageSync('openId', res.data);
				uni.request({
					url: this.$tempUrl + 'user/insert?wechatOpenid=' + uni.getStorageSync('openId'),
					method: 'POST',
					success: res => {}
				});
			}
		});
		uni.request({
			url: this.$tempUrl + 'shop/list',
			method: 'GET',
			success: res => {
				// console.log(res.data.data);
				this.items = res.data.data;
				this.addrMain = this.items[0];
				uni.request({
					url: this.$tempUrl + 'product/list',
					data: { shopId: this.items[0].id },
					method: 'GET',
					success: res => {
						// console.log(res.data.data);
						this.goodsList = res.data.data;
					}
				});
			}
		});
		// #endif
		//兼容H5下结算条位置
		// // #ifdef H5
		// this.footerbottom = document.getElementsByTagName('uni-tabbar')[0].offsetHeight + 'px';
		// // #endif
		// #ifdef APP-PLUS
		this.statusHeight = plus.navigator.getStatusbarHeight();
		// #endif
	},
	onBackPress() {
		if (this.type !== '') {
			this.type = '';
			return true;
		}
	},
	methods: {
		reFlash() {
			uni.getStorage({
				key: 'confirmAddr',
				success: ret => {
					if (this.myAddrMain.address != ret.data.address) {
						console.log('地址已更换');
						console.log(ret);
						this.myAddrMain = ret.data;
						// console.log(ret.data.id);
						//根据我选择的位置加载附近店铺
						this.loadShopList(ret.data);
					}
				},
				fail: () => {
					this.myAddrMain = { address: '点击选择地址' };
					console.log(this.myAddrMain);
					uni.getLocation({
						type: 'wgs84',
						success: res => {
							console.log('当前位置的经度：' + res.longitude);
							console.log('当前位置的纬度：' + res.latitude);
							this.loadShopList(res);
							uni.request({
								url: this.$tempUrl + 'common/geocoderByLocation',
								method: 'GET',
								data: { lat: res.latitude, lng: res.longitude },
								success: res => {
									// console.log(res.data.result.address);
									this.myAddrMain = { address: res.data.result.address_component.street_number };
								}
							});
						}
					});
				}
			});
		},
		toAddress() {
			uni.navigateTo({
				url: '../address/address'
			});
		},
		loadShopList(res) {
			uni.showLoading({ title: '加载中' });
			uni.request({
				url: this.$tempUrl + 'shop/listByAddress',
				method: 'GET',
				data: {
					longitude: res.longitude,
					latitude: res.latitude,
					distance: 2500
				},
				success: res => {
					if (res.data.data.length === 0) {
						uni.hideLoading();
						this.addrMain = {};
						this.goodsList = [];
						uni.showModal({
							title: '啊哦，加载失败',
							content: '您附近暂无入驻商家哦，去更换一个新地址吧～',
							// showCancel: false,
							success: res => {
								if (res.confirm) {
									console.log('用户点击确定2');
									uni.navigateTo({
										url: '../address/address'
									});
								} else if (res.cancel) {
									console.log('用户点击取消');
									uni.switchTab({
										url: 'user'
									});
								}
							}
						});
						// uni.request({
						// 	url: this.$tempUrl + 'shop/list',
						// 	method: 'GET',
						// 	success: res => {
						// 		// console.log(res.data.data);
						// 		this.loadProduct(res);
						// 	}
						// });
					} else {
						uni.showToast({ title: '商铺加载完毕', icon: 'success' });
						this.loadProduct(res);
					}
				}
			});
		},
		loadProduct(_res) {
			this.items = _res.data.data;
			this.addrMain = this.items[0];
			uni.request({
				url: this.$tempUrl + 'product/list',
				data: { shopId: this.items[0].id },
				method: 'GET',
				success: res => {
					uni.hideLoading();
					// console.log(res.data.data);
					this.goodsList = res.data.data;
					if (res.data.data.length === 0) {
						uni.showToast({ title: '啊哦，此商家还未上架商品，换家点吧>.<#', icon: 'none' });
					}
				}
			});
		},
		addrChange(item) {
			console.log(item.id);
			this.type = '';
			this.addrMain = item;
			uni.request({
				url: this.$tempUrl + 'product/list',
				data: { shopId: item.id },
				method: 'GET',
				success: res => {
					console.log(res.data.data);
					this.goodsList = res.data.data;
					if (res.data.data.length === 0) {
						uni.showToast({ title: '啊哦，此商家还未上架商品，换家点吧>.<#', icon: 'none' });
					}
				}
			});
			// this.goodsList=[];
		},
		togglePopup(type) {
			this.type = type;
			// uni.showToast({ title: '这地方太偏啦，附近2公里内就这一家=。=', icon: 'none' });
		},
		//控制左滑删除效果-begin
		touchStart(index, event) {
			//多点触控不触发
			if (event.touches.length > 1) {
				this.isStop = true;
				return;
			}
			this.oldIndex = this.theIndex;
			this.theIndex = null;
			//初始坐标
			this.initXY = [event.touches[0].pageX, event.touches[0].pageY];
		},
		touchMove(index, event) {
			//多点触控不触发
			if (event.touches.length > 1) {
				this.isStop = true;
				return;
			}
			let moveX = event.touches[0].pageX - this.initXY[0];
			let moveY = event.touches[0].pageY - this.initXY[1];

			if (this.isStop || Math.abs(moveX) < 5) {
				return;
			}
			if (Math.abs(moveY) > Math.abs(moveX)) {
				// 竖向滑动-不触发左滑效果
				this.isStop = true;
				return;
			}

			if (moveX < 0) {
				this.theIndex = index;
				this.isStop = true;
			} else if (moveX > 0) {
				if (this.theIndex != null && this.oldIndex == this.theIndex) {
					this.oldIndex = index;
					this.theIndex = null;
					this.isStop = true;
					setTimeout(() => {
						this.oldIndex = null;
					}, 150);
				}
			}
		},
		touchEnd(index, $event) {
			//结束禁止触发效果
			this.isStop = false;
		},
		//控制左滑删除效果-end

		//商品跳转
		toGoods(e) {
			// uni.getProvider({
			// 	service: 'share',
			// 	success: function(res) {
			// 		console.log(res.provider);
			// 		if (~res.provider.indexOf('weixin')) {
			// 			uni.share({
			// 				provider: 'weixin',
			// 				scene: 'WXSceneSession',
			// 				type: 1,
			// 				summary: '我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！',
			// 				success: function(res) {
			// 					console.log('success:' + JSON.stringify(res));
			// 				},
			// 				fail: function(err) {
			// 					console.log('fail:' + JSON.stringify(err));
			// 				}
			// 			});
			// 		}
			// 	}
			// });
			console.log('点击了商品' + e.id);
			// uni.showToast({ title: '商品' + e.id, icon: 'none' });
			// uni.navigateTo({
			// 	url: '../goods/goods'
			// });
		},
		//跳转确认订单页面
		toConfirmation() {
			let tmpList = [];
			let len = this.goodsList.length;
			for (let i = 0; i < len; i++) {
				if (this.goodsList[i].selected) {
					tmpList.push(this.goodsList[i]);
				}
			}
			if (tmpList.length < 1) {
				uni.showToast({
					title: '请选择商品结算',
					icon: 'none'
				});
				return;
			}
			uni.setStorageSync('shopId', this.addrMain.id);
			uni.setStorage({
				key: 'buylist',
				data: tmpList,
				success: () => {
					uni.navigateTo({
						url: '../order/confirmation',
						complete: () => {
							// console.log("热")
							uni.removeStorage({
								key: 'confirmCoupon',
								success: function(res) {
									// this.buylist = [];
									console.log('remove confirmCoupon success');
								}
							});
						}
					});
				}
			});
		},
		//删除商品
		deleteGoods(id) {
			let len = this.goodsList.length;
			for (let i = 0; i < len; i++) {
				if (id == this.goodsList[i].id) {
					this.goodsList.splice(i, 1);
					break;
				}
			}
			this.sum();
			this.oldIndex = null;
			this.theIndex = null;
		},
		// 删除商品s
		deleteList() {
			let len = this.selectedList.length;
			for (let i = 0; i < len; i++) {
				this.deleteGoods(this.selectedList[i]);
			}
			this.selectedList = [];
			this.isAllselected = this.selectedList.length == this.goodsList.length && this.goodsList.length > 0;
			this.sum();
		},
		// 选中商品
		selected(index) {
			this.goodsList[index].selected = this.goodsList[index].selected ? false : true;
			let i = this.selectedList.indexOf(this.goodsList[index].id);
			i > -1 ? this.selectedList.splice(i, 1) : this.selectedList.push(this.goodsList[index].id);
			this.isAllselected = this.selectedList.length == this.goodsList.length;
			this.sum();
		},
		//全选
		allSelect() {
			let len = this.goodsList.length;
			let arr = [];
			for (let i = 0; i < len; i++) {
				this.goodsList[i].selected = this.isAllselected ? false : true;
				arr.push(this.goodsList[i].id);
			}
			this.selectedList = this.isAllselected ? [] : arr;
			this.isAllselected = this.isAllselected || this.goodsList.length == 0 ? false : true;
			this.sum();
		},
		// 减少数量
		sub(index) {
			if (this.goodsList[index].stock <= 1) {
				return;
			}
			this.goodsList[index].stock--;
			this.sum();
		},
		// 增加数量
		add(index) {
			this.goodsList[index].stock++;
			this.sum();
		},
		// 合计
		sum() {
			this.sumPrice = 0;
			let len = this.goodsList.length;
			for (let i = 0; i < len; i++) {
				if (this.goodsList[i].selected) {
					this.sumPrice = this.sumPrice + this.goodsList[i].stock * this.goodsList[i].price;
				}
			}
			this.sumPrice = this.sumPrice.toFixed(2);
		},
		discard() {
			//丢弃
		},
		// 拨打电话
		toCall(phoneNumber) {
			uni.showModal({
				title: '提示',
				content: '是否拨打商家电话？',
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
page {
	position: relative;
	background: #fff;
}
@font-face {
	font-family: 'HMfont-home';
	src: url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAOEAAsAAAAAB7wAAAM1AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDAIJNATYCJAMQCwoABCAFhG0HPhu1BsiOw7jha84s8T+CgOyq6unevTlAeAkRhAhQBjj8eJfmMg/oB5whSgaFspy7AqbpwE3Py3/j9j+X07uGyFHr21lua9HYi9rUCzDeGtBYmw4o0AJJ0BvGLmiJxyEAC3yIQhSVPL9BF4U5TgBi7ChtQzfjQKFYWEdgrFiqEBsxoGurtMfAhuD74g8JQgcNg8ScWjf8xoPz7/nfD8iFpoV0eQi86XQAWwUSiAIUiJGVhgEaUSAKiYXau0kKoKOjwVRthd8PmExIBRvmWH95INCQIIyYqVYAJKGghO/5Dg4B3wtxaPD9QAoS4IOM1gEzYBbAMkT16iIQGPxsopS5ScAcK23LiaBDpzyk1aGLHtsvhVrL7adDD55016wPXnDfcr7T3lcE2TVcP2fNhZM7WeiEhVp44vx9C5vVD6+eEgaLTZvEot3HL1lawlnXLK3XnISDllbWwmrmGjlRLdxq2bpme1RAeqXtzWh6g0F//wCCnRiN2diwr2+Yse3iEs20g05Q5tT0BikOXwKf79vsoEvb6p6xjVhHP92nwDJmX+9hwsf26dXbPiNvZ/98x67/+5T+ev0aWxbXCwOX41zLxia+O73B6Y57fN1u6GvN+Zmbc8XITigTAcB0Rl6X8QB4hDgEpoXypZz2q37D5FVnVa9t1n/dUgHw8uKMq9BmWqjoJoP3zevM+zG8jmVKE5hKpRShw9WTFZW04D7TscAC+B0RcOD9FHLnzqkg0HFOQMMMb5DoBKGKGgUGLEkCIzq5YEEkpastcWQyDYQyByJYBkBgx2nQsOEaSOx4girqOzDgwj8wYickWNAiHLe0JESMsiicTLaQh84PBm6WKlst/TD9hXQV25wWBLQP4jJw435MXD58RynxFDPKT30golBxluAtOI3iOMOcs5Bc2fFF8sPd2OFVBO24WQJ9CmEIG4HwQAb4ARmFS0aK8qoL/cLnXyA0FTE23FBSZf+AYEqCzpF4YojrgN5J004lt/LKFD7RHDAVQYEMh8lIQErAICImJgOZWD0ohHARdhg5wJdzSKxVaXhX6c7y8uQN1wAWmLOU0IQUShiQo0fZTceadqaMdP2uXwEAAAAA')
		format('woff2');
}
.popup {
	width: 700upx;
	padding: 16upx 5upx 16upx 5upx;
	margin: 10upx auto 10upx auto;
	box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
	border-radius: 20upx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.left {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.icon {
			width: 80upx;
			height: 80upx;
			display: flex;
			align-items: center;
			image {
				width: 70upx;
				height: 70upx;
			}
		}
		.tel-name {
			width: 600upx;
			display: flex;
			position: relative;
			text-align: right;
			font-size: 28upx;
			color: #333;
			.tel {
				margin-left: 20upx;
				// position: absolute;
				// right: 140upx;
			}
			.distance {
				// margin-left: 30upx;
				position: absolute;
				right: 0;
				font-size: 24upx;
				color: #666;
				// text-align: right;
				// margin-left: 16upx;
			}
		}
		.addres {
			width: 600upx;
			font-size: 24upx;
			color: #999;
		}
	}
}
.main {
	background-color: white;
	width: 100%;
	padding: 50upx 3%;
	margin: 60upx auto 20upx auto;
	box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
	border-radius: 20upx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.left {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.icon {
			width: 80upx;
			height: 80upx;
			display: flex;
			align-items: center;
			image {
				width: 70upx;
				height: 70upx;
			}
		}
		.tel-name {
			width: 100%;
			display: flex;
			font-size: 28upx;
			color: #333;
			.tel {
				margin-left: 20upx;
			}
		}
		.addres {
			width: 100%;
			font-size: 24upx;
			color: #999;
		}
	}
	.btn {
		border: #e2e2e2 1upx solid;
		float: right;
		font-size: 28upx;
		size: 10upx;
		margin: 10upx;
		padding: 0 25upx;
		height: 45upx;
		// background-color: #c2c2c2;
		color: #999;
		display: flex;
		justify-content: center;
		align-items: center;

		border-radius: 30upx;
	}
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
}
.checkbox-box {
	display: flex;
	align-items: center;
	.checkbox {
		width: 35upx;
		height: 35upx;
		border-radius: 100%;
		border: solid 2upx #f06c7a;
		display: flex;
		justify-content: center;
		align-items: center;
		.on {
			width: 25upx;
			height: 25upx;
			border-radius: 100%;
			background-color: #f06c7a;
		}
	}
	.text {
		font-size: 28upx;
		margin-left: 10upx;
	}
}
.status {
	width: 100%;
	height: 50upx;
	position: fixed;
	z-index: 11;
	background-color: #fff;
	top: 0;
	/*  #ifdef  APP-PLUS  */
	height: var(--status-bar-height); //覆盖样式
	/*  #endif  */
}
.header {
	width: 87%;
	padding: 0 4%;
	height: 140upx;
	display: flex;
	align-items: center;
	position: fixed;
	flex-direction: column;
	top: 0;
	z-index: 10;
	background-color: #fff;
	/*  #ifdef  APP-PLUS  */
	top: var(--status-bar-height);
	/*  #endif  */
	.title {
		font-size: 36upx;
	}
}
.place {
	background-color: #ffffff;
	height: 140upx;
	/*  #ifdef  APP-PLUS  */
	margin-top: var(--status-bar-height);
	/*  #endif  */
}
.goods-list {
	width: 100%;
	padding: 20upx 0 120upx 0;
	.tis {
		width: 100%;
		height: 60upx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 32upx;
	}
	.row {
		width: calc(92%);
		height: calc(22vw + 40upx);
		margin: 20upx auto;

		border-radius: 15upx;
		box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
		display: flex;
		align-items: center;
		position: relative;
		overflow: hidden;
		z-index: 4;
		border: 0;
		.menu {
			.icon {
				color: #fff;
				// font-size: 25upx;
			}
			position: absolute;
			width: 30%;
			height: 100%;
			right: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: red;
			color: #fff;
			z-index: 2;
		}
		.carrier {
			@keyframes showMenu {
				0% {
					transform: translateX(0);
				}
				100% {
					transform: translateX(-30%);
				}
			}
			@keyframes closeMenu {
				0% {
					transform: translateX(-30%);
				}
				100% {
					transform: translateX(0);
				}
			}
			&.open {
				animation: showMenu 0.25s linear both;
			}
			&.close {
				animation: closeMenu 0.15s linear both;
			}
			background-color: #fff;
			.checkbox-box {
				padding-left: 20upx;
				flex-shrink: 0;
				height: 22vw;
				margin-right: 20upx;
			}
			position: absolute;
			width: 100%;
			padding: 0 0;
			height: 100%;
			z-index: 3;
			display: flex;
			align-items: center;

			.goods-info {
				width: 100%;
				display: flex;
				padding-right: 20upx;
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
						font-size: 20upx;
						background-color: #f3f3f3;
						color: #a7a7a7;
						height: 30upx;
						display: flex;
						align-items: center;
						padding: 0 10upx;
						border-radius: 15upx;
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
						height: 60upx;
						.price {
						}
						.number {
							display: flex;
							justify-content: center;
							align-items: flex-end;
							.input {
								width: 70upx;
								height: 70upx;
								margin: 0 10upx;
								background-color: #f3f3f3;
								input {
									width: 70upx;
									height: 70upx;
									display: flex;
									justify-content: center;
									align-items: center;
									text-align: center;
									font-size: 26upx;
								}
							}
							.sub,
							.add {
								width: 55upx;
								height: 55upx;
								background-color: #f3f3f3;
								border-radius: 5upx;
								.icon {
									font-size: 22upx;
									width: 55upx;
									height: 55upx;
									display: flex;
									justify-content: center;
									align-items: center;
								}
							}
						}
					}
				}
			}
		}
	}
}
.footer {
	width: 92%;
	padding: 0 4%;
	background-color: #fbfbfb;
	height: 100upx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 28upx;
	position: fixed;
	bottom: 0upx;
	z-index: 5;
	.delBtn {
		border: solid 1upx #f06c7a;
		color: #f06c7a;
		padding: 0 30upx;
		height: 50upx;
		border-radius: 30upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.settlement {
		width: 60%;
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
			height: 50upx;
			background-color: #f06c7a;
			color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;

			border-radius: 30upx;
		}
	}
}
</style>
