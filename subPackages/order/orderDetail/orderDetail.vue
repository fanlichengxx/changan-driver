<!-- 前往发货地 -->
<template>
	<view class="contentBox paddTopheder">
		<Header title="前往发货地" />
		<view class="content">
			<view class="tips">
				<image src="@/static/order/tips.png"></image>
				安全提示：请不要为任何人垫付货款
			</view>
			<view class="oclock">
				实时订单：{{time}}
			</view>
			<view class="address">
				<view class="go">
					<view class="left">发</view>
					<view class="right">
						<view class="top">{{data.name}}</view>
						<view class="down">{{data.address}}</view>
					</view>
				</view>
				<view class="line"></view>
				<view class="get">
					<view class="left">卸</view>
					<view class="right">
						<view class="top">{{data.getName}}</view>
						<view class="down">{{data.getAddress}}</view>
					</view>
				</view>
			</view>
			<view class="jing">
				<view class="left">
					<view class="tags" v-for="(item,ind) in tags">{{item}}</view>
				</view>
				<view class="right" @click="alarm">
					<image src="@/static/order/jing.png"></image>
					<view class="text">一键报警</view>
				</view>
			</view>
			<view class="account">
				<view class="left">合计费用</view>
				<view class="right">{{money}}元</view>
			</view>
			<view class="word">本次服务下单人已提前支付预估费用，卸货完成后将自动支付至您的收款账户，若产生额外费用，请联系下单人确认。</view>
			<view class="order_box">
				<view class="order_box_one">
					<image src="@/static/order/touxiang.png" mode="aspectFill" class="order_box_img"></image>
					<view>
						<view class="order_box_one_title">下单人</view>
						<view class="order_box_one_dizhi">我已前往发货地，努力赶来...</view>
					</view>
				</view>
				<view class="order_box_one_time">今天 12:23
				</view>
			</view>

			<view class="order_time_box">
				<view class="order_time_box_title">
					<view>等待时长</view>
					<smh-timer ref="timer" @timing="timing" :auto="true" style="margin-top: 30rpx;"></smh-timer>
				</view>
				<view class="order_time_box_one">
					<view class="order_time_box_oneBox" @click="uplod">
						<image src="@/static/order/xiangji.png" mode="aspectFill"></image>
						<view>点击拍照</view>
					</view>
					<view class="order_time_box_text">
						<view class="order_time_box_textBox">
							<image src="@/static/order/jingao.png" mode="aspectFill"></image>
							<view class="order_time_box_wen">
								为了保障司机权益及货物安全，避免客户投诉，请点击左侧图标拍照。</view>
						</view>
						<view class="order_time_box_cha">查看图例 ></view>
					</view>
				</view>
			</view>
			<view style="height: 30rpx;"></view>

			<view class="bottom_box">
				<view class="bottom_ren" style="background-color: #579AA3;" v-if="state>=2">
					<image src="@/static/order/phone.png" mode="aspectFill">
					</image>
					<view class="">联系下单人</view>
				</view>
				<view class="bottom_ren" style="background-color: #579AA3;" v-if="state==0">
					<image src="@/static/order/phone.png" mode="aspectFill">
					</image>
					<view class="">联系下单人</view>
				</view>
				<view class="bottom_ren" :style="state==1 ? 'width: 710rpx;':'width: 450rpx'">
					<view  @click="golocation(state)" class="" style="margin-right: 20rpx;">{{['前往发货地','前往发货地','完成装货','到达目的地','完成卸货'][state]}}
					</view>
					<image v-if="state==1 || state==0" src="@/static/order/youjian.png" mode="aspectFill"></image>
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
				timestamp: 86400,
				state: 4,
				time: '03月22日 12:31',
				data: {
					name: '重庆长安明生物流公司',
					address: '重庆市渝北区杨柳北路12号',
					getName: '金源大道砚北B区',
					getAddress: '重庆市渝北区杨柳北路12号'
				},
				tags: ['易碎品', '需要绑带', '需要推车'],
				money: '99',
			}
		},
		onLoad() {},
		methods: {
			//按钮功能
			golocation(e){
				if(e==0||e==1){
					uni.navigateTo({
						url:'/subPackages/map/OrderNavigation/OrderNavigation'
					})
				}
				
			},
			//上传图片
			uplod(){
				uni.chooseImage({
					count:1,
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						// uni.uploadFile({
						// 	url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
						// 	filePath: tempFilePaths[0],
						// 	name: 'file',
						// 	formData: {
						// 		'user': 'test'
						// 	},
						// 	success: (uploadFileRes) => {
						// 		console.log(uploadFileRes.data);
						// 	}
						// });
					}
				});

			},
			// 一键报警
			alarm() {
				console.log('一键报警');
			},
			// 联系发货人 接单后 必须联系下单人 进行下一步
			conect(index) {
				console.log("联系下单人");
			},
			timing(second) {
				//实时返回计时时间
				// console.log(second)
			},
			reset() {
				//重置计时器
				this.$refs.timer.reset()
			},
			start() {
				//手动开启计时器
				this.$refs.timer.start()
			},
			clear() {
				//停止计时器
				this.$refs.timer.clear()
			},

		},
		watch: {

		},
		computed: {

		},
		components: {
			Header
		}
	}
