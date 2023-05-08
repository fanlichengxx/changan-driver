<template>
	<view>
		<Header title="订单详情" fontSize="36rpx" color="#202020" :fanhui="true" />
		<view class="main">
			<!-- 下单人 -->
			<view class="BuyOrder">
				<image class="headPicture" src="@/static/carType/headSculpture.png" mode="widthFix"></image>
				<view class="person">
					<view class="name">下单人</view>
					<view class="text">
						我已前往发货地,我已前往发货地
					</view>
				</view>
				<image class="phoneBtn" src="@/static/carType/circularPhone.png" mode="widthFix"></image>
			</view>
			<!-- 订单地址信息 -->
			<view class="addressInfo">
				<view class="realTime_item">
					<view class="realTime">
						实时订单：03月22日 12:31
					</view>
					<text>已结算</text>
				</view>
				<view class="address">
					<view class="address_item">
						<view class="icon">
							装
						</view>
						<view class="name">
							重庆长安明生物流公司
						</view>
					</view>
					<view class="Text">
						重庆市渝北区杨柳北路12号
					</view>
				</view>
				<!-- 分割线 -->
				<view class="divider"></view>
				<view class="address">
					<view class="address_item">
						<view class="icon" style="background-color:#579AA3;">卸</view>
						<view class="name">
							金源大道砚北B区
						</view>
					</view>
					<view class="Text">
						重庆市渝北区杨柳北路12号
					</view>
				</view>
			</view>
			<!-- 订单号 车型 回单 跟单人 信息 -->
			<view class="orderInfo">
				<view class="item">
					<view class="item_left">
						订单号
					</view>
					<view class="item_right copy_box">
						<view class="orderNumber">
							177520230320102008001
						</view>
						<!-- 竖分隔线 -->
						<view class="verticalDividing"></view>
						<view class="copyBtn" @click="copy('111')">
							复制
						</view>
					</view>
				</view>
				<view class="item">
					<view class="item_left">
						车型需要
					</view>
					<view class="item_right">
						中面
					</view>
				</view>
				<view class="item">
					<view class="item_left">
						回单服务
					</view>
					<view class="item_right">
						<text>电子回单</text>
						<image class="receipt" src="@/static/carType/receiptDemo.jpg" mode="widthFix"></image>
					</view>
				</view>
				<view class="item">
					<view class="item_left">
						跟单人
					</view>
					<view class="item_right">
						1人
					</view>
				</view>
			</view>
			<!-- 订单金额模块 -->
			<view class="price_box">
				<view class="enterAccount">
					<view class="Time_of_entry">本单入账时效：</view>
					<view class="dateTime">24小时/半个月/1个月</view>
				</view>
				<view class="price_item">
					<view class="amount">
						订单金额
					</view>
					<view class="price">
						98.5元
					</view>
					<view class="check">
						查看明细
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Header from '@/components/header/header.vue'
	export default {
		data() {
			return {

			}
		},
		methods: {
			copy(value) {
				//提示模板
				uni.setClipboardData({
					data: value, //要被复制的内容
					success: () => { //复制成功的回调函数
						uni.showToast({ //提示
							title: '复制成功'
						})
					}
				});
			}


		},
		components: {
			Header
		}
	}
</script>

<style lang="scss" scoped>
	.main {
		margin-top: 88rpx;
		padding: 20rpx 20rpx 103rpx;

		>.BuyOrder {
			background-color: #fff;
			width: 710rpx;
			height: 162rpx;
			display: flex;
			box-sizing: border-box;
			padding: 0 40rpx;
			align-items: center;
			border-radius: 10rpx;

			.headPicture {
				height: 82rpx;
				width: 82rpx;
				margin-right: 20rpx;
			}

			>.person {
				>.name {
					color: #202020;
					font-size: 32rpx;
					margin-bottom: 20rpx;
					font-weight: bold;
				}

				.text {
					width: 305rpx;
					color: #666666;
					font-size: 24rpx;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			}

			.phoneBtn {
				height: 80rpx;
				width: 80rpx;
				margin-left: auto;
			}

		}

		.addressInfo {
			width: 710rpx;
			background-color: #fff;
			margin-top: 20rpx;
			border-radius: 10rpx;
			padding: 30rpx 40rpx 51rpx;
			box-sizing: border-box;
			margin-bottom: 20rpx;

			.divider {
				height: 1rpx;
				width: 564rpx;
				background-color: #eee;
				margin: 39rpx 0 42rpx auto;
			}

			>.realTime_item {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 52rpx;


				.realTime {
					width: 380rpx;
					height: 70rpx;
					border-radius: 100rpx;
					border: 1rpx solid #55C4F8;
					background-color: #E9F8FF;
					color: #019FE8;
					line-height: 70rpx;
					text-align: center;
					font-size: 26rpx;
				}

				>text {
					font-size: #999999;
					font-size: 26rpx;
					font-weight: bold;
				}
			}

			>.address {
				>.address_item {
					display: flex;
					align-items: center;

					.icon {
						width: 56rpx;
						height: 56rpx;
						background-color: #019FE8;
						border-radius: 50%;
						font-size: 28rpx;
						line-height: 56rpx;
						color: #fff;
						text-align: center;
						margin-right: 20rpx;

					}

					.name {
						color: #202020;
						font-size: 32rpx;
						font-weight: bold;
					}
				}

				.Text {
					color: #777777;
					font-size: 26rpx;
					margin-left: 76rpx;
					margin-top: 20rpx;

				}
			}
		}

		.orderInfo {
			width: 710rpx;

			padding: 42rpx 40rpx 49rpx;
			box-sizing: border-box;
			background-color: #fff;
			border-radius: 10rpx;
			display: flex;
			flex-direction: column;

			>.item {
				display: flex;
				font-size: 26rpx;
				margin-bottom: 50rpx;

				&:last-child {
					margin-bottom: 0;
				}

				>.item_left {
					color: #202020;
					width: 202rpx;
				}

				>.item_right {
					color: #666666;
					display: flex;
					flex-direction: column;

					// 订单号 复制部分
					&.copy_box {
						display: flex;
						flex-direction: row;

						>.verticalDividing {
							width: 2rpx;
							height: 30rpx;
							background-color: #666666;
							margin: 0 20rpx;
						}

						>.copyBtn {
							color: #202020;
							font-size: 26rpx;
						}
					}



					>.receipt {
						width: 180rpx;
						height: 90rpx;
						margin-top: 30rpx;
					}
				}
			}
		}

		.price_box {
			width: 710rpx;
			background-color: #fff;
			padding: 40rpx 40rpx 50rpx;
			border-radius: 10rpx;
			margin-top: 20rpx;
			box-sizing: border-box;


			>.enterAccount {
				display: flex;

				>.Time_of_entry {
					color: #666666;
					font-size: 26rpx;
					margin-right: 39rpx;
				}

				>.dateTime {
					color: #00A0E9;
					font-size: 26rpx;
				}
			}

			>.price_item {
				display: flex;
				align-items: center;
				margin-top: 63rpx;
				flex-wrap: nowrap;

				>.amount {
					color: #202020;
					font-size: 26rpx;
					margin-right: 117rpx;

				}

				>.price {
					color: #666666;
					font-size: 30rpx;

				}

				>.check {
					color: #999999;
					font-size: 24rpx;
					border-radius: 100rpx;
					height: 50rpx;
					width: 150rpx;
					border: 1rpx solid #eee;
					line-height: 50rpx;
					text-align: center;
					margin-left: auto;
				}
			}
		}
	}
</style>