<!-- 前往发货地 -->
<template>
	<view class="contentBox paddTopheder">
		<Header title="确认账单" />


		<view class="one_box">
			<view class="one_box_top">
				<view class="one_box_top_tlte">
					<view class="one_box_top_wen">
						<image src="@/static/order/jingao.png" mode="aspectFill">
						</image>
						<view class="one_box_top_count">
							路费会根据供需情况、实时路况、天气情况等因素综合得出；若产生过路费、停车费、搬运费、小费，请用户额外支付。</view>
					</view>
					<view class="one_box_top_flex">
						<view class="one_box_top_flex_wen">装卸货等候费(有偿等候0分钟)</view>
						<view class="one_box_top_flex_qian">0.00元</view>
					</view>
					<view class="one_box_top_line">
					</view>
					<view class="one_box_top_xia">
						<view class="one_box_top_flex_qian">费用合计</view>
						<view class="one_box_top_flex_bule">95.5元</view>
					</view>
				</view>
			</view>
		</view>

		<view class="two_box_title">
			<view class="two_box_sha">附加费用</view>
			<view class="two_box_flex" style="">
				<view style="font-size: 30rpx;">搬运费</view>
				<input type="text" placeholder="避免纠纷请与客户协商后填写" class="two_box_input">
				<view class="two_box_yuan">元</view>
			</view>
			<view class="two_box_top"></view>
			<view class="two_box_flex">
				<view class="" style="font-size: 30rpx;">过路费</view>
				<input type="text" placeholder="未产生费用不需要填写" class="two_box_input">
				<view class="two_box_yuan">元</view>
			</view>
			<view class="two_box_top"></view>
			<view class="two_box_flex">
				<view class="" style="font-size: 30rpx;">停车费</view>
				<input type="text" placeholder="未产生费用不需要填写" class="two_box_input">
				<view class="two_box_yuan">元</view>
			</view>
			<view class="two_box_top"></view>
			<view class="two_box_flex">
				<view class="" style="font-size: 30rpx;">小费</view>
				<input type="text" placeholder="未产生费用不需要填写" class="two_box_input">
				<view class="two_box_yuan">元</view>
			</view>
			<view class="xiaanniu" style="margin-top: 200rpx;">订单完成</view>
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
	.two_box_top {
		width: 710rpx;
		border-bottom: 1rpx solid #EEEEEE;
		margin-top: 45rpx;
		margin-left: 20rpx;
	}

	.two_box_yuan {
		font-size: 26rpx;
		margin-left: 30rpx;
	}

	.two_box_input {
		margin-left: 150rpx;
		font-size: 26rpx;
		color: #999999;
		width: 340rpx;
		margin-top: 5rpx;
	}

	.two_box_flex {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 60rpx;
	}

	.two_box_sha {
		font-size: 34rpx;
		font-weight: 600;
		padding-top: 45rpx;
		padding-left: 60rpx;
	}

	.two_box_title {
		width: 100%;
		border-radius: 20rpx 20rpx 0 0;
		height: 200rpx;
		background-color: #fff;
		margin-top: -10rpx;
	}

	.one_box_top_flex_bule {
		font-size: 40rpx;
		font-weight: 600;
		color: #019FE8;
	}

	.one_box_top_xia {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx;
		margin-top: 20rpx;
	}

	.one_box_top_line {
		border-bottom: #EEEEEE 1rpx solid;
		width: 710rpx;
		margin-left: 20rpx;
		margin-top: 20rpx;
	}

	.one_box_top_flex_qian {
		font-size: 30rpx;
		font-weight: 600;
	}

	.one_box_top_flex_wen {
		font-size: 26rpx;
		color: #666666;
	}

	.one_box_top_flex {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx;
		margin-top: 20rpx;
	}

	.one_box_top_count {
		width: 600rpx;
		font-size: 22rpx;
		color: #888888;
		padding-right: 20rpx;
	}

	.one_box_top_wen image {
		width: 30rpx;
		height: 30rpx;
		margin-top: 8rpx;
		margin-right: 20rpx;
		margin-left: 20rpx;
	}

	.one_box_top_wen {
		display: flex;
		border: 1rpx solid #55C4F8;
		border-radius: 10rpx;
		width: 650rpx;
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		margin-left: 20rpx;
		background-color: #E9F8FF;
	}

	.one_box_top_tlte {
		padding-top: 20rpx;
		padding-bottom: 20rpx;
	}

	.one_box_top {
		width: 710rpx;
		background-color: #fff;
		margin-left: 20rpx;
		border-radius: 10rpx;
	}

	.one_box {
		background-color: #EEEEEE;
		padding-bottom: 50rpx;
		padding-top: 20rpx;
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