</script>

<style lang="scss" scoped>
	$borderR: 12upx;
	$bg: #F7F9FB;

	.order_time_box_wen {
		font-size: 22rpx;
		color: #888888;
	}

	.order_time_box_cha {
		font-size: 26rpx;
		color: #00A0E9;
		margin-top: 34rpx;
	}

	.order_time_box_textBox image {
		width: 56rpx;
		height: 26rpx;
		margin-top: 5rpx;
		margin-right: 5rpx;
	}

	.order_time_box_textBox {
		width: 360rpx;
		background-color: #E9F8FF;
		border-radius: 10rpx;
		display: flex;
		padding: 40rpx 20rpx;
	}

	.order_time_box_text {
		margin-left: 20rpx;
	}

	.order_time_box_oneBox image {
		width: 64rpx;
		height: 49rpx;
		margin-top: 49rpx;
	}

	.order_time_box_oneBox view {
		margin-top: 40rpx;
		font-size: 24rpx;
		color: #AAAAAA;
	}

	.order_time_box_oneBox {
		width: 250rpx;
		height: 250rpx;
		background-color: #F9F9F9;
		text-align: center;
	}

	.order_time_box_one {
		display: flex;
		margin-left: 30rpx;
	}

	.order_time_box_title {
		text-align: center;
		width: 100%;
		margin-top: 40rpx;
		font-weight: 600;
	}

	.order_box_one_time {
		font-size: 22rpx;
		color: #999999;
		margin-right: 30rpx;
		margin-top: 40rpx;
	}

	.order_box_one_dizhi {
		font-size: 24rpx;
		color: #666666;
		margin-top: 20rpx;
	}

	.order_box_one_title {
		color: #202020;
		font-size: 32rpx;
	}

	.order_box_img {
		width: 82rpx;
		height: 82rpx;
		border-radius: 100%;
		margin-right: 20rpx;
	}

	.order_box_one {
		display: flex;
		align-items: center;
		margin-top: 40rpx;
		margin-left: 30rpx;
	}

	.order_time_box {
		width: 710rpx;
		background-color: #fff;
		border-radius: 10rpx;
		margin: 20rpx;
		padding-top: 40rpx;
		padding-bottom: 40rpx;
	}

	.order_box {
		width: 710rpx;
		background-color: #fff;
		border-radius: 10rpx;
		margin: 20rpx;
		display: flex;
		justify-content: space-between;
		padding-bottom: 40rpx;
	}

	.bottom_ren image {
		margin-right: 10rpx;
		width: 25rpx;
		height: 25rpx;
	}

	.bottom_ren {
		display: flex;
		align-items: center;
		width: 220rpx;
		height: 110rpx;
		background-color: #019FE8;
		border-radius: 10rpx;
		color: #fff;
		justify-content: center;
		margin-right: 10rpx;
		margin-top: 35rpx;
		margin-left: 20rpx;
	}

	.bottom_box {
		width: 100%;
		height: 233rpx;
		background-color: #fff;

		display: flex;
	}

	.contentBox {
		width: 100%;
		height: calc(100vh - var(--window-bottom));
		box-sizing: border-box;
		background-color: #F6F6F6;

		.content {
			width: 100%;
			margin: 10upx auto;

			.tips {
				width: 92%;
				margin: 0 auto;
				border-radius: 10upx;
				border: 1upx solid #F6E7D4;
				color: #FF9923;
				font-family: PingFang SC;
				font-size: 24upx;
				background-color: #F8F0E6;
				display: flex;
				align-items: center;
				justify-content: center;

				image {
					width: 30upx;
					height: 30upx;
				}
			}

			.oclock {
				width: 380upx;
				height: 70upx;
				border-radius: 35upx;
				margin-left: 30upx;
				margin-top: 10upx;
				border: 1upx solid #F6E7D4;
				color: #55C4F8;
				font-family: PingFang SC;
				font-size: 26upx;
				background-color: #E9F8FF;
				text-align: center;
				line-height: 70upx;
			}

			.address {
				width: 92%;
				background-color: #FFFFFF;
				border-radius: 10upx;
				margin: 0 auto;

				.line {
					border: 1upx solid #EEEEEE;
					width: 74%;
					margin: 0 auto;
				}

				.get,
				.go {
					width: 92%;
					margin: 20upx auto;
					border-radius: 10upx;
					display: flex;
					align-items: center;
					box-sizing: border-box;
					padding: 25upx;

					.left {
						width: 34upx;
						height: 34upx;
						border-radius: 50%;
						background-color: #019FE8;
						color: #FFFFFF;
						text-align: center;
						font-size: 14upx;
						font-family: PingFang-SC-Heavy;
						position: relative;
						top: -10upx;
						margin-right: 20upx;
					}

					.right {

						.top {
							color: #202020;
							font-size: 32upx;
							font-family: PingFang-SC-Bold;
						}

						.down {
							color: #777777;
							font-size: 26upx;
							font-family: PingFang-SC-Regular;
							margin-top: 10upx;
						}
					}
				}
			}

			.jing {
				width: 92%;
				height: 140upx;
				background-color: #FFFFFF;
				margin: 10upx auto;
				border-radius: 10upx;
				display: flex;
				justify-content: space-around;

				.left {
					display: flex;
					align-items: center;

					.tags {
						width: 130upx;
						height: 54upx;
						border-radius: 25upx;
						background-color: #F0F0F0;
						color: #999999;
						font-size: 24upx;
						font-family: PingFang-SC-Regular;
						text-align: center;
						line-height: 54upx;
						margin: 0 10upx;
					}
				}

				.right {
					display: flex;
					flex-wrap: wrap;
					justify-content: center;

					image {
						width: 40upx;
						height: 40upx;
						position: relative;
						left: 10upx;
						top: 20upx;
					}

					.text {
						width: 100%;
						font-size: 22upx;
						font-family: PingFang-SC-Regular;
						text-align: center;
						color: #F45D64;
					}
				}
			}

			.account {
				width: 92%;
				height: 100upx;
				line-height: 100upx;
				margin: 0 auto;
				background-color: #FFFFFF;
				border-radius: 10upx;
				display: flex;
				align-items: center;
				// justify-content: space-around;
				box-sizing: border-box;

				.left {
					width: 50%;
					margin-left: 43upx;
					color: #202020;
					font-size: 26upx;
					font-family: PingFang-SC-Bold;
				}

				.right {
					margin-right: 43upx;
					width: 50%;
					color: #019FE8;
					font-size: 30upx;
					font-family: PingFang-SC-Bold;
					text-align: center;
				}
			}

			.word {
				width: 92%;
				height: 180upx;
				display: flex;
				justify-content: center;
				align-items: center;
				margin: 20upx auto;
				background-color: #ECF8FD;
				border-radius: 10upx;
				align-items: center;
				box-sizing: border-box;
				padding: 0 20upx;
				color: #019FE8;
				font-size: 24upx;
				font-family: PingFang-SC-Regular;
				text-align: left;
				line-height: 40upx;
				text-indent: 1em;

			}

		}

	}
</style>