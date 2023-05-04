<template>
	<view class="addAddress paddTopheder">
		<Header :title="this.uForm.id?'编辑地址':'添加地址'" :rightIcon="this.uForm.id?'删除':''" @rightClick="rightClick" />
		<view class="addressBox">
			<view class="tishi">
				*根据监管要求，需要搜集您的详细地址用于货运运输
			</view>
			<view class="address">
				<view class="left">
					<view class="name">
						{{uForm.name}}
					</view>
					<view class="xiangxi">
						{{uForm.address}}
					</view>
				</view>
				<view class="right" @click="changeOfAddress()">
					更改地址
				</view>
			</view>
			<view class="jianjie">
				<u--form labelPosition="left" :model="uForm" :rules="rules" ref="uForm"
					:labelStyle="{'font-weight': 600,}" labelWidth="60">
					<u-form-item label="门牌号" prop="detail">
						<u--input v-model="uForm.detail" border="bottom" placeholder="请输入门牌号"></u--input>
					</u-form-item>
					<u-form-item label="联系人" prop="contact">
						<u-input v-model="uForm.contact" border="bottom" placeholder="联系人姓名">
							<template slot="suffix">
								<view class="orderMap tongxun">
									通讯录<u-icon name="arrow-right" size="10px" color="" style="margin-left:6upx;">
									</u-icon>
								</view>
							</template>
						</u-input>
					</u-form-item>
					<u-form-item label="手机号" prop="phone">
						<u--input v-model="uForm.phone" border="bottom" placeholder="请输入手机号"></u--input>
					</u-form-item>
					<u-form-item label="标签" prop="tag">
						<u--input v-model="uForm.tag" border="bottom" placeholder="可自定义标签,最多7个字符"></u--input>
					</u-form-item>
					<view class="tags">
						<view class="tag" v-for="(item,index) in tags" :key="index" @click="xuanzhong(item)"
							:class="{'xuanzhong':xuanzhongTag(item)}">
							{{item}}
						</view>
					</view>
				</u--form>
			</view>

		</view>
		<view class="bt">
			<u-button color="#02A7F0" text="保存" @click="onsubmit()"></u-button>
		</view>
	</view>
</template>

<script>
	import Header from '@/components/header/header.vue'
	var Contacts
	export default {
		data() {
			return {
				uForm: {
					id: '',
					tags: [],
				},
				list: [],
				rules: {
					phone: [{
						required: false,
						message: '请输入正确的格式',
						pattern: this.$regExp.numberPhone3,
						trigger: ['change', 'blur']
					}],
				},
				tags: ['物流', '仓库', '店铺'],
			};
		},
		methods: {
			//标签选中
			xuanzhong(item) {
				let index = this.uForm.tags.indexOf(item)
				if (index != -1) {
					this.uForm.tags.splice(index, 1)
				} else {
					this.uForm.tags.push(item)
				}
			},
			// 处理标签颜色
			xuanzhongTag(val) {
				let k = false
				this.uForm.tags.forEach(value => {
					if (value == val) {
						k = true
					}
				})
				return k
			},
			//获取地址详情
			async get_addr_detail() {
				const {
					data: res
				} = await uni.$http.api.address.get_addr_detail({
					id: this.uForm.id
				})
				if (res.code === 200) {
					res.data.tags = res.data.tags.split(',')
					this.uForm = res.data
				}
			},
			// 右侧删除按钮
			async rightClick() {
				//删除地址
				await uni.$http.api.address.del_addr_detail({
					id: this.uForm.id
				})
				uni.navigateBack()
			},
			//保存
			onsubmit() {
				this.$refs.uForm.validate().then(res => {
					if (res) {
						if (this.uForm.name) {
							const da = JSON.parse(JSON.stringify(this.uForm))
							da.tags = da.tags + ''
							this.save_addr_book(da)

						} else {
							uni.$showMsg('请选择地址')
						}
					}
				})
			},
			//添加编辑地址
			async save_addr_book(da) {
				const {
					data: res
				} = await uni.$http.api.address.save_addr_book(da)
				console.log(res);
				uni.navigateTo({
					url: '/subPackages/order/addressBook/addressBook'
				})
			},
			//更改地址
			changeOfAddress() {
				uni.navigateTo({
					url: '/subPackages/order/searchMap/searchMap'
				})
			},
		},
		onLoad(option) {
			if (option.id) {
				this.uForm.id = option.id
				this.get_addr_detail()
			}
		},
		components: {
			Header
		},
	}
</script>

<style lang="scss" scoped>
	.addAddress {
		height: 100vh;
		display: flex;
		flex-direction: column;


		.addressBox {
			box-sizing: border-box;
			padding: 20upx;

			.tishi {
				margin-bottom: 20upx;
				margin-left: 20upx;
				font-size: 24upx;
				color: #949494;
			}

			.address {
				display: flex;
				align-items: center;
				box-sizing: border-box;
				padding: 30upx 30upx;
				background-color: #fff;
				border-radius: 16upx;

				.left {
					flex: 1;
					display: flex;
					flex-direction: column;

					.name {
						color: #000000;
						font-size: 28upx;
						flex: 1;
						font-weight: 600;
					}

					.xiangxi {
						flex: 1;
						margin-top: 16upx;
						color: #949494;
						font-size: 24upx;
						overflow: hidden;
						text-overflow: ellipsis;
						-webkit-line-clamp: 1;
						display: -webkit-box;
						-webkit-box-orient: vertical;
					}
				}

				.right {
					margin-left: 20upx;
					border-radius: 8upx;
					box-sizing: border-box;
					padding: 10upx 20upx;
					color: #00A0E9;
					border: 2upx solid #00A0E9;
					font-size: 24upx;
				}
			}

			.jianjie {
				margin-top: 20upx;
				box-sizing: border-box;
				padding: 20upx 30upx;
				background-color: #fff;
				border-radius: 16upx;

				.tongxun {
					display: flex;
					color: #02A7F0;
					font-size: 24upx;
				}

				.tags {
					box-sizing: border-box;
					padding-left: 120upx;
					display: flex;
					flex-wrap: wrap;

					.tag {
						margin-bottom: 20upx;
						border-radius: 8upx;
						border: 2upx solid #dadada;
						font-size: 24upx;
						padding: 6upx 16upx;
						margin-right: 20upx;
					}

					.xuanzhong {
						color: #00A0E9;
						border: 2upx solid #00A0E9;
					}
				}
			}
		}

		.bt {
			position: fixed;
			bottom: 0upx;
			box-sizing: border-box;
			padding: 0upx 60upx 60upx;
			width: 100%;
		}
	}
</style>
