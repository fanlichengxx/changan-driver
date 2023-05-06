<!-- 前往发货地 -->
<template>
	<view class="contentBox paddTopheder">
		<Header title="已结束" />
		<view class="jiesi_line"></view>
		<view class="jiesi_top_box">
			<image src="../../../static/login/vx.png" mode="aspectFill" style="width: 100rpx;height: 100rpx;"></image>
			<view class="jiesi_top_box_text">订单已服务完成</view>
			<view class="" style="margin-top: 46rpx;">本单总收入<span style="color: #00A0E9;">56.80</span><span>元</span>
			</view>
		</view>
		<view class="jiesi_center_line"></view>
		<view class="jiesi_center_flex">
			<image src="../../../static/login/vx.png" mode="aspectFill"></image>
			<view class="" style="width: 550rpx;">本单收入将在1个工作日内进入您的账户，您可以进入余额查看。</view>
		</view>
		<view class="jiesi_center_line"></view>
		<view class="jiesi_center_flex">
			<view class="jiesubotton">结束工作</view>
			<view class="" style="width: 80rpx;"></view>
			<view class="jiesubotton jiesubotton_two" @click="continue1">接续接单
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
			continue1() {
				uni.reLaunch({
					url: '/pages/getOrder/getOrder?cont=1'
				})
			},

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
	.jiesi_center_flex image {
		width: 30rpx;
		height: 30rpx;
		margin-top: 8rpx;
		margin-right: 20rpx;
	}

	.jiesi_center_flex {
		display: flex;
		justify-content: center;
	}

	.jiesi_center_line {
		height: 100rpx;
	}

	.jiesi_top_box_text {
		font-size: 40rpx;
		font-weight: 600;
		margin-top: 46rpx;
	}

	.jiesi_top_box {
		text-align: center;
	}

	.jiesi_line {
		height: 234rpx;
	}

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

	.jiesubotton_two {
		background-color: #00A0E9;
		color: #fff;
		border: 1rpx solid #00A0E9;
	}
</style>