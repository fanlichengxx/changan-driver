<template>
	<view>
		<view class="bg">
			<text class="title">车辆管理</text>
			<text class="notes">最多可添加2辆车,认证通过后可切换使用</text>

			<view class="card">
				<text class="carNumber">渝A33Z00</text>
				<text class="carName">长安睿行M60-白色</text>
				<view class="Certified">
					<text class="tit">已认证</text>
					<view class="jiantouBox">
						<view class="jiantou">
						</view>
					</view>
				</view>
				<view class="useing">
					<view class="iconfont icon-gougou">
					</view>
					<text>使用中</text>
				</view>
			</view>

			<view class="Addbtn" @click="addCar">
				<view class="iconfont icon-jia"></view>
				<text>添加第二辆车</text>
			</view>
		</view>

		<view class="goBack" @click="goBack">
			<view class="iconfont icon-zuojiantou">
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
addCar(){
	uni.navigateTo({
		url:'/subPackages/driver/selectCarType/selectCarType'
	})
},
goBack(){
	uni.switchTab({
		url:'/pages/my/my'
	})
}
		}
	}
</script>

<style lang="scss" scoped>
	@import url("@/static/iconfont/iconfont.css");

	.bg {
		position: relative;
		box-sizing: border-box;
		width: 750rpx;
		background-image: url("@/static/carType/矩形 2782.png");
		background-repeat: no-repeat;
		background-size: cover;
		padding: 148rpx 40rpx 0rpx;
		display: flex;
		flex-direction: column;



		>.title {
			font-size: 40rpx;
			color: #202020;
			font-weight: bold;

		}

		>.notes {
			color: #666666;
			font-size: 24rpx;
			margin-top: 19rpx;
			margin-bottom: 39rpx;

		}

		// 车辆卡
		>.card {
			width: 670rpx;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			background-image: linear-gradient(145deg, rgba(27, 96, 231, 1), rgba(28, 97, 232, 1), RGBA(41, 130, 238, 1), RGBA(53, 163, 245, 1), RGBA(57, 171, 246, 0.8), RGBA(66, 196, 251, 0.8));
			// background-image: linear-gradient(140deg, rgba(27, 96, 231, 1), rgba(66, 196, 251, 1));
			position: relative;
			padding: 40rpx;
			border-radius: 50rpx;
			margin-bottom: 129rpx; //40+ (60-15.5)*2

			>.carNumber {
				color: #FEFEFE;
				font-weight: bold;
				font-size: 54rpx;
				vertical-align: text-top;
				margin-bottom: 20rpx;
			}

			>.carName {
				color: #FEFEFE;
				font-size: 24rpx;
				margin-bottom: 40rpx;


			}

			>.Certified {
				width: 140rpx;
				height: 50rpx;
				box-sizing: border-box;
				border-radius: 25rpx;
				border: 1rpx solid #FEFEFE;
				display: flex;
				color: #FEFEFE;
				padding: 0 20rpx;
				align-items: center;


				>.tit {
					font-size: 24rpx;
					margin-right: auto;
				}

				>.jiantouBox {
					//套个盒子,定义箭头高度和宽度,原理即溢出隐藏
					width: 10rpx;
					height: 17rpx;
					display: flex;
					align-items: center;
					overflow: hidden;




					>.jiantou {
						// 两个三角重叠,偏移覆盖显示 箭头
						width: 0;
						height: 0;
						border: 10rpx solid;
						border-color: transparent transparent transparent #FEFEFE;
						position: relative;



						&::after {
							content: '';
							position: absolute;
							top: -10rpx;
							left: -13rpx;
							border: 10rpx solid;
							border-color: transparent transparent transparent #2A86EF;
						}
					}
				}



			}

			>.useing {
				position: absolute;
				right: 0;
				top: 50%;
				transform: translate(0, -50%);
				width: 187rpx;
				height: 70rpx;
				box-sizing: border-box;
				background-color: #fff;
				border-radius: 35rpx 0pt 0pt 35rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 30rpx;
				box-shadow: -10rpx 0 14rpx rgba(142, 170, 230, 0.50) inset;

				>.icon-gougou {
					color: rgba(0, 160, 233, 1);
				}

				>text {
					color: rgba(0, 160, 233, 1);
					font-size: 26rpx;
				}
			}
		}

		.Addbtn {
			position: absolute;
			bottom: -31rpx;
			width: 670rpx;
			height: 120rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			border: 1rpx dashed rgba(204, 204, 204, 1);
			border-radius: 50rpx;

			>.icon-jia {
				color: rgba(153, 153, 153, 1);
				font-size: 22rpx;
				margin-right: 20rpx;
			}

			>text {
				color: rgba(153, 153, 153, 1);
				font-size: 30rpx;

			}
		}
	}

	.goBack {
		border-radius: 50rpx;
		height: 120rpx;
		width: 120rpx;
		background-color: rgba(255, 255, 255, 1);
		box-shadow: 4rpx 0 30rpx rgba(206, 214, 231, 0.70);
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		left: 40rpx;
		bottom: 128rpx;

		>.icon-zuojiantou {
			color: rgba(32, 32, 32, 1);
			font-size: 42rpx;
		}
	}
</style>