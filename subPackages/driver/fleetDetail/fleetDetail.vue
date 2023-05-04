<template>
	<view>
		<!-- 导航栏 -->
		<u-navbar title="车队详情" :fixed="true" titleStyle="color:rgba(32, 32, 32, 1);font-size:36rpx;font-weight:bold"
			leftIconColor="rgba(32, 32, 32, 1)" leftIconSize="40rpx" :autoBack="true" :placeholder="true"
			height="88rpx">
		</u-navbar>
		<!-- 车队栏 -->
		<view class="fleetInfo">
			<image class="picture" src="@/static/carType/fleetPic.png">

			</image>
			<view class="info_group">
				<text class="fleetName">长安凯程智行车队</text>

				<text class="fleetProps">面向车型：小面、中面</text>
				<view class="call">
					<view class="iconfont icon-dianhua">
					</view>
				</view>
			</view>
		</view>
		<!-- 详细信息 -->
		<view class="detailInfo">
			<text class="title">详细信息</text>
			<view class="formBox">
				<uni-forms class="formStyle" label-width="180rpx" ref="form" :modelValue="formData" :rules="rules">
					<uni-forms-item label="所在地区" name="area">
						<input class="input" type="text" v-model="formData.area" placeholder="请选择地区">
					</uni-forms-item>
					<uni-forms-item label="地址" name="address">
						<input class="input" v-model="formData.address" type="text" placeholder="请输入地址" />
					</uni-forms-item>
					<uni-forms-item label="服务范围" name="address">
						<input class="input" v-model="formData.scope" type="text" placeholder="请选择服务范围" />
					</uni-forms-item>
					<uni-forms-item label="联系人" name="address">
						<input class="input" v-model="formData.contacts" type="text" placeholder="请输入联系人" />
					</uni-forms-item>
					<uni-forms-item label="电话" name="address">
						<input class="input" v-model="formData.phone" type="text" placeholder="请输入电话号码" />
					</uni-forms-item>
				</uni-forms>
			</view>
		</view>

		<button class="btn" @click="submit('form')">加入车队</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 表单数据
				formData: {
					area: '重庆市/渝北区', //所在地区
					address: '重庆市渝北区杨柳路8号', //地址
					scope: '重庆市及周边', //服务范围
					contacts: '王小强', //联系人
					phone: '13612345678' //电话
				},
				rules: {
					// 对area字段进行必填验证
					area: {
						rules: [{
							required: true,
							errorMessage: '所在地区不能为空',
						}]
					},
					// 对address字段进行必填验证
					address: {
						rules: [{
							required: true,
							errorMessage: '地址不能为空',
						}]
					},
					// 对scope字段进行必填验证
					scope: {
						rules: [{
							required: true,
							errorMessage: '服务范围不能为空',
						}]
					},
					// 对contacts字段进行必填验证  联系人
					contacts: {
						rules: [{
							required: true,
							errorMessage: '联系人不能为空',
						}]
					},
					// 对contacts字段进行必填验证  联系人
					phone: {
						rules: [{
							required: true,
							errorMessage: '电话不能为空'
						}, {
							validateFunction: function(rule, value, data, callback) {

							}
						}]
					}
				}
			}
		},
		methods: {
			submit(ref) {
				this.$refs[ref].validate().then(res => {
					console.log('success', res);
					uni.showToast({
						title: `校验通过`
					})
				}).catch(err => {
					console.log('err', err);
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	@import url("@/static/iconfont/iconfont.css");

	.fleetInfo {
		box-sizing: border-box;
		padding: 35rpx 50rpx;
		height: 170rpx;
		width: 750rpx;
		background-color: #fff;
		display: flex;
		margin: 10rpx 0 20rpx 0;



		>.picture {
			width: 100rpx;
			height: 100rpx;
			border-radius: 25rpx;
			margin-right: 20rpx;
			box-shadow: 0 0 1rpx 1rpx rgba(32, 32, 32, 1) inset;
		}

		>.info_group {
			display: flex;
			flex-direction: column;
			flex: 1;
			position: relative;

			>.fleetName {
				color: rgba(32, 32, 32, 1);
				font-size: 32rpx;
				font-weight: bold;
				margin-bottom: auto;
			}

			>.fleetProps {
				color: rgba(153, 153, 153, 1);
				font-size: 26rpx;
			}

			>.call {
				position: absolute;
				top: 50%;
				right: 0;
				transform: translateY(-50%);
				height: 80rpx;
				width: 80rpx;
				border-radius: 50%;
				background-color: rgba(246, 246, 246, 1);
				display: flex;
				align-items: center;
				justify-content: center;

				>.icon-dianhua {
					color: rgba(0, 160, 233, 1);
					font-size: 30rpx;

				}
			}
		}
	}

	.detailInfo {
		background-color: rgba(255, 255, 255, 1);
		width: 750rpx;
		padding: 45rpx 60rpx 80rpx 60rpx;
		box-sizing: border-box;

		>.title {
			color: #202020;
			font-size: 34rpx;
			font-weight: bold;
			display: block;
			margin-bottom: 80rpx; //修正 
		}

		>.formBox {

			>.formStyle {

				//样式穿透  左边label区域
				::v-deep .uni-forms-item__label {
					color: #444444 100%;
					font-size: 28rpx;
				}

				//样式穿透 右边输入区域
				::v-deep .uni-forms-item__content {
					display: flex;
					justify-content: flex-end;
					align-items: center;
				}
			}

			.input {
				text-align: right;
				color: #202020;
				font-size: 28rpx;
				display: flex;
				align-items: center;
			}


		}
	}

	.btn {
		background-color: #00A0E9;
		height: 110rpx;
		width: 650rpx;
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