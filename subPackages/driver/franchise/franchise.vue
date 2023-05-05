<!-- 司机加盟 -->
<template>
	<view class="franchise paddTopheder">
		<Header title="司机加盟" />
		<view class="main">

			<view class="stept">
				<u-steps current="0" dot>
					<u-steps-item title="提交资料">
					</u-steps-item>
					<u-steps-item title="认证审核"></u-steps-item>
					<u-steps-item title="认证成功"></u-steps-item>
				</u-steps>
			</view>
			<view class="upload">
				<view class="title">上传证件照</view>
				<view class="cell">
					是否带车加入
					<u-switch v-model="value" @change="change"></u-switch>
				</view>
				<view class="tag">*车长超过4.2米（包含4.2米）的车型请上传道路运输许可证</view>
				<view class="photo">
					<view class="photo_item" v-for="(item,index) in fileData">
						<view class="tit">{{item.name}}</view>
						<view class="contain" @click="upload(index)">
							<view class="image">
								<image src="../../../static/tabBar/xiangji.png" v-if="item.src==null||item.src==''" class="xiangji"></image>
								<image :src="item.src" v-else class="filePhoto"></image>
							</view>
							<view class="down">{{item.up}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="btn">
			<button type="primary" @click="confirm"> 确认信息</button>
		</view>

	</view>
</template>

<script>
	import config from '@/api/index.js'
	import store from '@/store/index.js'
	import utils from '@/utils/file.js'
	import Header from '@/components/header/header.vue'
	export default {
		data() {
			return {
				value:true,
				cont:1,
				isup: false,
				currentPhoto: '-1',
				fileList6: [],
				show: false,
				fileData: [],
				data: [{
					name: '身份证（人像面）',
					up: '上传身份证人像面',
					src: null,
					state: 0,
					isup:false
				}, {
					name: '身份证（国徽面）',
					up: '上传身份证国徽面',
					src: null,
					state: 0,
					isup:false
				}, {
					name: '驾驶证',
					up: '上传驾驶证照片',
					src: null,
					state: 1,
					isup:false
				}, {
					name: '行驶证正面',
					up: '上传行驶证照片',
					src: null,
					state: 1,
					isup:false
				}, {
					name: '行驶证车辆页',
					up: '上传行驶证副本照片',
					src: null,
					state: 1,
					isup:false
				}, {
					name: '车辆45度照片',
					up: '拍摄车辆45度照片',
					src: null,
					state: 1,
					isup:false
				}, {
					name: '道路运输许可证）',
					up: '上传道路运输许可证',
					src: null,
					state: 1,
					isup:false
				}, {
					name: '个人照片',
					up: '拍摄个人照片',
					src: null,
					state: 0,
					isup:false
				}, ],
				model: {
					idFrontPath: "",
					idReversPath: "",
					driverLicensePath: "",
					drivingFrontPath: "",
					drivingLicensePath: "",
					vehiclePath: "",
					permisePath: "",
					driverPhoto: ''
				}
			}

		},
		methods: {
			// 是否带车加入
			change(e) {
				console.log('change', e);
				
				if (e == false) {
					this.fileData = this.data.filter(item => {
						return item.state !== 1
					})
				this.cont=0
				} else {
					this.fileData = this.data
					this.cont=1
				}
			},
			// 点击上传
			upload(index) {
				this.show = true
				this.currentPhoto = index
				// 点击上传时判断是否已经上传过
				var that = this;
				this.fileData.forEach(async(item,inde)=>{
					if(inde==index){
						if(item.src==null){
							uni.chooseImage({
								count: 1,
								sizeType: ['original', 'compressed'],
								success: (res) => {
									// console.log('path', res.tempFilePaths);
									const tempFilePaths = res.tempFilePaths //图片临时数组
									let obj = {
										file: tempFilePaths[0]
									}
									utils.AuploadFile(obj).then(res => {
										console.log('data', res.data.url)
										if (res.code == 200) {
											// console.log(12);
											// that.isup=res.data.url
											that.fileData.forEach((item, ind) => {
												if (index == ind) {
													item.isup=true
													item.src = res.data.url
												}
											})
											
										}
									})
							
								}
							})
						}else{
						console.log(12,item.src);
							let delData=await uni.$http.api.fleet.fileDel(item.src)
							console.log('del',delData);
							uni.chooseImage({
								count: 1,
								sizeType: ['original', 'compressed'],
								success: (res) => {
									// console.log('path', res.tempFilePaths);
									const tempFilePaths = res.tempFilePaths //图片临时数组
									let obj = {
										file: tempFilePaths[0]
									}
									utils.AuploadFile(obj).then(res => {
										console.log('data', res.data.url)
										if (res.code == 200) {
											// console.log(12);
											// that.isup=res.data.url
											that.fileData.forEach((item, ind) => {
												if (index == ind) {
													item.isup=true
													item.src = res.data.url
												}
											})
										}
									})
							
								}
							})
						}
					}
				})
				

			},
			open() {
				// console.log('open');
			},
			close() {
				this.show = false
				// console.log('close');
			},

			// 跳转确认信息--OCR识别数据带过去
			confirm() {
				uni.navigateTo({
					url: '/subPackages/driver/confirm/confirm?cont='+this.cont
				})
			}
		},
		components: {
			Header
		},
		onLoad(option) {
			//接收跳转过来的参数
			this.fileData = this.data
			console.log(option);
			console.log('base', config.baseUrl);
		},
		onUnload() {
			// 跳转之后删除本地文件信息
			this.fileData.forEach(async(item,ind)=>{
				if(item.src!==null||item.src!==''){
					let delData=await uni.$http.api.fleet.fileDel(item.src)
					console.log('del',delData);
				}
			})
		}
	}
</script>

<style lang="scss" scoped>
	.franchise {
		display: flex;
		flex-direction: column;
		width: 100%;
		box-sizing: border-box;
		background-color: #F6F6F6;

		.main {
			.stept {}

			.upload {
				width: 100%;
				border-radius: 40upx 40upx 0 0;
				background-color: #FFFFFF;
				box-sizing: border-box;
padding-bottom: 60rpx;
				.title {
					font-size: 34upx;
					font-weight: 900;
					font-family: PingFang SC;
					padding: 40upx;
					color: #202020;
				}

				.cell {
					width: 92%;
					height: 80upx;
					margin: 0upx auto;
					display: flex;
					justify-content: space-between;
					align-items: center;
					box-sizing: border-box;
					padding-left: 40upx;
					font-size: 28upx;
					font-family: PingFang SC;
					color: #666666;
					background-color: #F9F9F9;
					border-radius: 40upx;
				}

				.tag {
					font-size: 22upx;
					font-family: PingFang SC;
					color: #ED575E;
					text-align: center;
					box-sizing: border-box;
					padding: 30upx 0;
				}

				.photo {
					display: flex;
					flex-wrap: wrap;
					justify-content: space-around;
					align-items: center;

					.photo_item {
						width: 320upx;
						height: 200upx;
						margin: 30upx auto;
						border-radius: 10upx;

						.tit {
							text-align: center;
							color: #444444;
							font-size: 28upx;
							font-family: PingFang SC;
							font-weight: 900;
							margin: 10upx 0upx;
						}

						.contain {

							.image {
								width: 100%;
								height: 160upx;
								background-color: #F9F9F9;
								display: flex;
								justify-content: center;
								align-items: center;
								
								.xiangji {
									width: 64upx;
									height: 50upx;
								}
								.filePhoto{
									width: 100%;
									height: 100%;
								}
							}

							.down {
								width: 100%;
								height: 40upx;
								background-color: #B6B6B6;
								color: #FFFFFF;
								font-size: 22upx;
								font-family: PingFang SC;
								text-align: center;
								line-height: 40upx;
							}
						}
					}
				}

			}
		}

		.btn {
			width: 100%;
			position: fixed;
			bottom: 0;

			button {
				width: 92%;
				margin: 0 auto;
			}
		}

	}
</style>