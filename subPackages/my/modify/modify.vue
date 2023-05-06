<template>
	<view class="box">
		<Header title="更换新手机号" />
		<view style="height: 100rpx;"></view>
		<view class="code_box">
			<view class="" style="margin-left: 40rpx;padding-top: 47rpx;">
				<input type="text" value="" placeholder="请输入新手机号" style="font-size: 28rpx;" />
				<view class="code_line"></view>
				<view class="code_felx">
					<input type="text" value="" placeholder="验证码" style="font-size: 28rpx;width: 60%;" />
					<view class="code_title" @click="acquire">{{codeText}}</view>
				</view>
			</view>
		</view>
		<view class="verification">立即验证</view>
		<view class="code_attention">
			<text >
				注意： 
				1.更换新号码后，账户信息不变，旧号码作废，下次需要使用新手机登录。 
				2.已注册过的账号无法被更换为新手机号。
			</text>
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
				codeText: '获取验证码'
			}
		},
		methods: {
			acquire() {
				let that = this
				var i = 1;
				var timer = setInterval(function() {
					if (i === 59) {
						that.codeText = '获取验证码'
						clearInterval(timer);
					} else {
						that.codeText = i + '秒后重新获取'
					}
					i++;
				}, 1000);
			}

		}
	}
</script>

<style scoped>
	.code_attention{
		width: 710rpx;
		margin-left: 20rpx;
		margin-top: 60rpx;
		color: #999999;
		font-size: 26rpx;
		line-height: 40rpx;
	}
	.verification {
		width: 710rpx;
		height: 110rpx;
		line-height: 110rpx;
		background-color: #00A0E9;
		border-radius: 10rpx;
		text-align: center;
		color: #fff;
		font-weight: 600;
		font-size: 28rpx;
		margin-top: 40rpx;
		margin-left: 20rpx;
	}

	.code_title {
		font-size: 26rpx;
		margin-right: 40rpx;
		color: #00A0E9;
	}

	.code_felx {
		margin-top: 30rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.code_line {
		border-bottom: 1rpx solid #eee;
		margin-top: 40rpx;
	}

	.code_box {
		width: 710rpx;
		height: 240rpx;
		background-color: #fff;
		border-radius: 10rpx;
		margin-left: 20rpx;

		margin-top: 10rpx;
	}

	.box {
		height: 100vh;
		width: 100%;
		background-color: #eee;
	}
</style>