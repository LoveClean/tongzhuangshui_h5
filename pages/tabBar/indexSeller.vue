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
		window.location.href = this.$tempUrl + 'wechat/authorize?type=seller';
	}
};
</script>

<style></style>
