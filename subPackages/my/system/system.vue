<template>
	<view class="box">
		<Header title="系统权限设置" />
		<view style="height: 120rpx;"></view>
		<view class="one_box">
			<view class="one_box_flex" style="padding-top: 30rpx;">
				<view  style="font-size: 28rpx;">
					打开照片权限
					<view class="cunt_box">用于上传证件、票据、做单照片</view>
				</view>
				<view class="one_box_flex_one">
					<view  style="margin-right: 30rpx;">已允许</view>
					<image src="@/static/tabBar/right.png" mode="aspectFill">
					</image>
				</view>
			</view>
			<view class="one_box_flex" style="padding-top: 30rpx;">
				<view  style="font-size: 28rpx;">
					打开相机权限
					<view class="cunt_box">用于拍摄证件、票据、做单照片</view>
				</view>
				<view class="one_box_flex_one">
					<view  style="margin-right: 30rpx;">已允许</view>
					<image src="@/static/tabBar/right.png" mode="aspectFill">
					</image>
				</view>
			</view>
			<view class="one_box_flex" style="padding-top: 30rpx;">
				<view  style="font-size: 28rpx;">
					打开定位权限
					<view class="cunt_box">用于推送订单、提供精准定位和路线规划服务</view>
				</view>
				<view class="one_box_flex_one">
					<view  style="margin-right: 30rpx;">已允许</view>
					<image src="@/static/tabBar/right.png" mode="aspectFill">
					</image>
				</view>
			</view>
			<view class="one_box_flex" style="padding-top: 30rpx;">
				<view style="font-size: 28rpx;">
					打开麦克风权限
					<view class="cunt_box">用于发送语音及在订单行程中录音</view>
				</view>
				<view class="one_box_flex_one">
					<view  style="margin-right: 30rpx;color: #019FE8;">未允许</view>
					<image src="@/static/tabBar/right.png" mode="aspectFill">
					</image>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import Header from '@/components/header/header.vue'
	export default {
		components: {
			Header
		},
		data() {
			return {
				value: true,
			}
		},
		methods: {
			change() {

			},

		}
	}
</script>

<style scoped>
	.cunt_box {
		font-size: 24rpx;
		margin-top: 10rpx;
		color: #999999;
	}

	.bottom_text {
		width: 710rpx;
		margin-left: 20rpx;
		font-size: 26rpx;
		color: #666666;
		margin-top: 30rpx;
	}

	.tuichu {
		width: 710rpx;
		height: 110rpx;
		text-align: center;
		line-height: 110rpx;
		color: #00A0E9;
		border-radius: 10rpx;
		background-color: #fff;
		margin-top: 60rpx;
		margin-left: 20rpx;
	}

	.box {
		height: 100vh;
		background-color: #EEEEEE;
	}

	.one_box_flex_one {
		display: flex;
		align-items: center;
		font-size: 28rpx;
		color: #666666;
	}

	.one_box {
		border-radius: 10rpx;
		background-color: #fff;
		width: 710rpx;
		margin-left: 20rpx;
	}

	.one_box_flex {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx;
		border-bottom: 1rpx solid #e5e5e5;
		width: 670rpx;
		margin-top: 20rpx;
	}

	.one_box_flex image {
		width: 12rpx;
		height: 22rpx;
	}
</style>