<!-- 司机加盟信息 -->
<template>
	<view class="confirm paddTopheder">
		<view class="main" v-show='!typeShow&!specsShow'>
			<Header title="司机加盟-确认信息" />
			<!-- 司机信息 -->
			<view class="driver" v-if='cont!=2'>
				<view class="title">司机信息</view>
				<view class="input_box">
					<view class="input_box_view">
						<view class="input_box_flex">
							<view class="input_box_wen">*</view>
							<view class="input_box_title">司机姓名：</view>
						</view>

						<input placeholder="请输入"></input>
					</view>
				</view>
				<view class="input_box">
					<view class="input_box_view">
						<view class="input_box_flex">
							<view class="input_box_wen">*</view>
							<view class="input_box_title">身份证号：</view>
						</view>

						<input placeholder="请输入"></input>
					</view>
				</view>
				<view class="input_box">
					<view class="input_box_view">
						<view class="input_box_flex">
							<view class="input_box_wen">*</view>
							<view class="input_box_title">年龄：</view>
						</view>
						<input placeholder="请输入"></input>
					</view>
				</view>
				<view class="input_box">
					<view class="input_box_view">
						<view class="input_box_flex">
							<view class="input_box_wen">*</view>
							<view class="input_box_title">接单城市：</view>
						</view>
						<view class="change_box">
							<input placeholder="请选择" disabled="true" style="width: 100%;"></input>
							<u-icon name="arrow-right"></u-icon>
						</view>

					</view>
				</view>
				<view class="input_box">
					<view class="input_box_view">
						<view class="input_box_flex">
							<view class="input_box_wen">*</view>
							<view class="input_box_title">联系电话：</view>
						</view>
						<input placeholder="请输入"></input>
					</view>
				</view>
				<view class="input_box">
					<view class="input_box_view">
						<view class="input_box_flex">
							<view class="input_box_wen">*</view>
							<view class="input_box_title">准驾车型：</view>
						</view>
						<view class="change_box">
							<input placeholder="请选择" disabled="true" style="width: 100%;"></input>
							<u-icon name="arrow-right"></u-icon>
						</view>
					</view>
				</view>
			</view>
			<view class="driver" v-if="cont==1 || cont==2">
				<view class="title">车辆信息</view>
				<view class="input_box">
					<view class="input_box_view">
						<view class="input_box_flex">
							<view class="input_box_wen">*</view>
							<view class="input_box_title">车牌号：</view>
						</view>
						<input placeholder="请输入"></input>
					</view>
				</view>
				<view class="input_box">
					<view class="input_box_view">
						<view class="input_box_flex">
							<view class="input_box_wen">*</view>
							<view class="input_box_title">车辆类别：</view>
						</view>
						<view class="change_box" @click="tocategory">
							<input placeholder="请选择" disabled="true" style="width: 100%;"></input>
							<u-icon name="arrow-right"></u-icon>
						</view>
					</view>
				</view>
				<view class="input_box">
					<view class="input_box_view">
						<view class="input_box_flex">
							<view class="input_box_wen">*</view>
							<view class="input_box_title">品牌型号：</view>
						</view>
						<input placeholder="请输入"></input>
					</view>
				</view>
				<view class="input_box">
					<view class="input_box_view">
						<view class="input_box_flex">
							<view class="input_box_wen">*</view>
							<view class="input_box_title">规格：</view>
						</view>
						<view class="change_box" @click="toType">
							<input placeholder="请选择" disabled="true" style="width: 100%;"></input>
							<u-icon name="arrow-right"></u-icon>
						</view>
					</view>
				</view>
				<view class="input_box">
					<view class="input_box_view">
						<view class="input_box_flex">
							<view class="input_box_wen">*</view>
							<view class="input_box_title">厢长（米）：</view>
						</view>
						<input placeholder="请输入"></input>
					</view>
				</view>
				<view class="input_box">
					<view class="input_box_view">
						<view class="input_box_flex">
							<view class="input_box_wen">*</view>
							<view class="input_box_title">载方（方）：</view>
						</view>
						<input placeholder="请输入"></input>
					</view>
				</view>
				<view class="input_box">
					<view class="input_box_view">
						<view class="input_box_flex">
							<view class="input_box_wen">*</view>
							<view class="input_box_title">载重（吨）：</view>
						</view>
						<input placeholder="请输入"></input>
					</view>
				</view>
				<view class="input_box">
					<view class="input_box_view">
						<view class="input_box_flex">
							<view class="input_box_wen">*</view>
							<view class="input_box_title">车高（米）：</view>
						</view>
						<input placeholder="请输入"></input>
					</view>
				</view>
			</view>
			<view class="btn" style="width: 710rpx;margin-left: 20rpx;margin-top: 60rpx;">
				<button type="primary" @click="confirm"> 提交</button>
			</view>
		</view>
		
		<CarSpecs v-show="specsShow" @save='save'/>
		<selectCarType v-show="typeShow" @determine='determine'/>
	</view>
