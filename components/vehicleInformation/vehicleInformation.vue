<template>
	<view class="vehicleInformation">
		<u-tabs :list="list1" @click="tabsClick" keyName="simpleName" :current="current" :itemStyle="{'height':'32px'}">
		</u-tabs>
		<view class="vehicleBox">
			<view class="vehicle">
				<image :src="cheliang.image" class="image"></image>
			</view>
			<view class="biaoqian">
				<u-icon name="arrow-right" color="#c2c2c2" size="12"></u-icon>
			</view>
		</view>
		<view class="vehicleMessageBox">
			<view class="vehicleMessage">
				<view class="top">
					厢长
				</view>
				<view class="bottom">
					{{cheliang.length}}米
				</view>
			</view>
			<view class="vehicleMessage">
				<view class="top">
					载方
				</view>
				<view class="bottom">
					{{cheliang.capacity}}方
				</view>
			</view>
			<view class="vehicleMessage">
				<view class="top">
					载重
				</view>
				<view class="bottom">
					{{cheliang.loads}}吨
				</view>
			</view>
			<view class="vehicleMessage">
				<view class="top">
					车高
				</view>
				<view class="bottom">
					{{cheliang.height}}米
				</view>
			</view>
		</view>
		<view class="vehicleType">
			<view class="">
				车型：
			</view>
			<view class="tags">
				<view class="tag" v-for="item in cheliang.energies" :key="item.energyId"
					:class="{'xuantag':norms.indexOf(item.energyId) == -1?false:true}"
					@click="clickTagMD(item.energyId)">
					{{item.energy}}
					<view class="imgBox" v-if="norms.indexOf(item.energyId)==-1?false:true">
						<image src="../../static/order/tag.png"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		name: "vehicleInformation",
		data() {
			return {
				list1: [], //车类型
				cheliang: {}, //车辆类型队友的车辆信息
				current: 0
			};
		},
		methods: {
			...mapMutations('order', ['setVehicleTypeId', 'setNorms']),
			//车辆类型切换
			tabsClick(item) {
				this.setNorms([])
				this.cheliang = item
				this.setVehicleTypeId(item.categoryId)
			},
			//车辆标签
			clickTagMD(id) {
				let da = JSON.parse(JSON.stringify((this.norms)))
				if (this.norms.indexOf(id) == -1) {
					da.push(id)
					this.setNorms(da)
				} else {
					da.splice(this.norms.indexOf(id), 1)
					this.setNorms(da)
				}
			}
		},
		created() {
			//车辆详情
			uni.$http.api.address.get_vehicle_model_list().then(res => {
				if (res.data.code === 200) {
					if (res.data.data.length) {
						this.list1 = res.data.data
						this.cheliang = res.data.data[0]
						res.data.data.forEach((val, index) => {
							if (val.categoryId == this.vehicleTypeId) {
								this.current = index
							}
						})
						this.setVehicleTypeId(res.data.data[0].categoryId)
					}
				}
			})
		},
		computed: {
			...mapState({
				norms: state => state.order.orderDetails.norms,
				vehicleTypeId: state => state.order.orderDetails.vehicleTypeId
			})
		}
	}
</script>

<style lang="scss" scoped>
	$borderR:12upx;

	.vehicleInformation {
		border-radius: $borderR;
		width: 100%;
		background-color: #fff;
		box-sizing: border-box;
		padding: 10upx 20upx 10upx 20upx;

		.vehicleBox {
			margin-top: 20upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 26upx;
			color: #949494;
			margin-bottom: 20upx;

			.vehicle {
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;

				.image {
					width: 300upx;
					height: 210upx;
				}
			}

			.biaoqian {
				width: 30upx;
			}
		}

		.vehicleMessageBox {
			display: flex;
			align-items: center;
			margin-bottom: 8upx;
			width: 100%;
			box-sizing: border-box;
			padding: 0upx 30upx;

			.vehicleMessage {
				width: 25%;
				display: flex;
				flex-direction: column;
				align-content: center;
				align-items: center;

				.top {
					color: #949494;
					font-size: 24upx;
				}

				.bottom {
					color: #000000;
					font-size: 26upx;
					font-weight: 550;
				}
			}
		}

		.vehicleType {
			display: flex;
			align-items: center;

			.tags {
				flex: 1;
				display: flex;

				.tag {
					padding: 10upx 20upx;
					box-sizing: border-box;
					border-radius: $borderR;
					border: 2upx solid #707070;
					font-size: 26upx;
					margin-right: 10upx;
					margin-top: 6upx;
					margin-bottom: 6upx;

					.imgBox {
						position: relative;

						image {
							position: absolute;
							right: -20upx;
							top: -45upx;
							width: 20upx;
							height: 20upx;
						}
					}

				}

				.xuantag {
					border: 2upx solid #5998A6;
				}
			}
		}
	}
</style>
