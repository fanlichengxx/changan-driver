<template>
	<view class="paddTopheder phoneCodeBox">
		<Header @leftClick='leftClick()' />
		<view class="phoneCode">
			<view class="title">请输入验证码</view>
			<view class="phone">
				验证码已发送至{{phone|getPhone}}
			</view>
			<view class="code">
				<u-code-input v-model="code" mode="line" :maxlength="6" @finish="finish"></u-code-input>
			</view>
			<view class="time" :class="{'chongTime':time===0}">
				<text @tap="$u.throttle(againCode(), 500)">重新获取{{time>0?`（${time}）`:''}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import Header from '@/components/header/header.vue'
	export default {
		data() {
			return {
				phone: '',
				code: '',
				time: 0,
				setInter: null,
			}
		},
		methods: {
			leftClick() {
				uni.navigateBack()
			},
			//验证码输入完成事件
			async finish() {
				const {
					data: res
				} = await uni.$http.api.users.owner_login({
					phone: this.phone,
					code: this.code
				})
				if (res.code == 200) {
					this.$store.commit('users/setToken', res.data.access_token)
					uni.switchTab({
						url: '/pages/getOrder/getOrder'
					})
				} else {
					this.code = ''
				}
			},
			timClick() {
				if (this.time === 0) {
					this.time = 60
					this.setInter = setInterval(() => {
						if (this.time > 0) {
							this.time--
						} else {
							clearInterval(this.setInter)
						}
					}, 1000)
				}
			},
			//重新获取手机号
			async againCode() {
				if (this.time === 0) {
					const {
						data: res
					} = await uni.$http.api.users.send_login_sms({
						phone: this.phone
					})
					if (res.code == 200) {
						this.timClick()
					}
				}
			},
		},
		onLoad(option) {
			this.phone = option.phone
			this.timClick()
		},
		components: {
			Header
		}
	}
</script>

<style lang="scss" scoped>
	.phoneCodeBox {
		height: 100vh;
		background-color: #fff;

		.phoneCode {
			padding: 40upx 30upx;

			.title {
				margin-left: 50upx;
				font-size: 44upx;
				color: #030303;
			}

			.phone {
				margin-top: 20upx;
				margin-left: 50upx;
				// color: #AAAAAA;
				color: #000000;
				font-size: 26upx;
			}

			.code {
				box-sizing: border-box;
				padding: 0upx 50upx;
				margin-top: 20%;
				width: 100%;

				.u-code-input {
					width: 100%;
					display: flex;
					justify-content: space-around;

				}
			}

			.time {
				margin-top: 50upx;
				margin-left: 62upx;
				color: #AAAAAA;
				font-size: 26upx;

			}

			.chongTime {
				color: #42b983;
				font-size: 26upx;
			}
		}
	}
</style>
