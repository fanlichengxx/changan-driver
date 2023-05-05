<!-- 前往发货地 -->
<template>
	<view class="contentBox paddTopheder">
		<Header title="确认账单" />
		<view class="" style="height: 50rpx;"></view>
		<view class="blue_box">
			<image src="@/static/order/jingao.png" mode="aspectFill">
			<view>
				路费会根据供需情况、实时路况、天气情况等因素综合得出；若产生过路费、停车费、搬运费、小费，请用户额外支付。</view>
		</view>
		<view class="unload_box">
			<view class="unload_box_title">装卸货等候费(有偿等候0分钟)</view>
			<view class="unload_title">0.00元</view>
		</view>
		<view class="unload_line">
		</view>
		<view class="unload_felx">
			<view class="unload_title">费用合计</view>
			<view class="unload_qian">95.5元</view>
		</view>
		<view class="" style="height: 600rpx;"></view>
		<view class="xiaanniu">订单完成</view>
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
	.unload_qian {
		font-size: 40rpx;
		font-weight: 600;
		color: #019FE8;
	}

	.unload_title {
		font-size: 30rpx;
		font-weight: 600;
	}

	.unload_felx {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx;
		margin-top: 20rpx;
	}

	.unload_line {
		border-bottom: #EEEEEE 1rpx solid;
		width: 710rpx;
		margin-left: 20rpx;
		margin-top: 40rpx;
	}

	.unload_box_title {
		font-size: 26rpx;
		color: #666666;
	}

	.unload_box {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx;
		margin-top: 40rpx;
	}

	.blue_box {
		display: flex;
		border: 1rpx solid #55C4F8;
		border-radius: 10rpx;
		width: 710rpx;
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		margin-left: 20rpx;
		background-color: #E9F8FF;
	}

	.blue_box view {
		width: 600rpx;
		font-size: 22rpx;
		padding-right: 20rpx;
		color: #888888;
	}

	.blue_box image {
		width: 30rpx;
		height: 30rpx;
		margin-top: 8rpx;
		margin-right: 20rpx;
		margin-left: 20rpx;
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

	.xiaanniu {
		width: 710rpx;
		margin-left: 20rpx;
		height: 110rpx;
		text-align: center;
		line-height: 110rpx;
		border-radius: 10rpx;
		color: #fff;
		background-color: #00A0E9;
	}

	page {
		background-color: #fff;
	}
</style>