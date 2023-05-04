<template>
	<view class="orderMap paddTopheder">
		<Header title="添加地址" />
		<Map :width="WindowInfo.windowWidth" :height="410" :markers.sync="markers" :latitude.sync="uForm.lat"
			:index="index" :longitude.sync="uForm.lng" />
		<view class="addresBox">
			<view class="addres">
				<view class="addres1">
					<view class="left">
						<view class="leftTop">
							{{uForm.name}}
						</view>
						<view class="leftBottom">
							{{uForm.address}}
						</view>
					</view>
					<view class="rightbt" @click="changeOfAddress()">
						更改地址 <u-icon name="arrow-right" size="10px" color="#00A0E9" style="margin-left:6upx;"></u-icon>
					</view>
				</view>
				<view class="addres2">
					<u--form labelPosition="left" :model="uForm" :rules="rules" ref="uForm" labelWidth="70"
						errorType="toast">
						<u-form-item label="门牌号" prop="detail">
							<u--input v-model="uForm.detail" border="bottom" placeholder="请填写门牌号" clearable>
							</u--input>
						</u-form-item>
						<u-form-item label="联系人" prop="contact">
							<u-input v-model="uForm.contact" border="bottom" placeholder="请填写联系人姓名" clearable>
								<template slot="suffix">
									<view class="phones">
										通讯录 <u-icon name="arrow-right" color="#c2c2c2" size="12"
											style="margin-left:10upx;"></u-icon>
									</view>
								</template>
							</u-input>
						</u-form-item>
						<u-form-item label="手机号" prop="phone">
							<u--input v-model="uForm.phone" border="bottom" placeholder="手机" clearable></u--input>
						</u-form-item>
						<u-form-item>
							<u-checkbox-group v-model="addresCheckbo">
								<u-checkbox label="存入地址薄" :name="1" shape="circle" size="15px" labelSize="15px">
								</u-checkbox>
							</u-checkbox-group>
						</u-form-item>
					</u--form>
					<u-button type="primary" text="确认地址信息" style="margin-top:20upx;" @click="onsubmit()"></u-button>
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
	import Header from '@/components/header/header.vue'
	import Map from '@/components/map/map.vue'
	export default {
		data() {
			return {
				markers: [{
					latitude: 39.909,
					longitude: 116.39742
				}],

				WindowInfo: {},
				index: null,
				uForm: {
					lat: 39.909, //中心纬度
					lng: 116.39742, //中心经度			
					contact: '',
					phone: null,
				},
				addresCheckbo: [],
				rules: {
					phone: [{
						required: false,
						message: '请输入正确的格式',
						pattern: this.$regExp.numberPhone3,
						trigger: ['change', 'blur']
					}]
				},
			};
		},
		methods: {
			...mapMutations('order', ['deleteAddressList']),
			//更改地址
			changeOfAddress() {
				uni.navigateTo({
					url: '/subPackages/order/searchMap/searchMap'
				})
			},
			//确认地址信息
			onsubmit() {
				this.$refs.uForm.validate().then(res => {
					if (res) {
						if (this.uForm.name) {
							this.deleteAddressList({
								index: this.index,
								data: this.uForm
							})
							uni.switchTab({
								url: '/pages/index/index'
							})
						} else {
							uni.$showMsg('请选择地址')
						}
					}
				})

			}
		},
		onLoad(options) {
			this.WindowInfo = uni.getWindowInfo() //获取品目宽度
			if (options.index) {
				//回显地址信息
				this.index = options.index
				this.uForm = this.addressList[options.index]
			}
		},
		computed: {
			...mapState({
				addressList: state => state.order.addressList
			})
		},
		components: {
			Header,
			Map,
		}
	}
</script>

<style lang="scss" scoped>
	$bgc:#f0f0f0;
	$colorblue: #00A0E9;
	$colorCC: #ccc;
	$size12:24upx;
	$borderR:8upx;
	$size14:28upx;

	.orderMap {
		height: 100vh;
		display: flex;
		flex-direction: column;

		.addresBox {
			overflow: scroll;
			flex: 1;
			width: 100%;
			background-color: #fff;
			border-radius: 16upx;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-content: space-between;

			.addres {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				align-content: space-around;
				box-sizing: border-box;
				margin: 20upx;
				font-size: 26upx;

				.addres1 {
					border-radius: 12upx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					background-color: $bgc;
					padding: 24upx 20upx;
					height: 88upx;

					.left {
						.leftTop {
							font-size: $size14;
							font-weight: 500;
						}

						.leftBottom {
							margin-top: 10upx;
							font-size: $size12;
							color: $colorCC;
						}
					}

					.rightbt {
						display: flex;
						align-items: center;
						padding: 12upx 14upx 12upx 20upx;
						border-radius: $borderR;
						font-size: $size12;
						color: $colorblue;
						border: 2upx solid $colorblue;
						background-color: #fff;
					}
				}

				.addres2 {
					width: 100%;
					box-sizing: border-box;
					padding: 20upx;
					display: flex;
					flex-direction: column;
					align-content: space-between;

					.phones {
						display: flex;
						justify-content: flex-start;
						align-items: center;
						color: #c2c2c2;


					}
				}
			}
		}
	}
</style>
