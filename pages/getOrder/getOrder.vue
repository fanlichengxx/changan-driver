<!-- 接单 -->
<template>
	<view class="getOrder">
		<view class="header">
			<view class="contain">
				<view class="contain_left">
					<view :class="current==false?'left_one':'left_one_ordering'" @click="changeOrder">
						听单
						<view class="dot"></view>
					</view>
					<view class="left_two">
						<image class="left_two_img" src="/static/order/trumpet.png" v-if="!current"></image>
						<image class="left_two_img" src="/static/order/trumpet1.png" v-else></image>
					</view>
				</view>
				<view class="contain_right">
					<view class="right right_one" @click="setPreferences">听单偏好</view>
					<view class="right">热力图</view>
				</view>
			</view>
		</view>
		<view class="unorder" v-if="!current">
			<view class="cert">
				<view class="jion">
					完成认证，即刻开启海量订单
				</view>
				<view class="btn" @click="goCert">去认证</view>
			</view>
			<view class="image">
				<image src="../../static/tabBar/welcom.png"></image>
			</view>
			<view class="ordering">
				<view class="btn" @click="orderDetail('e')">进行中订单</view>
			</view>
			<view class="main">
				<view class="title" @click="changeOrder">请打开听单按钮</view>
				<view class="animate-wave">

					<view class="logo">
						<view class="w1">

						</view>
						<view class="w2"></view>
						<view class="w3"></view>
						<view class="w4"></view>
					</view>

				</view>


			</view>
		</view>
		<view class="listenOrder" v-else>
			<view class="details" v-for="(item,index) in orderData">
				<view class="top">
					<view class="left">
						<view class="left_one">
							实时订单

						</view>
						<image src="../../static/order/ban.png"></image>
					</view>
					<view class="right">
						{{item.money}}元
					</view>
				</view>
				<view class="middle">
					<text> {{item.day}}</text>
					<text> {{item.week}}</text>
					<text> {{item.time}}</text>
				</view>
				<view class="down">
					<view class="one">

						<image src="../../static/order/zhuang.png"></image>

						<view class="one_right">{{item.start}}</view>
					</view>
					<view class="two">

						<image src="../../static/order/xie1.png"></image>

						<view class="one_right">{{item.end}}</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 派单模态框 -->
		<view class="dispatch">
			<u-modal :show="show" :showCancelButton="false" :showConfirmButton='false' width='335px'>
				<view class="slot-content">
					<view class="title">
						订单来自：<text>{{fleetName}}</text>
						<view class="tag">实时</view>
					</view>
					<view class="dispatch_contain">
						<view class="one">

							<image src="../../static/order/zhuang.png"></image>

							<view class="one_right">中国邮政银行</view>
						</view>
						<view class="two">

							<image src="../../static/order/xie1.png"></image>

							<view class="one_right">金源大道砚北B区</view>
						</view>
						<view class="three">
							<view class="left">距离您1公里</view>
							<view class="right">99元</view>
						</view>
					</view>
					<view class="button">

						<button @click="cancle" class="cancle">拒绝</button>
						<button @click="getOrder" class="get">立即接单</button>
					</view>
				</view>
			</u-modal>
		</view>


		<u-popup :show="openShow" @close="openShow=false" mode="center" round='20'>
			<view class="refuse_box">
				<view  style="height: 84rpx;"></view>
				<image src="../../static/login/vx.png" mode="aspectFill" class="refuse_image"></image>
				<view class="refuse_text">拒单后可能会影响您的行为分</view>
				<view  style="height: 93rpx;"></view>
				<view  style="display: flex;">
					<view class="refuse_button" @click="refuse">仍要拒绝</view>
					<view class="cancel_button" @click="cancel_two">取消</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: '',
				current: false,
				show: false,
				openShow: false,
				fleetName: '重庆凯程车队',
				orderData: [{
						id: 1,
						start: '中国邮政银行',
						end: '重庆市渝北区杨柳路8号',
						money: '99.5',
						day: '今天',
						week: '周五',
						time: '11：00'
					},
					{
						id: 2,
						start: '中国邮政银行',
						end: '重庆市渝北区杨柳路8号',
						money: '99.5',
						day: '今天',
						week: '周五',
						time: '11：00'
					},
					{
						id: 3,
						start: '中国邮政银行',
						end: '重庆市渝北区杨柳路8号',
						money: '99.5',
						day: '今天',
						week: '周五',
						time: '11：00'
					}
				]
			}
		},
		methods: {
			//仍要拒绝
			refuse(){
				this.openShow = false
			},
			//取消警告第二次
			cancel_two(){
				this.openShow = false
				this.show = true
			},
			//取消警告
			cancle() {
				this.openShow = true
				this.show = false
			},
			//切换听单状态
			changeOrder() {
				this.current = !this.current
			},
			// 听单偏好设置跳转
			setPreferences() {

				uni.navigateTo({
					url: '/subPackages/order/preferences/preferences'
				})
			},
			// 去认证
			goCert() {
				uni.navigateTo({
					url: '/subPackages/driver/franchise/franchise'
				})
			},
			// 订单详情
			orderDetail(e) {
				uni.navigateTo({
					url: '/subPackages/order/orderDetail/orderDetail'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.refuse_box {
		width: 670rpx;
		height: 500rpx;
		text-align: center;
	}

	.refuse_image {
		width: 100rpx;
		height: 100rpx;
	}

	.refuse_text {
		margin-top: 60rpx;
		font-size: 30rpx;
		color: #666666;
	}

	.cancel_button {
		width: 370rpx;
		height: 90rpx;
		border-radius: 10rpx;
		text-align: center;
		line-height: 90rpx;
		border: 1rpx solid #00A0E9;
		color: #fff;
		margin-left: 20rpx;
		background-color: #00A0E9;
	}

	.refuse_button {
		width: 200rpx;
		height: 90rpx;
		border-radius: 10rpx;
		text-align: center;
		line-height: 90rpx;
		border: 1rpx solid #579AA3;
		color: #579AA3;
		margin-left: 40rpx;
	}

	.getOrder {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: calc(100vh - var(--window-bottom));
		box-sizing: border-box;
		background-color: #F6F6F6;

		.header {
			background-color: #FFFFFF;
			// margin-top: ;
			height: calc(180upx - var(--status-bar-height));
			// width: 100%;
			display: flex;
			align-items: center;
			padding: var(--status-bar-height) 59upx 0 40upx;

			.contain {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.contain_left {
					display: flex;
					align-items: center;

					.left_one {
						width: 200upx;
						height: 70upx;
						background: #FFFFFF;
						border: 1px solid #DDDDDD;

						border-radius: 35upx;
						padding: 0 30upx;
						box-sizing: border-box;
						font-size: 30rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #999999;
						display: flex;
						justify-content: space-between;
						align-items: center;
						margin-right: 30upx;

						.dot {
							width: 20rpx;
							height: 20rpx;
							background: #DDDDDD;
							border-radius: 10rpx;
						}
					}

					.left_one_ordering {
						width: 200upx;
						height: 70upx;
						background: #FFFFFF;
						border: 1px solid #019FE8;
						border-radius: 35upx;
						padding: 0 30upx;
						box-sizing: border-box;
						font-size: 30rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #019FE8;
						display: flex;
						justify-content: space-between;
						align-items: center;
						margin-right: 30upx;

						.dot {
							width: 20rpx;
							height: 20rpx;
							background: #019FE8;
							border-radius: 10rpx;
						}
					}

					.left_two {
						width: 60upx;
						height: 60upx;

						.left_two_img {
							width: 100%;
							height: 100%;
						}
					}

				}

				.contain_right {
					display: flex;
					align-items: center;

					.right {
						height: 27upx;
						line-height: 40upx;
						font-size: 28upx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #202020;
					}

					.right_one {
						margin-right: 60upx;
					}
				}
			}

		}

		.cert {
			width: 92%;
			margin: 30upx auto;
			background-color: #F6F6F6;
			display: flex;
			justify-content: space-around;
			align-items: center;
			border: 1upx solid #DEEAEC;
			height: 80upx;
			line-height: 60upx;
			text-align: center;
			font-size: 24upx;
			color: #579AA3;
			border-radius: 10upx;

			.jion {
				width: 70%;
				height: 60upx;
				line-height: 60upx;

			}

			.btn {
				width: 138upx;
				height: 60upx;
				line-height: 60upx;
				border: 1upx solid #DEEAEC;
				border-radius: 38upx;
			}
		}

		.image {
			width: 92%;
			margin: 0 auto;
			display: flex;
			justify-content: center;
			align-items: center;

			image {
				width: 100%;
				height: 200upx;
			}
		}

		.ordering {
			width: 100%;
			position: relative;
			margin: 30upx auto;

			.btn {
				width: 220upx;
				height: 70upx;
				border-radius: 35upx 0upx 0upx 35upx;
				background-color: #00A0E9;
				color: #FFFFFF;
				text-align: center;
				line-height: 70upx;
				position: fixed;
				right: 0;
			}
		}

		.main {

			width: 100%;
			height: 600upx;
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 75upx;

			.title {
				width: 270upx;
				height: 270upx;
				text-align: center;
				line-height: 278upx;
				font-size: 30upx;
				background-color: #FFFFFF;
				border-radius: 50%;
				position: absolute;
				z-index: 5;
				top: 322upx;
				// left: 328upx;
				margin: 0 auto;
			}

			.animate-wave {
				width: 680upx;
				height: 680upx;
				position: absolute;
				top: 112upx;
				left: 0;
				right: 0;
				margin: 0 auto;
				background: #D1EAF5;
				border-radius: 50%;

				.logo {
					width: 300upx;
					height: 300upx;
					background: #21B3F7;
					color: #fff;
					text-align: center;
					line-height: 80px;
					border-radius: 50%;
					position: absolute;
					// top: 310px;
					// left: 50upx;
					// right: 50upx;
					// margin: 0 auto;
					// z-index: 9;

					.w2 {
						animation-delay: 1s;
					}

					.w3 {
						animation-delay: 2s;
					}

					.w4 {
						animation-delay: 3s;
					}
				}
			}

			@-webkit-keyframes opac {
				from {
					opacity: 1;
					width: 0;
					height: 0;
					top: 50%;
					left: 50%;
				}

				to {
					opacity: 0;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
				}
			}

			.animate-wave * {
				background: #C3E4FF;
				position: absolute;
				border-radius: 50%;
				animation: opac 3s infinite;
			}


		}

		.subject {
			width: 100%;
			box-sizing: border-box;
			// padding: 0 30upx;
			margin-top: 20upx;

			.certification {
				// width: 100%;
				box-sizing: border-box;
				margin: 0 30upx;
				height: 80px;
				background: #ECF5F6;
				border: 1px solid #DEEAEC;
				border-radius: 10upx;
			}
		}

		.listenOrder {
			.details {
				width: 95%;
				// display: flex;
				// justify-content: center;
				margin: 20upx;
				background-color: #FFFFFF;
				box-sizing: border-box;
				padding-bottom: 20rpx;

				.top {
					margin: 20upx;
					height: 70upx;
					display: flex;
					justify-content: space-between;
					align-items: center;

					.left {
						display: flex;
						// justify-content: space-around;
						align-items: center;
						width: 40%;

						.left_one {
							width: 160upx;
							height: 50upx;
							background: #F0F3F5;
							line-height: 50upx;
							border-radius: 35upx;
							text-align: center;
							box-sizing: border-box;
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: 500;
							color: #019FE8;

						}

						image {
							width: 40upx;
							height: 40upx;
							margin-left: 10upx;
						}
					}

					.right {
						font-size: 40upx;
						font-weight: blod;
						font-family: PingFang SC;
						color: #019FE8;
						box-sizing: border-box;
						padding-right: 40upx;
					}
				}

				.middle {
					margin: 20upx;
					height: 70upx;
					line-height: 70upx;
					font-size: 24upx;
					font-weight: blod;
					font-family: PingFang SC;
					color: #999999;

					text {
						margin-left: 10upx;
					}
				}

				.down {
					width: 100%;
					margin: 20upx;

					.one,
					.two {

						display: flex;
						// justify-content: space-around;
						align-items: center;
						margin-top: 20upx;

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

				}
			}
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
					background-color: #579AA3;
					color: #FFFFFF;
					font-family: PingFang SC;
				}

				.get {
					width: 370upx;
					height: 90upx;
					background-color: #00A0E9;
					color: #FFFFFF;
					font-family: PingFang SC;
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
	}
</style>