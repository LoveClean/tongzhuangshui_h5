<template>
	<view style="text-align: center; padding-top: 20%;">
		<image src="../../static/img/logo.jpg" mode="aspectFit"></image>
		<br />
		<br />
		来一桶水
	</view>
</template>

<script>
export default {
	onLoad() {
		////////////////wechat/////////////////
		// const wx = require('jweixin-module');
		// 
		// // 获取签名
		// uni.request({
		// 	url: this.$tempUrl + '/wechat/config',
		// 	method: 'GET',
		// 	data: { url: window.location.host },
		// 	success: res => {
		// 		wx.config({
		// 			debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
		// 			appId: res.data.appId, // 必填，公众号的唯一标识
		// 			timestamp: res.data.timestamp, // 必填，生成签名的时间戳
		// 			nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
		// 			signature: res.data.signature, // 必填，签名
		// 			jsApiList: ['getLocation'] // 必填，需要使用的JS接口列表
		// 		});
		// 		wx.ready(() => {
		// 			wx.getLocation({
		// 				type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
		// 				success: res => {
		// 					var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
		// 					var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
		// 					alert(res.latitude);
		// 				}
		// 			});
		// 		});
		// 		wx.error(res => {
		// 			console.log('wx err', res);
		// 			alert('wx err');
		// 		});
		// 	}
		// });
		
		window.location.href = this.$tempUrl + 'wechat/authorize?type=user';
	}
};
</script>

<style></style>
