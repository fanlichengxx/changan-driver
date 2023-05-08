<template>
	<view>
		<Header title="订单热力图" fontSize="36rpx" color="#202020" :fanhui="true" />
		<view class="map_box">
			<!-- markers标记点 -->
			<!-- scale缩放级别，取值范围为3-20 -->
			<map class="map" :scale="scale" :latitude="latitude" :longitude="longitude" :markers="marker">
			</map>
			<view class="positionInfo">
				<text>您的位置</text>
				<view class="address">
					四川省成都市彭州市蒙阳街道物流大道中段
				</view>
				<view class="hourData">
					近1小时累计数据：空闲司机
					<text class="driversNumber">27</text>
					订单
					<text class="OrderNumber">2</text>
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

			}
		},
		methods: {

		},
		components: {
			Header
		}
	}
</script>

<style lang="scss" scoped>
	.map_box {
		position: relative;
		width: 750rpx;
		height: 100vh;

		.map {
			width: 750rpx;
			height: 75vh;

			//去掉高德地图 下方logo及提示文本
			/deep/ .amap-logo {
				display: none !important;
			}

			/deep/ .amap-copyright {
				opacity: 0;
			}
		}

		.positionInfo {
			width: 750rpx;
			height: 371rpx;
			background-color: #fff;
			padding: 40rpx 60rpx 0rpx;
			border-radius: 40rpx 40rpx 0rpx 0rpx;
			box-sizing: border-box;
			position: absolute;
			bottom: 0;

			>text {
				color: #777777;
				font-size: 24rpx;
				display: block;
				margin-bottom: 30rpx;
			}

			>.address {
				width: 606rpx;
				color: #202020;
				font-weight: bold;
				font-size: 38rpx;

			}

			>.hourData {
				color: #777777;
				font-size: 26rpx;
				margin-top: 39rpx;

				.driversNumber {
					color: #202020;
					font-weight: bold;
					margin-right: 20rpx;
					margin-left: 10rpx;
				}

				.OrderNumber {
					color: #202020;
					font-weight: bold;
					margin-left: 10rpx;
				}
			}
		}
	}
</style>