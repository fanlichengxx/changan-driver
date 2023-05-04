<template>
	<view>
		<u-navbar title="前往发货地" :fixed="true" titleStyle="color:#202020;font-size:36rpx;font-weight:bold"
			:autoBack="true" :placeholder="true">
		</u-navbar>
		<view class="map_box">

			<!-- markers标记点 -->
			<!-- scale缩放级别，取值范围为3-20 -->
			<map class="map" :scale="scale" :latitude="latitude" :longitude="longitude" :markers="marker">

			</map>
			<view class="setTime">
				请在15：30分前到达装货地
			</view>
			<view class="info">
				<view class="title">
					长安名生
				</view>
				<view class="remainder">
					剩余需要3公里 共5分钟
				</view>
				<view class="navigation">
					<view class="iconfont icon-daohang">

					</view>
					<text>导航</text>
				</view>

			</view>
			<view class="control">
				<view class="btn">
					<image class="btnIcon Phone" src="@/static/carType/phone.png" mode="widthFix"></image>
					<text class="tit">打电话</text>
				</view>
				<view class="btn">
					<image class="btnIcon Info" src="@/static/carType/information.png" mode="widthFix"></image>
					<text class="tit">发信息</text>
				</view>
				<view class="btn">
					<image class="btnIcon orderForGoods" src="@/static/carType/orderForGoods.png" mode="widthFix">
					</image>
					<text class="tit">订单详情</text>
				</view>
				<view class="btn">
					<image class="btnIcon share" src="@/static/carType/share.png" mode="widthFix"></image>
					<text class="tit">行程分享</text>
				</view>
			</view>
		</view>


		<button class="submitBtn">到达装货地</button>


	</view>
</template>

<script>
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
				}, {
					latitude: 39.90,
					longitude: 116.39,

					iconPath: '../../../static/carType/unload.png'
				}],

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	@import url("@/static/iconfont/iconfont.css");

	.map_box {
		width: 750rpx;
		height: calc(75vh);
		position: relative;



		.map {
			width: 750rpx;
			height: calc(75vh);

			//去掉高德地图 下方logo及提示文本
			/deep/ .amap-logo {
				display: none !important;
			}

			/deep/ .amap-copyright {
				opacity: 0;
			}
		}

		.setTime {
			position: absolute;
			top: 0;
			background-color: rgba(208, 238, 241, 0.8);
			font-size: 24rpx;
			width: 750rpx;
			height: 60rpx;
			color: rgba(87, 154, 163, 1);
			font-weight: bold;
			text-align: center;
			line-height: 60rpx;
		}

		.info {
			position: absolute;
			bottom: 208rpx;
			left: 20rpx;
			width: 710rpx;
			height: 180rpx;
			background-color: #fff;
			border-radius: 20rpx;
			padding: 0 39rpx;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			justify-content: center;



			>.title {
				font-weight: bold;
				color: rgba(32, 32, 32, 1);
				font-size: 38rpx;
				margin-bottom: 29rpx;


			}

			>.remainder {
				color: rgba(119, 119, 119, 1);
				font-size: 26rpx;

			}

			>.navigation {
				position: absolute;
				right: 60rpx;
				top: 50%;
				transform: translateY(-50%);

				>.icon-daohang {
					font-size: 38rpx;
					color: RGBA(0, 160, 233, 1);
					text-align: center;
				}

				>text {
					color: rgba(0, 160, 233, 1);
					font-size: 22rpx;
					margin-top: 20rpx;
				}
			}

		}

		.control {
			position: absolute;
			bottom: 28rpx;
			background-color: #fff;
			height: 150rpx;
			width: 710rpx;
			left: 20rpx;
			border-radius: 20rpx;
			display: flex;
			align-items: center;



			>.btn {
				display: flex;
				flex-direction: column;
				height: 79rpx;
				width: calc(100% / 4);
				justify-content: space-between;
				align-items: center;




				>.btnIcon {}

				>.Phone {
					height: 34rpx;
					width: 34rpx;
				}

				>.Info {
					height: 34rpx;
					width: 40rpx;
				}

				>.orderForGoods {
					height: 38rpx;
					width: 30rpx;
				}

				>.share {
					width: 37rpx;
					height: 38rpx;
				}



				>.tit {
					color: rgba(102, 102, 102, 1);
					font-size: 24rpx;
				}
			}
		}
	}

	.submitBtn {
		background-color: rgba(0, 160, 233, 1);
		width: 650rpx;
		height: 110rpx;
		color: #fff;
		font-size: 28rpx;
		font-weight: bold;
		line-height: 110rpx;
		text-align: center;
		margin: 30rpx auto 88rpx;
	}
</style>