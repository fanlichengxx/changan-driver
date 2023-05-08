<template>
	<view>
		<!-- fanhui左侧返回 是否存在 -->
		<Header title="我的订单" fontSize="36rpx" color="#202020" :fanhui="true" />
		<view class="divider"></view>
		<u-tabs class="tabs" lineHeight="6rpx" :list="list" @click="click" :scrollable="false" lineColor="#00A0E9"
			:current="current" :activeStyle="{
            color: '#00A0E9'}" :inactiveStyle="{
            color: '#666666'}"></u-tabs>
		<view class="content">
			<!-- circular 是否采用衔接滑动，即播放到末尾后重新回到开头 -->
			<swiper class="swiper" :current="current" @change="currentChange" :circular="false" :duration="300"
				style="height: 100vh;padding-bottom: 50rpx;" id="topPosition">

				<swiper-item>
					<!-- 进行中 -->
					<scroll-view class="swiper-item item" style="height: 100%;" scroll-y="true" :scroll-top="scrollTop"
						:id="'content-wrap' + 0">
						<view class="date_group">
							<text>2023年 3月</text>
							<view class="iconfont icon-below-s"></view>
						</view>
						<view class="orderInfo" v-for="item in 1">
							<view class="icon_group">
								<view class="iconBlock">搬</view>
								<view class="iconBlock">承</view>
								<view class="iconBlock">摄</view>
							</view>
							<view class="orderDate">
								<view class="iconfont icon-shijian"></view>
								<text>10月31日 11:36</text>
							</view>
							<view class="address">
								<view class="address_item">
									<image src="@/static/carType/zhuang.png" mode="widthFix"></image>
									<text>中国邮政银行</text>
								</view>
								<view class="address_item">
									<image src="@/static/carType/unload2.png" mode="widthFix"></image>
									<text>金源大道砚北B区</text>
								</view>
							</view>
						</view>

					</scroll-view>

				</swiper-item>

				<swiper-item>
					<scroll-view class="swiper-item item" style="height: 100%;" scroll-y="true" :scroll-top="scrollTop"
						:id="'content-wrap' + 1">
						<view class="date_group">
							<text>2023年 3月</text>
							<view class="iconfont icon-below-s"></view>
						</view>
						<view class="orderInfo" v-for="item in 2">
							<view class="icon_group">
								<view class="iconBlock">搬</view>
								<view class="iconBlock">承</view>
								<view class="iconBlock">摄</view>
							</view>
							<view class="orderDate">
								<view class="iconfont icon-shijian"></view>
								<text>10月31日 11:36</text>
							</view>
							<view class="address">
								<view class="address_item">
									<image src="@/static/carType/zhuang.png" mode="widthFix"></image>
									<text>中国邮政银行</text>
								</view>
								<view class="address_item">
									<image src="@/static/carType/unload2.png" mode="widthFix"></image>
									<text>金源大道砚北B区</text>
								</view>
							</view>
						</view>

						<!-- 2月 -->
						<view class="date_group">
							<text>2023年 2月</text>
							<view class="iconfont icon-below-s"></view>
						</view>
						<view class="orderInfo">
							<view class="icon_group">
								<view class="iconBlock">搬</view>
								<view class="iconBlock">承</view>
								<view class="iconBlock">摄</view>
							</view>
							<view class="orderDate">
								<view class="iconfont icon-shijian"></view>
								<text>10月31日 11:36</text>
							</view>
							<view class="address">
								<view class="address_item">
									<image src="@/static/carType/zhuang.png" mode="widthFix"></image>
									<text>中国邮政银行</text>
								</view>
								<view class="address_item">
									<image src="@/static/carType/unload2.png" mode="widthFix"></image>
									<text>金源大道砚北B区</text>
								</view>
							</view>
						</view>
					</scroll-view>

				</swiper-item>
				<swiper-item>
					<scroll-view class="swiper-item item" :id="'content-wrap' + 2" style="height: 100%;"
						:scroll-top="scrollTop" scroll-y="true">
						<view class="date_group">
							<text>2023年 3月</text>
							<view class="iconfont icon-below-s"></view>
						</view>
						<view class="orderInfo" v-for="item in 6">
							<view class="icon_group">
								<view class="iconBlock">搬</view>
								<view class="iconBlock">承</view>
								<view class="iconBlock">摄</view>
							</view>
							<view class="orderDate">
								<view class="iconfont icon-shijian"></view>
								<text>10月31日 11:36</text>
							</view>
							<view class="address">
								<view class="address_item">
									<image src="@/static/carType/zhuang.png" mode="widthFix"></image>
									<text>中国邮政银行</text>
								</view>
								<view class="address_item">
									<image src="@/static/carType/unload2.png" mode="widthFix"></image>
									<text>金源大道砚北B区</text>
								</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>




		</view>
	</view>
