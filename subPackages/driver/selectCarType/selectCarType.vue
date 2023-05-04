<template>
	<view class="box">
		<u-navbar leftIcon="close" leftIconSize="36rpx" leftIconColor="#202020" title="选择车型"
			titleStyle="color:#202020;font-size:36rpx;font-weight:bold" :fixed="true" :autoBack="true"
			:placeholder="true"></u-navbar>

		<view class="main">
			<view class="left">
				<view :class="{select_item:true,active:ShowIndex==index}" @click="toggle(index)"
					v-for="(item,index) in carData" :ket="item.name">
					<image class="img" :src="item.pic" mode="widthFix"></image>
					<text class="carName">{{item.name}}</text>
				</view>
			</view>
			<view class="right">
				<view class="right_group">
					<view class="option" @click="selectedRadio(i,ShowIndex)"
						v-for="(item,i) in carData[ShowIndex].radio_group">
						<view class="text">
							{{item.tit}}
						</view>
						<image class="radio"
							:src="carData[ShowIndex].selected==i?require('@/static/carType/select.png'):require('@/static/carType/notSelect.png')"
							mode="widthFix">
						</image>
					</view>
				</view>
			</view>
		</view>
		<button class="btn" @click="determine">确定</button>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				carData: [{
						pic: '/static/carType/小型面包.png',
						name: '小型面包',
						radio_group: [{
								tit: '2.6米-3.4米',
								isActive: true,
							},
							{
								tit: '3.4米-4.2米',
							},
							{
								tit: '4.2米-4.8米',
							},
							{
								tit: '4.8米-5.8米',
							}
						],
						selected: 0
					}, {
						pic: '/static/carType/金杯.png',
						name: '金杯',
						radio_group: [{
								tit: '金杯option',
							},
							{
								tit: '金杯option',
							},
							{
								tit: '金杯option',
							},
							{
								tit: '金杯option',
							}
						],
						selected: 0
					}, {
						pic: '/static/carType/依维柯.png',
						name: '依维柯',
						radio_group: [{
								tit: '依维柯2.6米-3.4米',

							},
							{
								tit: '依维柯3.4米-4.2米',

							},
							{
								tit: '依维柯4.2米-4.8米',

							},
							{
								tit: '依维柯4.8米-5.8米',

							}
						],
						selected: 0
					}, {
						pic: '/static/carType/商务车.png',
						name: '商务车',
						radio_group: [{
								tit: '商务车5.6米-3.4米',

							},
							{
								tit: '商务车2.4米-4.2米',

							},
							{
								tit: '商务车1.2米-4.8米',

							},
							{
								tit: '商务车3.8米-5.8米',

							}
						],
						selected: 0
					}, {
						pic: '/static/carType/厢式货车.png',
						name: '厢式货车',
						radio_group: [{
								tit: '厢式货车2.6米-4.4米',

							},
							{
								tit: '厢式货车3.4米-2.2米',

							},
							{
								tit: '厢式货车4.2米-4.8米',

							}
						],
						selected: 0
					}, {
						pic: '/static/carType/冷藏车.png',
						name: '冷藏车',
						radio_group: [{
								tit: '冷藏车2.6米-3.4米',

							},
							{
								tit: '冷藏车3.4米-4.2米',

							},
							{
								tit: '冷藏车4.2米-4.8米',

							},
							{
								tit: '冷藏车4.8米-3.9米',

							}
						],
						selected: 0
					}, {
						pic: '/static/carType/平板货车.png',
						name: '平板货车',
						radio_group: [{
								tit: '平板货车2.6米-3.4米',

							},
							{
								tit: '平板货车3.4米-4.2米',

							}
						],
						selected: 0
					},
					{
						pic: '/static/carType/平板货车.png',
						name: '高栏货车',
						radio_group: [{
								tit: '高栏货车2.6米-3.4米',

							},
							{
								tit: '高栏货车3.4米-4.2米',

							},
							{
								tit: '高栏货车x.2米-4.8米',

							},
							{
								tit: '高栏货车x.8米-5.8米',

							}
						],
						selected: 0
					}
				],
				//
				TypeValue: { //存储车型类别
					tid: 0,
					name: '小型面包'
				},
				radioValue: { //存储车型的单选选择
					vid: 0,
					name: '2.6米-3.4米'
				},
				isHighLight: false,


				ShowIndex: 0,

			}
		},

		methods: {
			selectedRadio(index, showIndex) { //点击单选触发事件,修改selected值,代表当前选择的单选框
				this.carData[showIndex].selected = index
			},
determine(){
	uni.navigateTo({
		url:'/subPackages/driver/CarSpecs/CarSpecs'
	})
},
			toggle(index) {
				this.ShowIndex = index
			}
		}
	}
</script>

<style lang="scss" scoped>
	.box {
		position: relative;
		padding-bottom: 175rpx * 2;

	}

	.main {
		display: flex;

		>.left {
			width: 260rpx;
			background-color: #F6F6F6;


			>.select_item {

				padding: 26rpx 50rpx 0rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;

				>.carName {
					width: 100%;
					text-align: center;
					font-size: 22rpx;
					margin-top: 19rpx;
					color: #202020;
					margin-bottom: 26rpx;
				}


				>.img {
					width: 160rpx;
				}
			}

			//选中车型样式
			.active {
				background-color: #fff;
			}
		}

		.right {
			padding: 0rpx 50rpx;
			flex: 1;
			box-sizing: border-box;

			>.right_group {
				>.option {
					height: 130rpx;
					align-items: center;
					display: flex;
					justify-content: space-between;

					>.text {
						color: #666666;
						font-size: 28rpx;
					}

					>.radio {
						height: 40rpx;
						width: 40rpx;
					}
				}
			}
		}
	}

	.btn {
		background-color: #00A0E9;
		height: 55rpx * 2;
		width: 335rpx * 2;
		text-align: center;
		line-height: 110rpx;
		color: #FFFFFF;
		font-size: 28rpx;
		position: absolute;
		left: 50%;
		transform: translate(-50%, 0);
		bottom: 88rpx;
	}
</style>