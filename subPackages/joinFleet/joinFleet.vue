<template>
	<view class="box">
		<!-- 导航栏 -->
		<u-navbar :fixed="true" titleStyle="color:rgba(32, 32, 32, 1);font-size:36rpx;font-weight:bold"
			leftIconColor="rgba(32, 32, 32, 1)" leftIconSize="40rpx" :autoBack="true" :placeholder="true"
			height="88rpx">
		</u-navbar>
		<view class="main">
			<view class="title">
				加入车队
			</view>
			<view class="message">
				{{data.name}}邀请你加入{{data.fleetName}}车队，是否同意?
			</view>
			<button class="btn">同意加入</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: {
					name: '王海',
					fleetName: '渝通物流-重庆智行'
				}
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.box {
		background-color: #fff;
		height: 100vh;

		>.main {
			width: 750rpx;
			box-sizing: border-box;
			padding: 73rpx 70rpx 0 70rpx;

			>.title {
				font-size: 48rpx;
				color: #202020;
				font-weight: bold;
				margin-bottom: 80rpx;
			}

			>.message {
				font-size: 30rpx;
				color: #666666;
				line-height: 50rpx;
				margin-bottom: 75rpx;

			}

			>.btn {
				background-color: #00A0E9;
				height: 90rpx;
				width: 610rpx;
				text-align: center;
				line-height: 90rpx;
				color: #FFFFFF;
				font-size: 28rpx;
				font-weight: bold;
			}
		}
	}
</style>