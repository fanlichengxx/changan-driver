<!-- 偏好设置 -->
<template>
	<view class="preferences paddTopheder">
		<Header title="听单偏好" />
		<view class="main">
			<view class="first">
				<view class="one">接单偏好</view>
				<view class="two">
					<view v-for="(item,index) in first" class="first_order" :class="setcurrent1==index?'firstChoice':''"
						:v-model="{item}" @click="getFirst(item,index)">{{item}}</view>

				</view>
			</view>
			<view class="distanceShipment">
				<view class="one">距装货地距离（单选）</view>
				<view class="two">
					<view v-for="(item,index) in distanceS" class="first_order"
						:class="setcurrent2==index?'firstChoice':''" :v-model="{item}"
						@click="getDistanceS(item,index)">{{item}}</view>
				</view>
			</view>
			<view class="distanceUnload">
				<view class="one">距装货地到卸货地距离（单选）</view>
				<view class="two">
					<view v-for="(item,index) in distanceU" class="first_order"
						:class="setcurrent3==index?'firstChoice':''" :v-model="{item}"
						@click="getDistanceU(item,index)">{{item}}</view>
				</view>
			</view>
			<view class="orderType">
				<view class="one">订单车型</view>
				<view class="two">
					<view v-for="(item,index) in orderType" class="first_order"
						:class="setcurrent4==index?'firstChoice':''" :v-model="{item}"
						@click="getorderType(item,index)">{{item}}</view>
				</view>
			</view>
			<view class="people">
				<view class="one">最多跟车人数（单选）</view>
				<view class="two">
					<view v-for="(item,index) in people" class="first_order"
						:class="setcurrent5==index?'firstChoice':''" :v-model="{item}" @click="getPeople(item,index)">
						{{item}}
					</view>
				</view>
				<input placeholder="其他跟车人数" style="marginLeft:40upx ;" v-model="input1" />
			</view>
			<view class="loveLine">
				<view class="one">偏好路线</view>
				<view class="two" @click="preference=true">
					<view class="contain">已设“江北区--高新区产业园”等2条路线 </view>
					<u-icon name="arrow-right" color="#579AA3" class="icon"></u-icon>
				</view>
			</view>
			<view class="alwaysLine" @click="often=true">
				<view class="one">常去地点</view>
				<view class="two">
					<view class="contain">已设“江北区--高新区产业园”等2条路线 </view>
					<u-icon name="arrow-right" color="#579AA3" class="icon"></u-icon>
				</view>
			</view>
			<view class="timeLove">
				<view class="one">时效偏好（多选）</view>
				<view class="two">
					<view v-for="(item,index) in timeLove" class="first_order" :class="item.istag?'loveChoice':''"
						:v-model="item.name" @click="getLove(item,index)">{{item.name}}

						<image v-show="item.istag" src="@/static/order/tag.png" class="tag"></image>
					</view>

				</view>
			</view>
			<view class="otherLove">
				<view class="one">其它偏好（多选）</view>
				<view class="two">
					<view v-for="(item,index) in otherLove" class="first_order" :class="item.istag?'loveChoice':''"
						:v-model="item.name" @click="getOther(item,index)">{{item.name}}
						<image v-show="item.istag" src="@/static/order/tag.png" class="tag"></image>
					</view>
					<input placeholder="请输入其他偏好" style="marginLeft:40upx ;" v-model="input2" />
				</view>
			</view>
			<view class="btn">
				<button type="primary" @click="confirm">保存设置</button>
			</view>
		</view>

		<u-popup :show="preference" :round="20" @close='preference=false'>
			<view class="preference_title">
				<view>偏好路线设置</view>
			</view>
			<view class="preference_item">
				<view class="preference_item_box">
					<view class="preference_item_box_top">
						<view>
							<view class="preference_item_box_topFlx">
								<image src="@/static/order/zhuang.png" mode="aspectFill"></image>
								<view class="preference_item_box_top_title">重庆长安明生物流公司</view>
							</view>
							<view class="preference_item_box_top_sumber">
								重庆市渝北区杨柳北路12号</view>
						</view>
						<view class="preference_item_box_top_number">地址簿</view>
					</view>
					<view class="preference_item_box_top" style="margin-top: 42rpx;">
						<view>
							<view class="preference_item_box_topFlx">
								<image src="@/static/order/xie1.png" mode="aspectFill"></image>
								<view class="preference_item_box_top_title">重庆长安明生物流公司</view>
							</view>
							<view class="preference_item_box_top_sumber">
								重庆市渝北区杨柳北路12号</view>
						</view>
						<view class="preference_item_box_top_number">地址簿</view>
					</view>
				</view>
				<view class="preference_add">
					<view class="preference_add_flx">
						<image src="@/static/order/jia.png" mode="aspectFill"></image>
						<view>添加路线</view>
					</view>
				</view>
				<view style="height: 20rpx;"></view>
			</view>
			<view class="preference_button">
				<u-button text="保存设置" color='#00A0E9' class="preference_button_ptao" type='primary'></u-button>
			</view>
		</u-popup>
		
		<u-popup :show="often" :round="20" @close='often=false'>
			<view class="preference_title">
				<view>常去地点设置</view>
			</view>
			<view class="preference_item">
				<view class="preference_item_box">
					<view class="preference_item_box_top">
						<view>
							<view class="preference_item_box_topFlx">
								<image src="@/static/order/zhuang.png" mode="aspectFill"></image>
								<view class="preference_item_box_top_title">重庆长安明生物流公司</view>
							</view>
							<view class="preference_item_box_top_sumber">
								重庆市渝北区杨柳北路12号</view>
						</view>
						<view class="preference_item_box_top_number">地址簿</view>
					</view>
			<view class="oftenadd">
				<view class="preference_add_flx">
					<image src="@/static/order/jia.png" mode="aspectFill"></image>
					<view>添加路线</view>
				</view>
			</view>
				</view>
			
				<view style="height: 20rpx;"></view>
			</view>
			<view class="preference_button">
				<u-button text="保存设置" color='#00A0E9' class="preference_button_ptao" type='primary'></u-button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import Header from '@/components/header/header.vue'
	export default {
		data() {
			return {
				preferencesData: {
					firstorder: '',
					distanceS: '',
					distanceU: '',
					orderType: '',
					people: "",
					timelove: '',
					otherlove: "",
				},
				preference: false,
				often:false,
				input1: null,
				input2: null,
				setcurrent1: 0,
				setcurrent2: 0,
				setcurrent3: 0,
				setcurrent4: 0,
				setcurrent5: 0,
				first: ['抢单优先', '派单优先'],
				distanceS: ['不限', '<3km', '<5km', '<8km', '<15km', '<20km', '<30km', '<50km'],
				distanceU: ['不限', '<30km', '<50km', '<100km', '<150km'],
				orderType: ['小面', '中面'],
				people: ['不限', '1人跟车', '2人跟车', '不跟车'],
				timeLove: [{
						name: "即时",
						istag: false
					},
					{
						name: "预约单",
						istag: false
					}
				],
				otherLove: [{
						name: "付费搬运单",
						istag: false
					},
					{
						name: "搭把手搬运单",
						istag: false
					}
				],
			}
		},
		methods: {
			//打开偏好路线
			preferenceTap() {
				this.preference = true
			},
			// 切换接单偏好
			getFirst(value, ind) {
				this.setcurrent1 = ind
				this.preferencesData.firstorder = value
				console.log('pre', this.preferencesData);
			},
			// 切换装货物距离	
			getDistanceS(value, ind) {
				this.setcurrent2 = ind
				this.preferencesData.distanceS = value
			},
			// 切换卸货物距离
			getDistanceU(value, ind) {
				this.setcurrent3 = ind
				this.preferencesData.distanceU = value

			},
			getorderType(value, ind) {
				this.setcurrent4 = ind
				this.preferencesData.orderType = value

			},
			// 跟单人数
			getPeople(value, ind) {
				this.setcurrent5 = ind
				this.preferencesData.people = value

			},
			// 偏好设置
			getLove(value, ind) {
				if (value.istag) {
					value.istag = false
				} else {
					value.istag = true
				}
			},
			// 其他设置
			getOther(value, ind) {
				if (value.istag) {
					value.istag = false
				} else {
					value.istag = true
				}

			},
			// 确认按钮
			confirm() {
				console.log('pre', this.preferencesData);
			}
		},
		components: {
			Header
		},
		onLoad(option) {
			//接收跳转过来的参数

		}
	}
