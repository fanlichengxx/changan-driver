<template>
	<view>
		<!-- 导航栏 -->
		<u-navbar title="已取消" rightText="联系客服" @rightClick="customerService" :fixed="true"
			titleStyle="color:rgba(32, 32, 32, 1);font-size:36rpx;font-weight:bold" leftIconColor="rgba(32, 32, 32, 1)"
			leftIconSize="40rpx" :autoBack="true" :placeholder="true" height="88rpx">
			<view class="nav_right" slot="right">
				联系客服
			</view>
		</u-navbar>
		<!-- 地图 -->
		<view class="map_box">
			<!-- markers标记点 -->
			<!-- scale缩放级别，取值范围为3-20 -->
			<map class="map" :scale="scale" :latitude="latitude" :longitude="longitude" :markers="marker">
			</map>
		</view>
		<view class="content">
			<view class="text_box">
				<view class="textItem" v-for="item in infoData" :key="item.title">
					<view class="tit">{{item.title}}</view>
					<view class="info">{{item.text}}</view>
				</view>
			</view>
			<view class="prompt">
				<view class="iconItem">
					<u-icon name="error" color="#888888" size="27"></u-icon>
				</view>
				<text class="prompt_text">订单已取消</text>
			</view>
			<view class="btn_group">
				<button class="orderInfo">订单信息</button>
				<button class="againOrder">再来一单</button>
			</view>

		</view>

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

				infoData: [{
						title: '发车时间',
						text: '2023-03-27 20:54'
					},
					{
						title: '始 发 地',
						text: '重庆市政府（东北门）（1栋）'
					},
					{
						title: '目 的 地',
						text: '郑家院子（地铁站）-1号口（6栋）'
					}
				]
			}
		},
		methods: {
			customerService() { //联系客服

			}
		},
	}
</script>

<style lang="scss" scoped>
	.nav_right {
		color: #999999;
		font-size: 28rpx;
	}

	.map_box {
		.map {

			width: 750rpx;
			height: calc(100vh - 665rpx + 40rpx);

			//去掉高德地图 下方logo及提示文本
			/deep/ .amap-logo {
				display: none !important;
			}

			/deep/ .amap-copyright {
				opacity: 0;
			}
		}

	}

	.content {
		position: absolute;
		background-color: #fff;
		bottom: 0;
		width: 750rpx;
		height: 665rpx;
		border-radius: 40rpx 40rpx 0rpx 0rpx;


		.text_box {
			padding: 50rpx 40rpx 39rpx;
			border-bottom: 1rpx solid #EEEEEE;

			>.textItem {
				display: flex;
				font-size: 26rpx;
				margin-bottom: 30rpx;

				&:last-child {
					margin-bottom: 0rpx;
				}

				>.tit {
					color: #666666;
					margin-right: 40rpx;
					width: 110rpx;
					text-align: center;
					flex-wrap: nowrap;
				}

				>.info {
					color: #202020;
				}
			}
		}

		.prompt {
			display: flex;
			flex-direction: column;
			align-items: center;

			.iconItem {
				background-color: #F0F0F0;
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				margin: 50rpx auto 20rpx
			}

			>.prompt_text {
				color: #666666;
				font-size: 24rpx;
				margin-bottom: 50rpx;
			}
		}

		.btn_group {
			display: flex;
			padding: 0 30rpx 88rpx 30rpx;

			>.orderInfo {
				background-color: #fff;
				border-radius: 10rpx;
				border: 1rpx solid #579AA3;
				color: #579AA3;
				font-size: 28rpx;
				width: 220rpx;
				height: 110rpx;
				line-height: 110rpx;
				text-align: center;
			}

			>.againOrder {
				width: 450rpx;
				height: 110rpx;
				background-color: #00A0E9;
				border-radius: 10rpx;
				color: #fff;
				font-size: 28rpx;
				line-height: 110rpx;
				text-align: center;
			}
		}

	}
</style>