<template>

	<view class="message paddTopheder" >

		<Header title="消息中心" name="" rightIcon="全部已读" @rightClick="rightClick" />
		<view class="cell">
			<u-cell-group >
				<u-cell icon='../../static/tabBar/fuw1.png'  title="服务通知" 
				:titleStyle="{color:'#202020',fontSize:'32upx',marginTop:'20upx',fontWeight:'900'}"
				:iconStyle="{marginTop:'20upx',width:'60upx',height:'60upx',marginRight:'30upx'}"
				:rightIconStyle="{marginTop:'20upx'}"
				 class="cell_item"
				 size='large'
				 :border='false'
				 label='订单退款成功'
				 :labelStyle="{color:'#999999',fontSize:'26upx'}"
				 :clickable='false'
				 isLink @click="jump(0)">
				</u-cell>
				<u-cell icon='../../static/tabBar/youhui1.png'  title="优惠活动"
				:titleStyle="{color:'#202020',fontSize:'32upx',marginTop:'20upx',fontWeight:'900'}"
				:iconStyle="{marginTop:'20upx',width:'60upx',height:'60upx',marginRight:'30upx'}"
				:rightIconStyle="{marginTop:'20upx'}"
				 class="cell_item"
				 size='large'
				 :border='false'
				 label='暂无消息'
				:labelStyle="{color:'#999999',fontSize:'26upx'}"
				 isLink >
				</u-cell>
				<u-cell icon='../../static/tabBar/kefu1.png'  title="在线客服"
				 :titleStyle="{color:'#202020',fontSize:'32upx',marginTop:'20upx',fontWeight:'900'}"
				 :iconStyle="{marginTop:'20upx',width:'60upx',height:'60upx',marginRight:'30upx'}"
				 :rightIconStyle="{marginTop:'20upx'}"
				 class="cell_item"
				 size='large'
				 :border='false'
				 label='暂无消息'
				 :labelStyle="{color:'#999999',fontSize:'26upx'}"
				 isLink>
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
			jump(e){
				let url = ''
				switch(e){
					case 0:
					url='/pages/message/serviceReminder/serviceReminder';
					break;
				}
				uni.navigateTo({
					url
				})
			},
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
		background-color:#FFFFFF ;
		.cell{
			width: 100%;
			background-color:#FFFFFF ;
			margin: 20upx auto;
			border-radius: 10upx;
			.cell_item{
				height: 120upx;
				
			}
		}
		

	}
</style>