</script>


<style lang="scss" scoped>
	.oftenadd{
		width: 670rpx;
		margin-top: 40rpx;
		
		border-radius: 10rpx;
		background-color: #fff;
		height: 100rpx;
		margin-left: 20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.preference_button_ptao {
		width: 710rpx;
		height: 110rpx;
		margin-top: 35rpx;
	}

	.preference_button {
		height: 233rpx;
		width: 750rpx;
		background-color: #fff;
	}

	.preference_add_flx image {
		width: 22rpx;
		height: 22rpx;
		margin-right: 15rpx;
	}

	.preference_add_flx {
		display: flex;
		align-items: center;
		color: #999999;
		font-size: 30rpx;
	}

	.preference_add {
		width: 710rpx;
		border-radius: 10rpx;
		background-color: #fff;
		height: 100rpx;
		margin-left: 20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.preference_item_box_top_number {
		font-size: 28rpx;
		color: #202020;
		font-weight: 600;
	}

	.preference_item_box_top_sumber {
		margin-left: 54rpx;
		font-size: 26rpx;
		color: #777777;
		margin-top: 20rpx;
	}

	.preference_item_box_top_title {
		font-size: 32rpx;
		margin-left: 20rpx;
	}

	.preference_item_box_topFlx {
		display: flex;
		align-items: center;
	}

	.preference_item_box_topFlx image {
		width: 34rpx;
		height: 34rpx;
	}

	.preference_item_box_top {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.preference_item_box {
		background-color: #fff;
		border-radius: 10rpx;
		width: 670rpx;
		padding: 20rpx;
		border-radius: 10rpx;
		margin: 20rpx;
	}

	.preference_item {
		background-color: #F6F6F6;
	}

	.preference_title {
		height: 93rpx;
		text-align: center;
		padding-top: 29rpx;
		font-size: 36rpx;
		font-weight: 600;
	}

	.preferences {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: calc(100vh - var(--window-bottom));
		box-sizing: border-box;
		background-color: #F6F6F6;

		.main {
			width: 100%;
			background-color: #FFFFFF;

			.first,
			.timeLove,
			.otherLove {
				box-sizing: border-box;
				margin: 10upx 0upx;

				.one {
					box-sizing: border-box;
					font-size: 34rpx;
					font-family: PingFang SC;
					font-weight: 900;
					color: #202020;
					margin-left: 40upx;
				}

				.two {
					box-sizing: border-box;
					font-size: 28upx;
					font-family: PingFang SC;
					margin: 40upx;
					display: flex;
					flex-wrap: wrap;
					align-items: center;

					.first_order {
						position: relative;
						width: 200upx;
						height: 70upx;
						color: #666666;
						background-color: #F6F6F6;
						line-height: 70upx;
						text-align: center;
						margin-right: 40upx;
						border-radius: 10upx;

						.tag {
							width: 30upx;
							height: 30upx;
							z-index: 9;
							position: absolute;
							top: 10upx;
							right: 0;
						}
					}

					.firstChoice {
						color: #FFFFFF;
						background-color: #019FE8;
					}

					.loveChoice {
						color: #579AA3;
					}

				}
			}

			.distanceShipment,
			.distanceUnload,
			.orderType,
			.people {
				box-sizing: border-box;
				margin: 10upx 0upx;

				.one {
					box-sizing: border-box;
					font-size: 34rpx;
					font-family: PingFang SC;
					font-weight: 900;
					color: #202020;
					margin-left: 40upx;
				}

				.two {
					box-sizing: border-box;
					font-size: 28upx;
					font-family: PingFang SC;
					margin: 40upx;
					display: flex;
					flex-wrap: wrap;
					align-items: center;

					.first_order {
						width: 140upx;
						height: 70upx;
						color: #666666;
						background-color: #F6F6F6;
						line-height: 70upx;
						text-align: center;
						margin: 5upx 15upx;
						border-radius: 10upx;
					}

					.firstChoice {
						color: #FFFFFF;
						background-color: #019FE8;
					}
				}
			}

			.loveLine,
			.alwaysLine {
				box-sizing: border-box;
				margin: 10upx 0upx;

				.one {
					box-sizing: border-box;
					font-size: 34rpx;
					font-family: PingFang SC;
					font-weight: 900;
					color: #202020;
					margin-left: 40upx;
				}

				.two {
					box-sizing: border-box;
					font-size: 28upx;
					font-family: PingFang SC;
					margin: 40upx;
					display: flex;

					justify-content: space-between;
					align-items: center;
					border: 1upx solid #579AA3;
					border-radius: 10upx;
					color: #579AA3;

					.contain {
						margin-left: 30upx;
					}

					.icon {
						margin-right: 20upx;
					}

				}
			}

			.btn {
				box-sizing: border-box;
				margin: 10upx 40upx;
			}
		}
	}
</style>