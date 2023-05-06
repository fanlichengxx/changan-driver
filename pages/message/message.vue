<template>

	<view class="message paddTopheder">
		<Header title="消息中心" fontSize="36rpx" color="#FFFFFF" bgColor="rgba(0, 160, 233, 1)" :name="false"
			rightColor="#FFF" :fanhui="false" rightIcon="全部已读" @rightClick="rightClick" />
		<view class="cell">
			<u-cell-group>
				<u-cell :icon="require('../../static/tabBar/fuw1.png')" title="服务通知"
					:titleStyle="{color:'#202020',fontSize:'32rpx',marginTop:'20rpx',fontWeight:'bold',fontFamily: 'PingFang-SC-Bold'}"
					:iconStyle="{marginTop:'20rpx',width:'60rpx',height:'60rpx',marginRight:'30rpx'}"
					:rightIconStyle="{marginTop:'20rpx'}" class="cell_item" size='large' :border='false' label='订单退款成功'
					:labelStyle="{color:'#999999',fontSize:'26rpx'}" isLink>
				</u-cell>
				<!-- 分割线 -->
				<view class="divider"></view>
				<u-cell :icon="require('../../static/tabBar/youhui1.png')" title="优惠活动"
					:titleStyle="{color:'#202020',fontSize:'32rpx',marginTop:'20rpx',fontWeight:'bold',fontFamily: 'PingFang-SC-Bold'}"
					:iconStyle="{marginTop:'20rpx',width:'60rpx',height:'60rpx',marginRight:'30rpx'}"
					:rightIconStyle="{marginTop:'20rpx'}" class="cell_item" size='large' :border='false' label='暂无消息'
					:labelStyle="{color:'#999999',fontSize:'26rpx'}" isLink>
				</u-cell>
				<!-- 分割线 -->
				<view class="divider"></view>
				<u-cell :icon="require('../../static/tabBar/kefu1.png')" title="在线客服"
					:titleStyle="{color:'#202020',fontSize:'32rpx',marginTop:'20rpx',fontWeight:'bold',fontFamily: 'PingFang-SC-Bold'}"
					:iconStyle="{marginTop:'20rpx',width:'60rpx',height:'60rpx',marginRight:'30rpx'}"
					:rightIconStyle="{marginTop:'20rpx'}" class="cell_item" size='large' :border='false' label='暂无消息'
					:labelStyle="{color:'#999999',fontSize:'26rpx'}" isLink>
				</u-cell>

			</u-cell-group>
		</view>
	</view>
</template>

<script>
	import Header from '@/components/header/header.vue'
	export default {
		data() {
			return {
				options: [{}, {}]
			}
		},
		methods: {
			rightClick() {},
		},
		created() {

		},
		onShow() {
			// uni.setTabBarBadge({ //显示红点 
			// 	index: 2,
			// 	text: '99'
			// })
		},
		components: {
			Header
		}
	}
</script>

<style lang="scss" scoped>
	.message {
		height: calc(100vh - var(--window-bottom));
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;

		.cell {
			width: 750rpx;
			height: 420rpx;
			background-color: #fff;
			margin: 20rpx 0;

			.divider {
				width: 620rpx;
				height: 1rpx;
				background-color: #EEEEEE;
				margin-left: auto;
			}

			.cell_item {
				font-family: PingFang-SC-Bold;

			}
		}


	}
</style>