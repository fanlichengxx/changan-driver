<template>
	<view class="box">
		<Header title="设置" />
		<view class="" style="height: 120rpx;"></view>
		<view class="one_box">
			<view class="one_box_flex" style="padding-top: 30rpx;" @click="jump(0)">
				<view class="" style="font-size: 28rpx;">登录管理</view>
				<image src="../../../static/tabBar/right.png" mode="aspectFill">
				</image>
			</view>
			<view class="one_box_flex" @click="jump(1)">
				<view class="" style="font-size: 28rpx;">账号与隐私</view>
				<image src="../../../static/tabBar/right.png" mode="aspectFill">
				</image>
			</view>
			<view class="one_box_flex">
				<view class="" style="font-size: 28rpx;">语音提示</view>
				<u-switch v-model="value" @change="change" size='20'></u-switch>
			</view>
			<view class="one_box_flex" @click="jump(2)">
				<view style="font-size: 28rpx;">消除缓存</view>
				<view class="one_box_flex_one">
					<view class="" style="margin-right: 30rpx;">125M</view>
					<image src="../../../static/tabBar/right.png" mode="aspectFill">
					</image>
				</view>
			</view>
			<view class="one_box_flex" style="border-bottom: none;" @click="jump(3)">
				<view class="" style="font-size: 28rpx;">当前版本</view>
				<view class="one_box_flex_one">
					<view class="" style="margin-right: 30rpx;">1.1.0</view>
					<image src="../../../static/tabBar/right.png" mode="aspectFill">
					</image>
				</view>
			</view>
		</view>
		<view class="tuichu">退出账号</view>

		<view class="dispatch">
			<u-modal :show="show" :showCancelButton="true" width='335px' @cancel='show=false' @confirm='confirm'>
				<view class="slot-content">
					<view class="dispatch_top">温馨提示</view>
					<view class="dispatch_contain">
						<view class="dispatch_title">您确定要清除所有本地缓存数据？</view>
						<view class="dispatch_title" style="text-align: center;">（含图片、视频文件）</view>
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
				show: false
			}
		},
		methods: {
			//清楚缓存
			confirm() {

			},

			change() {

			},
			//行操作
			jump(e) {
				let url = ''
				switch (e) {
					case 0:
						url = '/subPackages/my/LoginSet/LoginSet';
						break;
					case 1:
						url = '/subPackages/my/privacy/privacy';
						break;
					case 2:
						this.show = true
						break;
				}
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.dispatch_top {
		font-size: 34rpx;
		color: #202020;
		font-weight: 600;
		text-align: center;
		margin-bottom: 20rpx;
	}

	.dispatch_title {
		font-size: 30rpx;
		color: #666666;
		line-height: 50rpx;
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