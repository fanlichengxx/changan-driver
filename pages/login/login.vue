<template>
	<view class="loginBox paddTopheder">
		<Header name="close" @leftClick="leftClick()" :fanhui="false" />
		<view class="contentBox">
			<view class="title">
				欢迎登录
			</view>
			<!-- 手机号登录 -->
			<view class="cell_phone_number" v-if="loginType==='phone'">
				<u--form labelPosition="left" :model="form" :rules="rules" ref="uForm">
					<u-form-item prop="phone" borderBottom ref="phone">
						<u-input border="none" clearable :maxlength="11" v-model="form.phone" placeholder="请输入手机号"
							prefixIconStyle="font-size: 22px;color: #909399;margin-right:20upx;">
							<template slot="prefix">
								<!-- <u-icon name="chat" color="#2979ff" size="28"></u-icon> -->
								<view class="numberqian">
									<text>+86</text>
									<view class="hr"></view>
								</view>
							</template>
						</u-input>
					</u-form-item>
				</u--form>
				<u-button type="primary" text="获取验证码" class="authority" @tap="$u.throttle(phoneCode(), 500)">
				</u-button>
			</view>
			<!-- 一键登录 -->
			<view class="Onekey" v-if="authority&&loginType==='yijian'">
				<view class="phone">
					{{form.phone|getPhone}}
				</view>
				<u-button type="primary" text="本机号码一键登录" class="authority" @tap="$u.throttle(yijianLogin(), 1000)">
				</u-button>
			</view>
			<!-- 协议 -->
			<view class="agree_onBox">
				<u-checkbox-group v-model="agreeOn" :labelSize="14" :size="14">
					<view class="agreeOn">
						<u-checkbox shape="circle" label='我已阅读并同意' :labelSize="14" name="1" />
						<view>《同城货运用户协议》</view>
						<view>《隐私政策》</view>
						<view>《{中国移动}认证服务条款》</view>
					</view>
				</u-checkbox-group>

			</view>
		</view>
		<view class="loginType">
			<view class="typeBox" @tap="$u.throttle(loginTypeMD('wx'), 1000)" v-if="loginType!=='wx'">
				<u-avatar src="../../static/login/vx.png"></u-avatar>
				<view class="text">
					微信登录
				</view>
			</view>
			<view class="typeBox" @tap="$u.throttle(loginTypeMD('phone'), 1000)" v-if="loginType!=='phone'">
				<u-avatar src="../../static/login/phone.png"></u-avatar>
				<view class="text">
					手机号登录
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Header from '@/components/header/header.vue'
// import loginVue from './login.vue'
	export default {
		data() {
			return {
				authority: true,
				form: {
					phone: '15215135746'
				},
				rules: {
					phone: [{
						required: true,
						message: '请输入正确的格式',
						pattern: this.$regExp.numberPhone3,
						trigger: ['change', 'blur']
					}]
				},
				agreeOn: [],
				loginType: 'yijian'
			}
		},
		methods: {
			//切换类型
			loginTypeMD(val) {
				// console.log(111)
				this.loginType = val
			},
			//获取验证码
			phoneCode() {
				if (this.agreeOn.length) {
					this.$refs.uForm.validate().then(async val => {
						if (val) {
							const {
								data: res
							} = await uni.$http.api.users.send_login_sms(this.form)
							if (res.code == 200) {
								uni.navigateTo({
									url: '/subPackages/login/phoneCode/phoneCode?phone=' + this.form.phone
								})
								
							}
						}
					}).catch(error => {})
				} else {
					uni.$showMsg({
						title: '请勾选用户隐私政策'
					})
				}
			},
			leftClick() {
				uni.switchTab({
					url: '/pages/getOrder/getOrder'
				})
			},
			yijianLogin() {
				if (this.agreeOn.length) {

				} else {
					uni.$showMsg({
						title: '请勾选用户隐私政策'
					})
				}
			}
		},
		components: {
			Header
		},
		mounted() {
			console.log(this.$store.users.state.cont,'aaa')
		}
	}
</script>

<style lang="scss" scoped>
	$martop:20%;

	.loginBox {
		background-color: #fff;
		height: 100vh;

		.contentBox {
			width: 100%;
			height: 80%;
			box-sizing: border-box;
			padding: 40upx 30upx;
			// background-color: red;

			.title {
				margin-left: 60upx;
				font-size: 36upx;
			}

			.cell_phone_number {
				margin-top: $martop;

				.numberqian {
					display: flex;
					align-items: center;
					font-size: 30upx;


					.hr {
						margin-left: 30upx;
						margin-right: 16upx;
						height: 28upx;
						border-right: 2upx solid #ccc;
					}
				}

			}

			.authority {
				margin-top: 60upx;
				width: 90%;
			}

			.Onekey {
				margin-top: $martop;
				display: flex;
				flex-direction: column;
				align-items: center;

				.phone {
					font-size: 42upx;
				}
			}

			.agree_onBox {
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				margin-top: 40upx;

				.u-checkbox-group--row {
					width: 100%;
				}

				.agreeOn {
					width: 100%;
					display: flex;
					flex-wrap: wrap;
					line-height: 42upx;

					view {
						color: #02A7F0;
						font-size: 28upx;
					}
				}
			}
		}

		.loginType {
			display: flex;
			justify-content: space-around;

			.typeBox {
				display: flex;
				flex-direction: column;
				align-items: center;

				.text {
					margin-top: 10upx;
				}
			}
		}
	}
</style>
