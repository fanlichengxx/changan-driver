<!-- 车队详情 -->
<template>
	<view class="fleetDetails paddTopheder">
		<Header title="车队详情" />
		<view class="phone">
			<view class="left">
				<image src="{details.src}"></image>
			</view>
			<view class="middle">
				<view class="top">{{details.fleetName}}</view>
				<view class="down">面向车型：{{details.vehicleType}}</view>
			</view>
			<view class="right" >
				<u-icon name="phone-fill" size="28" @click='callPhone'></u-icon>
			</view>
		</view>
		<view class="details">
			<view class="title">详细信息</view>
			<view class="details_box">
				<view class="name">
				所在地区	<text class="text">{{details.region}}</text>
				</view>
			</view>
			<view class="details_box">
				<view class="name">
				地址	<text class="text">{{details.address}}</text>
				</view>
			</view>
			<view class="details_box">
				<view class="name">
				服务范围	<text class="text"></text>
				</view>
			</view>
			<view class="details_box">
				<view class="name">
				联系人	<text class="text">{{details.dispatcherName}}</text>
				</view>
			</view>
			
			<view class="details_box">
				<view class="name">
				联系电话	<text class="text">{{details.dispatcherPhone}}</text>
				</view>
			</view>
		</view>
		<view class="btn">
			<button type="primary" @click="confirm">加入车队</button>
		</view>
	</view>
</template>

<script>
	import Header from '@/components/header/header.vue'
	export default {
		data() {
			return {
				fleetId:'',
				details:[]
			}
		},
		methods: {
			// 获取车队详情数据
			async getDetails(){
				let data={
					fleetId:this.fleetId
				}
				let res=await uni.$http.api.fleet.getFleetDetails(data)
				console.log('res',res.data);
				this.details=res.data.data
			},
			// 点击电话图标
			callPhone(){
				console.log('ring ring');
			},
			// 加入按钮
			confirm(){
				console.log('加入车队');
			}
		},
		components: {
			Header
		},
		onLoad(option) {
			//接收跳转过来的参数
			console.log(option);
			this.fleetId=option.fleetId
			this.getDetails()
		}
	}
</script>

<style lang="scss" scoped>
	.fleetDetails {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: calc(100vh - var(--window-bottom));
		box-sizing: border-box;
		background-color: #F6F6F6;
		position: relative;
		.phone {
			width: 100%;
			display: flex;
			justify-content: center;
			margin: 10upx auto;
			height: 165upx;
			background-color: #FFFFFF;
			.left {
				width: 20%;
				border: 1px solid red;
			}
			.middle {
				width: 50%;
				align-items: center;
				margin-left: 30upx;
				
				.top {
					font-size: 30upx;
					margin: 10upx auto;
				}
		
				.down {
					font-size: 26upx;
					color: #999999;
				}
			}
		
			.right {
				width: 30%;
				display: flex;
				justify-content: center;
				align-items: center;
				
			}
		}
		.details{
			width: 100%;
			margin: 30upx auto;
			background-color: #FFFFFF;
			box-sizing: border-box;
			.title{
				font-size: 34upx;
				font-weight: 900;
				font-family: PingFang SC;
				color: #202020;
				margin: 20upx;
			}
			.details_box{
				margin-left: 20upx;
				margin-top: 20upx;
				.name{
					font-size: 30upx;
					font-family: PingFang SC;
					color: #202020;
					
				}
				.text{
					font-size: 28upx;
					font-family: PingFang SC;
					color: #999999;
					margin-left: 20upx;
				}
			}
		}
		.btn{
			width: 100%;
			position: fixed;
			bottom: 0;
			button{
				width: 92%;
				margin: 0 auto;
			}
		}
	}
</style>