<template>
	<view class="box">
		<Header title="登录管理" />
		<view class="" style="height: 120rpx;"></view>
		<view class="one_box">
			<view class="one_box_flex" style="padding-top: 30rpx;" >
				<view class="" style="font-size: 28rpx;">绑定微信</view>
				<view class="one_box_flex_one">
					<view class="" style="margin-right: 30rpx;">已绑定</view>
					<image src="@/static/tabBar/right.png" mode="aspectFill">
					</image>
				</view>
			</view>
			<view class="one_box_flex" >
				<view class="" style="font-size: 28rpx;">面容登录</view>
				<u-switch v-model="value" @change="change" size='20'></u-switch>
			</view>
		</view>
	<view class="bottom_text">开启后可以使用Face ID 验证面容快速完成登录，设置仅对本机生效。如需修改面容，请在系统设置里操作。</view>
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
	.bottom_text{
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