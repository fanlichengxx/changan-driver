<template>
	<view class="box">
		<Header title="账号与隐私" />
		<view class="" style="height: 120rpx;"></view>
		<view class="one_box">
			<view class="one_box_flex" style="padding-top: 30rpx;" @click="tosystem">
				<view class="" style="font-size: 28rpx;">系统权限设置</view>
					<image src="@/static/tabBar/right.png" mode="aspectFill">
					</image>
			</view>
		</view>
		<view class="one_box">
			<view class="one_box_flex" style="padding-top: 30rpx;" >
				<view class="" style="font-size: 28rpx;">修改手机号</view>
					<image src="@/static/tabBar/right.png" mode="aspectFill">
					</image>
			</view>
		</view>
		<view class="one_box">
			<view class="one_box_flex" style="padding-top: 30rpx;" @click="show=true">
				<view class="" style="font-size: 28rpx;">注销账号</view>
					<image src="@/static/tabBar/right.png" mode="aspectFill">
					</image>
			</view>
		</view>
		
		<view class="dispatch">
			<u-modal :show="show" :showCancelButton="false" :showConfirmButton='false' width='335px'>
				<view class="slot-content">
					<view class="" style="height: 30rpx;"></view>
					<view class="dispatch_contain">
					<view style="font-size: 30rpx;color: #666666;line-height: 50rpx;">注销后您的身份、账户信息、积分及优惠券、订单信息都将会被清空且无法找回</view>
					</view>
					<view class="" style="height: 50rpx;"></view>
					<view class="button">
						<button @click="cancle" class="cancle">确定注销</button>
						<view class="" style="width: 20rpx;"></view>
						<button @click="getOrder" class="get">我再想想</button>
					</view>
				</view>
			</u-modal>
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
				show:false
			}
		},
		methods: {
			change() {

			},
			//确定注销
			cancle(){
				
			},
			//关闭注销
			getOrder(){
				this.show=false
			},
			tosystem(){
				uni.navigateTo({
					url:'/subPackages/my/system/system'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	
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
		padding-top: 40rpx;
		padding-bottom: 40rpx;
		color: #202020;
	}

	.one_box_flex image {
		width: 12rpx;
		height: 22rpx;
	}
	.dispatch {
	
	
		.title {
			width: 335px;
			display: flex;
			height: 100upx;
			align-items: center;
			color: #666666;
			font-size: 26upx;
			font-family: PingFang SC;
			position: relative;
			top: -50upx;
			background-color: #F0F3F5;
			box-sizing: border-box;
			padding-left: 30upx;
	
			text {
				color: #019FE8;
				font-size: 26upx;
				font-family: PingFang SC;
				font-weight: 700;
			}
	
			.tag {
				width: 100upx;
				height: 50upx;
				border-radius: 25upx;
				text-align: center;
				line-height: 50upx;
				border: 1upx solid #019FE8;
				color: #019FE8;
				font-size: 22upx;
				font-family: PingFang SC;
				position: absolute;
				right: 30upx;
			}
		}
	
		.button {
			display: flex;
			align-items: center;
	
			.cancle {
				width: 200upx;
				height: 90upx;
				background-color: #FFFFFF;
				color: #999999;
				font-family: PingFang SC;
				font-size: 28rpx;
				line-height: 90upx;
			}
	
			.get {
				width: 370upx;
				height: 90upx;
				background-color: #00A0E9;
				color: #FFFFFF;
				font-family: PingFang SC;
				font-size: 28rpx;
				line-height: 90upx;
			}
		}
	
		.dispatch_contain {
			width: 100%;
			margin-left: 20upx;
	
			.two {
				margin-top: 20upx;
			}
	
			.one,
			.two {
	
				display: flex;
				// justify-content: space-around;
				align-items: center;
	
	
				.one_right {
					// height: 70upx;
					// line-height: 70upx;
					font-size: 30upx;
					font-weight: blod;
					font-family: PingFang SC;
					color: #202020;
				}
	
				image {
					width: 34upx;
					height: 34upx;
					margin-right: 20upx;
	
				}
	
	
			}
	
			.three {
				display: flex;
				align-items: center;
				margin: 20upx;
				height: 40upx;
				position: relative;
	
				.left {
					font-size: 24upx;
					font-family: PingFang SC;
					color: #666666;
				}
	
				.right {
					font-size: 40upx;
					font-family: PingFang SC;
					color: #00A0E9;
					font-weight: blod;
					position: absolute;
					right: 70upx;
				}
			}
		}
	
	
	
	}
</style>