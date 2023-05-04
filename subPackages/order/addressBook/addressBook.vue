<template>
	<view class="addressBook paddTopheder">
		<Header title="地址薄" />
		<view class="search">
			<u-search placeholder="搜索地址、姓名、电话、标签等" v-model="keyword" :showAction="false" bgColor="#F7F9FB"
				@blur="searchMD()"></u-search>
		</view>
		<view class="contentBox">
			<view class="address" v-for="(item,index) in addressList" :key="index" @click="editAddressList(item)">
				<view class="left">
					<view class="title">
						{{item.name}}
					</view>
					<view class="xiangxi">
						{{item.address}}
					</view>
					<view class="userBox">
						<view class="name">
							{{item.contact}}
						</view>
						<view class="phone">
							{{item.phone|getPhone}}
						</view>
					</view>
				</view>
				<view class="right">
					<u-icon name="edit-pen" color="#222222 " size="28" @click.native.stop="deleteddress(item.id)">
					</u-icon>
				</view>
			</view>
		</view>
		<u-action-sheet :actions="list" :safeAreaInsetBottom="true" cancelText="取消" @close="show=false"
			@select="selectClick" :show=" show" />
		<view class="bt">
			<u-button color="#02A7F0" text="添加地址" @click="show=true"></u-button>
		</view>

	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import Header from '@/components/header/header.vue'
	export default {
		data() {
			return {
				list: [{
					name: '新增地址'
				}, {
					name: '导入历史地址'
				}],
				show: false,
				index: null,
				keyword: '',
			};
		},
		methods: {
			...mapMutations('order', ['deleteAddressList']),
			//编辑地址
			deleteddress(id) {
				uni.navigateTo({
					url: '/subPackages/order/addAddress/addAddress?id=' + id
				})
			},
			//选择地址修改
			editAddressList(data) {
				this.deleteAddressList({
					index: this.index,
					data
				})
				uni.switchTab({
					url: '/pages/index/index'
				})
			},
			//获取地址
			searchMD() {
				this.$store.dispatch('address/search_addr_book', {
					searchValue: this.keyword
				})
			},
			//添加地址按钮
			selectClick(val) {
				if (val.name === '新增地址') {
					uni.navigateTo({
						url: '/subPackages/order/addAddress/addAddress'
					})
				} else if (val.name === '导入历史地址') {

				}
			}
		},
		computed: {
			...mapState('address', ['addressList'])
		},
		components: {
			Header
		},
		onLoad(option) {
			this.searchMD()
			this.index = option.index
		}
	}
</script>

<style lang="scss" scoped>
	.addressBook {
		height: 100vh;
		display: flex;
		flex-direction: column;

		.search {
			box-sizing: border-box;
			padding: 20upx 20upx;
			background-color: #fff;
		}

		.contentBox {
			flex: 1;
			box-sizing: border-box;
			padding: 20upx 20upx 0upx 20upx;
			overflow-y: scroll;

			.address {
				margin-bottom: 20upx;
				background-color: #fff;
				border-radius: 12upx;
				box-sizing: border-box;
				padding: 20upx 30upx;
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.left {
					flex: 1;

					.title {
						font-size: 30upx;
						font-weight: 600;
					}

					.xiangxi {
						font-size: 24upx;
						color: #949494;
						margin: 20upx 0upx;
					}

					.userBox {
						font-size: 24upx;
						color: #949494;
						display: flex;

						.name {}

						.phone {
							margin-left: 20upx;
						}
					}
				}

				.right {
					width: 60upx;
				}
			}
		}

		.bt {
			padding: 0upx 40upx 40upx;
		}
	}
</style>
