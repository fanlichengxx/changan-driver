<template>
	<view class="addressBook paddTopheder">
		<Header title="地址薄" />
		<view class="search">
			<u-search placeholder="搜索地址、姓名、电话、标签等" v-model="keyword" :showAction="false" bgColor="#F7F9FB"
				@blur="searchMD()"></u-search>
		</view>
		<view class="contentBox">
			<view class="address" v-for='(item,i) in list'>
				<view class="left">
					<view class="title" style="display: flex;align-items: cneter;">
						<view>{{item.name}}</view>
						<image src="@/static/order/xiugai.png" mode="aspectFill"
							style="width: 39rpx;height: 39rpx;margin-left: 10rpx;" @click="deleteddress(item)"></image>
					</view>
					<view class="xiangxi">
						{{item.cunt}}
					</view>
				</view>
				<view class="right" v-if="item.isShow==1" @click="toIshow(item.isShow,i)">
					<image src="@/static/order/duiquan.png" mode="aspectFill" style="width: 39rpx;height: 39rpx;">
					</image>
				</view>
				<view class="rightquan" v-else @click="toIshow(item.isShow,i)">
				</view>
			</view>
		</view>

		<view class="bt">
			<u-button color="#02A7F0" text="添加地址" @click="selectClick"></u-button>
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
						name: '重庆光环购物公园',
						cunt: '重庆市渝北区金开大道1003号',
						isShow: 0
					},
					{
						name: '重庆光环购物公园',
						cunt: '重庆市渝北区金开大道1003号',
						isShow: 1
					},
					{
						name: '重庆光环购物公园',
						cunt: '重庆市渝北区金开大道1003号',
						isShow: 0
					}
				],
				show: false,
				index: null,
				keyword: '',
			};
		},
		methods: {
			//是否为常用路线
			toIshow(e,i){
				if(e==1){
					this.list[i].isShow=0
				}else{
					this.list[i].isShow=1
				}
			},
			// ...mapMutations('order', ['deleteAddressList']),
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

				uni.navigateTo({
					url: '/subPackages/order/addAddress/addAddress'
				})

			}
		},
		computed: {
			// ...mapState('address', ['addressList'])
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
	.rightquan {
		width: 34rpx;
		height: 34rpx;
		border-radius: 100%;
		border: 1rpx solid #949494;
	}

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
					width: 36rpx;
					height: 36rpx;
				}
			}
		}

		.bt {
			padding: 0upx 40upx 40upx;
		}
	}
</style>