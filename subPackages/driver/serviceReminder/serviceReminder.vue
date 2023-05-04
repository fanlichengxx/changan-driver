<template>
	<view>
		<!-- 导航栏 -->
		<u-navbar title="服务提醒" :fixed="true" titleStyle="color:rgba(32, 32, 32, 1);font-size:36rpx;font-weight:bold"
			leftIconColor="rgba(32, 32, 32, 1)" leftIconSize="40rpx" :autoBack="true" :placeholder="true"
			height="88rpx">
		</u-navbar>
		<view class="main">
			<view class="messageBox" v-for="item in data" :key="item.mid">
				<view class="dateTime">
					{{item.dateTime}}
				</view>
				<view class="Notify">
					<view class="title">
						{{item.title}}
					</view>
					<view class="textMain">
						{{item.textMain}}
					</view>
					<!-- 分割线 -->
					<view class="divider"></view>
					<view class="toDetail">
						查看详情 &gt;
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: [{
						mid: 0,
						title: '您的订单已取消',
						dateTime: '3-27 20:58:00',
						textMain: '订单暂无司机接单，您可以尝试稍后重新再次下单。',
					},
					{
						mid: 2,
						title: '司机将于15分钟后到达发货地',
						dateTime: '3-27 20:59:00',
						textMain: '司机正在前往发货地，请做好装货准备，使用行程分享功能，可将订单信息分享给他人。',
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.main {
		width: 750rpx;
		box-sizing: border-box;
		padding: 0 20rpx;

		.messageBox {
			>.dateTime {
				width: 100%;
				height: 67rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #888888;
				font-size: 22rpx;
			}

			>.Notify {
				width: 100%;
				background-color: #fff;
				box-sizing: border-box;
				padding: 40rpx 40rpx 0rpx 40rpx;
				border-radius: 10rpx;

				>.title {
					font-size: 30rpx;
					color: #202020;
					font-weight: bold;
				}



				>.textMain {
					color: #666666;
					font-size: 26rpx;
					width: 100%;
					flex-wrap: wrap;
					margin-top: 40rpx;
				}

				>.divider {
					height: 1rpx;
					width: 630rpx;
					background-color: #EEEEEE;
					margin-top: 37rpx;
				}

				>.toDetail {
					color: #404040;
					font-size: 28rpx;
					padding-top: 30rpx;
					padding-bottom: 30rpx;
				}
			}
		}


	}
</style>