</template>

<script>
	import Header from '@/components/header/header.vue'
	import CarSpecs from '@/subPackages/driver/CarSpecs/CarSpecs.vue'
	import selectCarType from '@/subPackages/driver/selectCarType/selectCarType.vue'
	export default {
		data() {
			return {
				cont: 1,
				specsShow: false,
				typeShow: false,
			}

		},
		methods: {
			//
			save(){
				this.specsShow=false
			},
			//
			determine(){
				this.typeShow=false
			},
			// 提交按钮
			confirm() {
				console.log('提交', this.model)
			},
			toType() {
				// uni.navigateTo({
				// 	url:'/subPackages/driver/selectCarType/selectCarType'
				// })
				this.typeShow=true
				
			},
			tocategory() {
				// uni.navigateTo({
				// 	url:'/subPackages/driver/CarSpecs/CarSpecs'
				// })
				this.specsShow=true
				
			}
		},
		components: {
			Header,
			CarSpecs,
			selectCarType
		},
		onLoad(option) {
			//接收跳转过来的参数
			if (option.cont) {
				this.cont = option.cont
			}

		}
	}
</script>

<style lang="scss" scoped>
	.change_box {
		display: flex;
		align-items: center;
		width: 70%;
	}

	.input_box_flex {
		display: flex;
		width: 30%;
	}

	.input_box_wen {
		margin-right: 10rpx;
		color: #F8474F;
	}

	.input_box_title {
		color: #444444;
		font-size: 26rpx;
	}

	.input_box {
		margin: 60rpx;
		margin-bottom: 20rpx;
	}

	.input_box_view {
		font-size: 28rpx;
		display: flex;
		align-items: center;
	}

	.input_box input {
		text-align: right;
		font-size: 26rpx;
		width: 70%;
		color: #999999;
	}

	::-webkit-input-placeholder {
		/* WebKit browsers */
		direction: rtl;
	}

	:-moz-placeholder {
		/* Mozilla Firefox 4 to 18 */
		direction: rtl;
	}

	::-moz-placeholder {
		/* Mozilla Firefox 19+ but I'm not sure about working */
		direction: rtl;
	}

	:-ms-input-placeholder {
		/* Internet Explorer 10+ */
		direction: rtl;
	}

	.confirm {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: calc(100vh - var(--window-bottom));
		box-sizing: border-box;

		.driver,
		.vehicle {
			width: 100%;
			margin-top: 10upx;
			background-color: #FFFFFF;
			box-sizing: border-box;
			padding-bottom: 30rpx;
border-top: 20rpx solid #f6f6f6;
			.title {
				font-size: 34upx;
				font-weight: 900;
				font-family: PingFang SC;
				color: #202020;
				padding-top: 40upx;
				padding-left: 60upx;
			}

			.icon {
				margin-right: 50upx;
			}
		}


	}
	page{
		background-color: #fff;
	}
</style>