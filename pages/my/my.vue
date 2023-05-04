<template>
	<view class="my">
		<view class="header">
			
			<view class="userBox">
				<u-avatar src="../../static/tabBar/tou.png" :size="54"></u-avatar>
				<view class="user">
					<view class="top">
						<text class="word">未设置</text>
						<image src="../../static/tabBar/yirenzheng.png"></image>
					</view>
					<view class="down">
						重庆长安凯诚智行车队
					</view>
				</view>
			</view>
		</view>
		<view class="main">
			<view class="left">
				<view class="top">100</view>
				<view class="down">我的积分</view>
			</view>
			<view class="right">
				<view class="top">90%</view>
				<view class="down">准点率</view>
			</view>
		</view>
		<view class="contain">
			<view class="left">
				当前使用车辆
			</view>
			<view class="right">
				{{number}}
			</view>
		</view>
		<view class="cell">
			<u-cell-group >
				<u-cell icon='../../static/tabBar/cheliang.png'  title="车辆管理" 
				 :titleStyle="{color:'#666666',fontSize:'28upx',marginLeft:'20upx',marginTop:'20upx'}"
				 :iconStyle="{marginTop:'20upx'}"
				 :rightIconStyle="{marginTop:'20upx'}"
				 class="cell_item"
				 size='large'
				 :border='false'
				 isLink @click='management(0)'>
				</u-cell>
				<u-cell icon='../../static/tabBar/chedui.png'  title="车队管理"
				 :titleStyle="{color:'#666666',fontSize:'28upx',marginLeft:'20upx',marginTop:'20upx'}"
				 :iconStyle="{marginTop:'20upx'}"
				 :rightIconStyle="{marginTop:'20upx'}"
				 class="cell_item"
				 size='large'
				 :border='false'	
				 isLink  @click='management(1)'>
				</u-cell>
				<u-cell icon='../../static/tabBar/dingdan.png'  title="我的订单"
				 :titleStyle="{color:'#666666',fontSize:'28upx',marginLeft:'20upx',marginTop:'20upx'}"
				 :iconStyle="{marginTop:'20upx'}"
				 :rightIconStyle="{marginTop:'20upx'}"
				 class="cell_item"
				 size='large'
				 :border='false'
				 isLink>
				</u-cell>
				<u-cell icon='../../static/tabBar/falv.png'  title="法律条款"
				 :titleStyle="{color:'#666666',fontSize:'28upx',marginLeft:'20upx',marginTop:'20upx'}"
				 :iconStyle="{marginTop:'20upx'}"
				 :rightIconStyle="{marginTop:'20upx'}"
				 class="cell_item"
				 size='large'
				 :border='false'
				 isLink>
				</u-cell>
				<u-cell icon='../../static/tabBar/kefu.png'  title="客服中心"
				 :titleStyle="{color:'#666666',fontSize:'28upx',marginLeft:'20upx',marginTop:'20upx'}"
				 :iconStyle="{marginTop:'20upx'}"
				 :rightIconStyle="{marginTop:'20upx'}"
				 class="cell_item"
				 size='large'
				 :border='false'
				 isLink>
				</u-cell>
				<u-cell icon='../../static/tabBar/shezhi.png'  title="设置"
				 :titleStyle="{color:'#666666',fontSize:'28upx',marginLeft:'20upx',marginTop:'20upx'}"
				 :iconStyle="{marginTop:'20upx'}"
				 :rightIconStyle="{marginTop:'20upx'}"
				 class="cell_item"
				 size='large'
				 :border='false'
				 isLink>
				</u-cell>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: '',
				number:'渝A 666666'
			}
		},
		methods: {
management(e){
	let url = ''
	switch(e){
		case 0:
		url='/pages/my/carManage/carManage';
		break;
		case 1:
		url='/pages/my/fleetManage/fleetManage';
		break;
	}
	uni.navigateTo({
		url
	})
}
		}
	}
</script>

<style lang="scss" scoped>
	.my {
		display: flex;
		flex-direction: column;
		width: 100%;
		// height: calc(100vh - 100upx);
		height: calc(100vh - var(--window-bottom));
		box-sizing: border-box;
		padding-top: calc(var(--status-bar-height) + 260upx);
		// overflow: scroll;
		background-color:#F6F6F6 ;
		.header {
			background-color: #00A0E9;
			color: #fff;
			height: 319upx;
			width: 100%;
			position: fixed;
			top: var(--status-bar-height);
			z-index: 9;
			box-sizing: border-box;
			padding: 0upx 30upx;

			.icon {
				margin-top: 20upx;
				display: flex;
				justify-content: flex-end;
			}

			.userBox {
				display: flex;
				align-items: center;
				height: 112upx;
				margin-left: 20upx;
				margin-top: 97upx;
				
				.user {
					padding-left: 30upx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-content: space-between;

					.top{
						font-size: 32upx;
						image{
							width: 90upx;
							height: 36upx;
							margin-left: 30upx;
						}
					}

					.down{
							font-size: 24upx;
					}
				}
			}
		}
		.main{
			width: 92%;
			height: 161upx;
			display: flex;
			justify-content: space-around;
			align-items: center;
			background-color:#FFFFFF ;
			margin: 0 auto;
			border-radius: 10upx;
			z-index: 10;
			
			.left,.right{
				.top{
					font-size: 50upx;
					color: #202020;
				}
				.down{
					font-size: 24upx;
					color: #999999;
				}
			}
		}
		.contain{
			width: 92%;
			height: 120upx;
			display: flex;
			justify-content: space-around;
			align-items: center;
			background-color:#FFFFFF ;
			margin: 20upx auto;
			border-radius: 10upx;
			
			font-size: 28upx;
			.left{
				
			}
			.right{
				color:#00A0E9;
			}
		}
		.cell{
			width: 92%;
			background-color:#FFFFFF ;
			margin: 20upx auto;
			border-radius: 10upx;
			.cell_item{
				height: 120upx;
				
			}
		}

		
	}
</style>
