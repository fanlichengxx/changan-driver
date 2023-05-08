<template>
	<view>
		<Header title="添加路线" :PreventCollapse="true" :fontWeight="400" fontSize="32rpx" color="#000000"
			:fanhui="true" />
		<view class="box">
			<map class="map" :scale="scale" :latitude="latitude" :longitude="longitude" :markers="marker">
			</map>
			<view class="routeAddressBox">
				<view class="AddressInput">
					<view class="icon">寄</view>
					<view class="input_wrapper">
						<input placeholder="寄到那里去" placeholder-style="fontSzie:24rpx;color:#A4A4A4;"
							@input="changeShipInput" v-model="shippingValue" />
						<image class="clearBtn" @click="clearShippingValue" v-show="shippingValue"
							src="@/static/carType/close.png" mode="widthFix">
						</image>
					</view>
				</view>
				<view class="divider"></view>
				<view class="AddressInput">
					<view class="icon" style="background-color: #579AA3;">卸</view>
					<view class="input_wrapper">
						<input placeholder="送到那里去" placeholder-style="fontSzie:24rpx;color:#A4A4A4;"
							@input="changedeliveryInput" v-model="deliveryValue" />
						<image class="clearBtn" @click="clearDeliveryValue" v-show="deliveryValue"
							src="@/static/carType/close.png" mode="widthFix">
						</image>
					</view>
				</view>
				<button class="submitBtn">确定</button>

			</view>
			<!-- 消息提示 -->
			<view class="messagePrompt">
				<image class="iconPic" src="@/static/carType/sigh.png" mode="widthFix"></image>
				<view class="text">
					存在名称相似的不同地点，请仔细确认地址
				</view>
			</view>
			<!-- 搜索提示选项 -->
			<view class="searchHint" v-show="showSearchHint">
				<view class="search_item" v-for="item in 7">
					<image class="locateIcon" src="@/static/carType/position.png" mode="widthFix"></image>
					<view class="searchInfo">
						<view class="place">
							<view class="name">
								服装批发大卖场
							</view>
							<view class="kilometre">
								4.0km
							</view>
						</view>
						<view class="detailAddress">
							重庆市渝中区昆仑大道51号重庆火车站北站北广场上单123123
						</view>
						<view class="tags">
							<view class="tag">
								一号门
							</view>
							<view class="tag">
								地下停车场
							</view>
						</view>
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
				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',
				scale: 13, //地图缩放级别
				latitude: 39.909,
				longitude: 116.39742,
				marker: [{
					latitude: 39.909,
					longitude: 116.39742,

					iconPath: '../../../static/carType/shipment.png'
				}],
				shippingValue: '', //发货地址
				deliveryValue: '', //交货地址
				windowHeight: '',
				showSearchHint: false,
			}
		},

		methods: {


			// 寄 输入框改变时 
			changeShipInput(event) {
				if (this.shippingValue || this.deliveryValue) {
					this.showSearchHint = true
				} else {
					this.showSearchHint = false
				}

				this.shippingValue = event.detail.value
				console.log(this.shippingValue);
			},
			changedeliveryInput(event) {
				if (this.shippingValue || this.deliveryValue) {
					this.showSearchHint = true
				} else {
					this.showSearchHint = false
				}
				this.deliveryValue = event.detail.value
				console.log(this.deliveryValue);
			},
			clearShippingValue() {
				this.shippingValue = ''
			},
			clearDeliveryValue() {
				this.DeliveryValue = ''
			}


		},
		onLoad() {

		},
		components: {
			Header
		}
	}
</script>

<style lang="scss" scoped>
	.box {

		width: 750rpx;
		position: relative;


		.map {
			width: 750rpx;
			height: calc(100vh - 88rpx);
			box-sizing: border-box;

			//去掉高德地图 下方logo及提示文本
			/deep/ .amap-logo {
				display: none !important;
			}

			/deep/ .amap-copyright {
				opacity: 0;
			}
		}

		.routeAddressBox {
			position: absolute;
			top: 29rpx;
			left: 30rpx;
			width: 690rpx;
			height: 360rpx;
			background-color: #fff;
			border-radius: 20rpx;
			padding: 38rpx 49rpx 36rpx 48rpx;
			box-sizing: border-box;

			// 分割线
			.divider {
				width: 502rpx;
				height: 4rpx;
				opacity: 0.5;
				background-color: #EEF1F5;
				margin-left: auto;
			}


			.AddressInput {
				display: flex;

				align-items: center;

				>.icon {
					width: 56rpx;
					height: 56rpx;
					background-color: #02A7F0;
					border-radius: 50%;
					color: #fff;
					line-height: 56rpx;
					text-align: center;
					font-size: 28rpx;
					margin-right: 36rpx;
				}

				.input_wrapper {
					display: flex;
					align-items: center;

					.clearBtn {
						height: 28rpx;
						width: 28rpx;
					}

					>input {
						height: 80rpx;
						width: 473rpx;
					}
				}
			}

			.submitBtn {
				background-color: #02A7F0;
				height: 90rpx;
				width: 600rpx;
				border-radius: 10rpx;
				line-height: 90rpx;
				text-align: center;
				color: #fff;
				font-size: 30rpx;
				font-weight: bold;
				margin-top: 36rpx;
			}
		}

		.messagePrompt {
			position: absolute;
			left: 30rpx;
			top: 401rpx;
			display: flex;
			align-items: center;
			background-color: #D8F3FF;
			width: 690rpx;
			height: 56rpx;
			border-radius: 10rpx;
			padding: 0 20rpx;
			box-sizing: border-box;

			.iconPic {
				height: 24rpx;
				width: 24rpx;
				margin-right: 20rpx;
			}

			>.text {
				font-size: 24rpx;
				color: #00A0E9;
			}

		}

		.searchHint {
			position: absolute;
			left: 30rpx;
			top: 487rpx;
			height: 53vh;
			width: 690rpx;
			background-color: #fff;
			border-radius: 20rpx;
			box-sizing: border-box;
			overflow: scroll;



			.search_item {
				border-bottom: 1.5rpx solid #EBEFF4;

				width: 100%;
				display: flex;
				box-sizing: border-box;
				padding: 27rpx 26rpx 16rpx 44rpx;

				border-bottom: 1.5rpx solid #EBEFF4;

				&:last-child {
					border-bottom: none;
				}

				>.locateIcon {
					width: 24rpx;
					height: 24rpx;
					margin-right: 20rpx;
					margin-top: 10rpx;

				}

				.searchInfo {
					width: 576rpx;

					>.place {
						display: flex;
						justify-content: space-between;
						margin-bottom: 10rpx;

						>.name {
							color: #000000;
							font-size: 28rpx;
						}

						>.kilometre {
							color: #949494;
							font-size: 22rpx;
						}
					}

					>.detailAddress {
						width: 576rpx;
						color: #949494;
						font-size: 24rpx;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
					}

					.tags {
						margin-top: 16rpx;
						display: flex;
						flex-wrap: wrap;

						.tag {
							height: 48rpx;
							border-radius: 10rpx;
							border: 1rpx solid rgba(0, 0, 0, 0.20);
							font-size: 24rpx;
							box-sizing: border-box;
							margin-right: 30rpx;

							padding: 8rpx 10rpx 7rpx;
							text-align: center;
							color: rgba(0, 0, 0, 1);
						}
					}
				}

			}

		}
	}
</style>