<template>
	<view>
		<Header title="法律条款" fontSize="36rpx" color="#202020" :fanhui="true" />
		<u-cell-group class="cell">
			<!-- 传入url可跳转 -->
			<u-cell class="cell_item" :border="false" :rightIconStyle="{'color':'#999999'}"
				:titleStyle="{'color':'#666666','fontSize':'28rpx'}" title="长安民生货运服务协议" :isLink="true"></u-cell>
			<view class="divider"></view>
			<u-cell class="cell_item" :border="false" :rightIconStyle="{'color':'#999999'}"
				:titleStyle="{'color':'#666666','fontSize':'28rpx'}" title="长安民生货运服务协议" :isLink="true"></u-cell>
			<view class="divider"></view>
			<u-cell class="cell_item" :border="false" :rightIconStyle="{'color':'#999999'}"
				:titleStyle="{'color':'#666666','fontSize':'28rpx'}" title="长安民生货运服务协议" :isLink="true"></u-cell>

		</u-cell-group>
	</view>
</template>

<script>
	import Header from '@/components/header/header.vue'
	export default {
		data() {
			return {

			}
		},
		methods: {

		},
		components: {
			Header
		}
	}
</script>

<style lang="scss" scoped>
	.cell {
		margin-top: 88rpx;
		background-color: #fff;

		/deep/ .u-cell__body {
			height: 100rpx;
			padding: 0 60rpx 0 40rpx;

			&:last-child {}
		}

		.divider {
			width: 710rpx;
			height: 1rpx;
			background: #EEEEEE;
			margin-left: auto;
		}
	}
</style>