<!-- 前往发货地 -->
<template>
	<view class="contentBox paddTopheder">
		<Header title="已结束" />
		<view class="" style="height: 234rpx;"></view>
		<view class="" style="text-align: center;">
			<image src="../../../static/login/vx.png" mode="aspectFill" style="width: 100rpx;height: 100rpx;"></image>
			<view class="" style="font-size: 40rpx;font-weight: 600;margin-top: 46rpx;">订单已服务完成</view>
			<view class="" style="margin-top: 46rpx;">本单总收入<span style="color: #00A0E9;">56.80</span><span>元</span>
			</view>
		</view>
		<view class="" style="height: 100rpx;"></view>
		<view class="" style="display: flex;justify-content: center;">
			<image src="../../../static/login/vx.png" mode="aspectFill"
				style="width: 30rpx;height: 30rpx;margin-top: 8rpx;margin-right: 20rpx;"></image>
			<view class="" style="width: 550rpx;">本单收入将在1个工作日内进入您的账户，您可以进入余额查看。</view>
		</view>
		<view class="" style="height: 140rpx;"></view>
		<view class="" style="display: flex;justify-content: center;">
			<view class="jiesubotton">结束工作</view>
			<view class="" style="width: 80rpx;"></view>
			<view class="jiesubotton" style="background-color: #00A0E9;color: #fff;border: 1rpx solid #00A0E9;">接续接单
			</view>
		</view>
	</view>
</template>

<script>
	import Header from '@/components/header/header.vue'
	export default {
		data() {
			return {

			}
		},
		onLoad() {},
		methods: {


		},
		watch: {

		},
		computed: {

		},
		components: {
			Header
		}
	}
</script>

<style lang="scss" scoped>
	.jiesubotton {
		width: 250rpx;
		text-align: center;
		height: 90rpx;
		line-height: 90rpx;
		background-color: #fff;
		border: 1rpx solid #579AA3;
		border-radius: 10rpx;
		color: #579AA3;
	}

	page {
		background-color: #fff;
	}
</style>