</template>

<script>
	import Header from '@/components/header/header.vue'

	export default {
		data() {
			return {
				items: ['进行中', '已完成', '已取消'],
				current: 0,
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				contentTopOffset: 98, //滑块区域距离顶部距离 默认98
				swiperHeight: 0, //滑块高度
				list: [{
					name: '进行中',
				}, {
					name: '已完成',
				}, {
					name: '已取消'
				}],


			}
		},
		methods: {

			click(item) {
				this.current = item.index
			},
			currentChange(e) {
				this.goTop()

				// 用户触摸滑动切换时,更新data中的current
				this.current = e.detail.current
				//动态设置swiper的高度，使用nextTick延时设置
				this.$nextTick(() => {
					this.setSwiperHeight();
				});

			},
			goTop: function(e) {
				// 解决view层不同步的问题
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				console.log(this.scrollTop);
			},
			setSwiperHeight() {
				let element = "#content-wrap" + this.current;
				let query = uni.createSelectorQuery().in(this);
				query.select(element).boundingClientRect(data => {
					console.log("得到布局位置信息" + JSON.stringify(data));
					console.log("节点离页面顶部的距离为" + data.top);
				}).exec();


				query.exec((res) => {
					if (res && res[0]) {
						// 当滑块高度没有一屏高时,要保证滑块有一屏高
						//可以获取手机信息uni.getSystemInfo（）

						this.swiperHeight = res[0].height;
					}

				});

			},
		},
		components: {
			Header
		},
		onLoad(args) {
			//动态设置swiper的高度
			this.$nextTick(() => {
				this.setSwiperHeight();
			});
		},
	}
</script>

<style lang="scss" scoped>
	.divider {
		height: 2rpx;
		width: 750rpx;

		background-color: #eee;
	}

	.tabs {
		width: 750rpx;
		height: 88rpx;
		margin-top: 88rpx;
		background-color: #fff;
		position: fixed;
		top: 0rpx;
		z-index: 600;

	}

	.content {
		padding: 0 20rpx;
		width: 750rpx;
		margin-top: 176rpx;



		.swiper {
			width: 100%;
			flex: 1;
		}



		.item {
			width: 710rpx;




			&.swiper-item {
				width: 710rpx;
			}

			// 订单分类 月份时间
			.date_group {
				color: #888888;
				font-size: 24rpx;
				padding: 28rpx 0 29rpx 30rpx;
				display: flex;
				align-items: center;

				>.icon-below-s {
					color: #888888;
					font-size: 20rpx;
					padding-left: 20rpx;
				}
			}

			//订单信息
			.orderInfo {
				background-color: #fff;
				width: 710rpx;
				border-radius: 20rpx;
				padding: 35rpx 40rpx 30rpx;
				box-sizing: border-box;
				margin-bottom: 20rpx;

				&:last-child {
					margin-bottom: 0rpx;
				}




				//订单信息_图标
				>.icon_group {
					display: flex;

					>.iconBlock {
						background-color: #F7B364;
						height: 40rpx;
						width: 40rpx;
						font-size: 24rpx;
						line-height: 40rpx;
						text-align: center;
						border-radius: 10rpx;
						color: #fff;
						margin-right: 10rpx;

						&:nth-child(2) {
							background-color: #53A9F9;
						}

						&:nth-child(3) {
							background-color: #F0737C;
						}
					}

				}

				//订单信息_下单时间
				.orderDate {
					display: flex;
					align-items: center;
					margin: 33rpx 0 29rpx;

					>.icon-shijian {
						font-size: 25rpx;
						margin-right: 20rpx;
					}

					>text {
						color: #999999;
						font-size: 24rpx;
					}
				}

				//订单信息_装 卸 地址
				.address {
					>.address_item {
						display: flex;
						align-items: center;
						margin-bottom: 25rpx;


						&:last-child {
							margin-bottom: 0rpx;
						}

						>image {
							width: 50rpx;
							height: 50rpx;
							margin-right: 20rpx;
						}

						>text {
							font-size: 30rpx;
							color: #202020;
							font-weight: bold;

						}
					}


				}

			}








		}
	}
</style>