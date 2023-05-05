<!-- 地图搜索条件 -->
<template>
	<view class="searchMap paddTopheder">
		<Header title="添加地址" />
		<view class="addres">
			<view class="city">
				<text style="margin-right:10upx;">城市</text>
				<u-icon name="arrow-down-fill" size="12px" @tap="cityList()"></u-icon>
			</view>
			<u--input placeholder="输入地址" v-model.trim="addres" clearable border="none" placeholderClass="searchAddres">
			</u--input>
		</view>
		<view class="content">
			<u-list @scrolltolower="scrolltolower" style="flex: 1;">
				<view class="contentHeader">
					<view class="siteTestingBox">
						<view class="siteTesting" @click="chooseMap">
							<u-icon name="map" class="icon"></u-icon>地图选址
						</view>
					</view>
					<view class="siteTestingBox">
						<view class="siteTesting" @click="addressListMD()">
							<u-icon name="order" class="icon"></u-icon>地址薄
						</view>
					</view>
				</view>
				<view class="adressList" v-for="(item, index) in indexList" :key="index" @click="addAddres(item)">
					<u-icon name="map-fill" color="#ccc" style="margin-right:16upx;"></u-icon>
					<view class="adressDetailed">
						<view class="jianjie">
							<view class="">
								简介地址
							</view>
							<view class="distance">
								11.11km
							</view>
						</view>
						<view class="detailed">
							详细地址
						</view>
					</view>
				</view>
			</u-list>
		</view>
	</view>
</template>

<script>
	import Header from '@/components/header/header.vue'
	export default {
		name: "cityList",
		data() {
			return {
				index: null,
				addres: '',
				indexList: []
			};
		},
		methods: {
			//地图选址
			chooseMap() {
				uni.navigateTo({
					url: '/subPackages/order/map/map?index=' + this.index
				})
			},
			//地址薄
			addressListMD() {
				uni.navigateTo({
					url: '/subPackages/order/addressBook/addressBook'
				})
			},
			//城市列表
			cityList() {
				uni.navigateTo({
					url: '/subPackages/order/cityList/cityList'
				})
			},
			addAddres(item) {
				// this.$emit('addAddres')
			}
		},
		onLoad(options) {
			this.index = options.index
		},
		components: {
			Header
		}
	}
</script>
<style lang="scss">
	.searchMap {
		.u-input {
			height: 100%;
			background-color: rgba(242, 242, 242, 1);
			box-sizing: border-box;
			padding: 0upx 20upx !important;
			display: flex;

		}
	}

	.searchAddres {
		font-size: 28upx;
	}
</style>
<style lang="scss" scoped>
	$size:24upx;
	$addressColor:#ccc;

	.searchMap {
		height: calc(100vh - 6px);
		display: flex;
		flex-direction: column;


		.addres {
			background-color: #fff;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding: 10upx 30upx;
			box-sizing: border-box;
			height: 86upx;

			.city {
				display: flex;
				justify-content: flex-start;
				margin-right: 20upx;
			}
		}

		.content {
			flex: 1;
			background-color: #fff;
			box-sizing: border-box;
			margin: 20upx 15upx 0px;
			border-radius: 8upx;
			display: flex;
			flex-direction: column;
			overflow: hidden;

			.contentHeader {
				display: flex;
				justify-content: space-between;
				align-items: center;
				box-sizing: border-box;
				height: 100upx;
				border-bottom: 1px solid #f0f0f0;

				.siteTestingBox {
					flex: 1;
					height: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 28upx;

					.siteTesting {
						display: flex;
						justify-content: center;
						align-items: center;
					}

					.icon {
						margin-right: 10upx;
					}
				}
			}

			.adressList {
				display: flex;
				justify-content: flex-start;
				box-sizing: border-box;
				padding: 0upx 0upx 0upx 20upx;

				.adressDetailed {
					box-sizing: border-box;
					padding: 10upx 20upx 10upx 0upx;
					flex: 1;
					border-bottom: 2upx solid #f0f0f0;

					.jianjie {
						display: flex;
						justify-content: space-between;
						font-size: 30upx;
						align-items: center;

						.distance {
							font-size: $size;
							color: $addressColor;
						}
					}

					.detailed {
						margin-top: 6upx;
						font-size: $size;
						color: $addressColor;
					}
				}
			}
		}
	}
</style>
