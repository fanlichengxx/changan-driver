<template>
	<view class="fleet">
		<view class="header">
			<view class="title">车队</view>
			<view class="search">
				<u-search placeholder="请输入车队名" height='50rpx' shape="round" v-model="pages.fleetName" @search='search'
					:show-action="false" :clearabled="true"></u-search>
			</view>
		</view>
		<view class="main">
			<view class="jion">
				加入车队，可获得更多货源
			</view>
		</view>
		<view class="contain">
			<view class="details" v-for="(item,index) in fleetData" @click="getDetails(item.fleetId)">
				<view class="left">
					<image src="{item.src}"></image>
				</view>
				<view class="middle">
					<view class="top">{{item.fleetName}}</view>
					<view class="down">{{item.address}}</view>
				</view>
				<view class="right" >
					<view class="btn" >详情</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				fleetData: [],
				pages: {
					current: 1,
					size: 10,
					portAddress: 'DRIVER',
					fleetName: '',
				},
				total: 10
			}
		},
		methods: {
			//搜索车队
			async search() {
				console.log(this.pages);
				let data = await uni.$http.api.fleet.getFleetList(this.pages)
				this.fleetData=data.data.data.records
			},
			// 车队详情
			getDetails(id) {
				console.log("id",id);
				uni.navigateTo({
					url:`/subPackages/fleet/fleetDetails/fleetDetails?fleetId=${id}`
				})
			},
			// 获取车队列表
			async getFleet() {
				// portAddress='DRIVER'
				let data = await uni.$http.api.fleet.getFleetList(this.pages)
				console.log("data", data);
				// this.total = data.data.total
				if (this.fleetData.length < this.total) {
					this.fleetData.push(...data.data.data.records)
					console.log('fleet',this.fleetData);
				} else {
					uni.showToast({
						title: '没有更多车队数据了',
						duration: 2000
					})
				}

			}
		},
		async onLoad(options) {
			//每次进入查询车队信息
			this.getFleet()
		},
		onPullDownRefresh() {
			//刷新触发
			this.pages.current++;
			this.getFleet()
		},
	}
</script>

<style lang="scss" scoped>
	$martop: 20%;

	.fleet {
		display: flex;
		flex-direction: column;
		width: 100%;
		// height: calc(100vh - 100upx);
		height: calc(100vh - var(--window-bottom));
		box-sizing: border-box;

		// overflow: scroll;

		.header {
			background-color: #00A0E9;
			color: #fff;
			height: 306upx;
			width: 100%;
			z-index: 9;
			box-sizing: border-box;

			.title {
				font-size: 36upx;
				position: absolute;
				top: 114upx;
				right: 340upx;
				left: 341upx;
				width: 200rpx;
			}

			.search {
				position: absolute;
				top: 196upx;
				right: 101upx;
				left: 101upx;
			}
		}

		.main {
			width: 100%;
			background-color: #F6F6F6;
			display: flex;
			justify-content: center;

			.jion {
				width: 92%;

				margin: 10upx 15upx;
				border: 1upx solid #DEEAEC;
				height: 60upx;
				line-height: 60upx;
				text-align: center;
				font-size: 24upx;
				color: #579AA3;
				border-radius: 10upx;
			}
		}

		.contain {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;

			.details {
				width: 92%;
				display: flex;
				justify-content: center;
				margin: 10upx;
				height: 165upx;
				background-color: #FFFFFF;

				.left {
					width: 20%;

				}

				.middle {
					width: 50%;
					align-items: center;
					display: flex;
					flex-direction: column;
					justify-content: space-around;

					.top {
						font-size: 32upx;
						margin: 10upx auto;
					}

					.down {
						font-size: 26upx;
						color: #999999;
					}
				}

				.right {
					width: 30%;
					display: flex;
					justify-content: center;
					align-items: center;
					
					.btn {
						width: 90%;
						margin: 0 auto;
						height: 40upx;
						color: #00A0E9;
						font-size: 28upx;
						border-left: 2upx solid #EEEEEf;
						line-height: 40upx;
						text-align: center;
						
					}
				}
			}
		}
	}
</style>