<template>
	<view class="box">
		<Header title="设置" />
		<view class="" style="height: 120rpx;"></view>
		<view class="" style="width: 710rpx;margin-left: 20rpx;border-radius: 20rpx;background-color: #fff;">
			<view class="" style="display: flex;justify-content: space-between;align-items: center;">
				<view class="">登录管理</view>
				<image src="../../../static/tabBar/right.png" mode="aspectFill" style="width: 12rpx;height: 22rpx;">
				</image>
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

			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.box {
		height: 100vh;
		background-color: #EEEEEE;
	}
</style>