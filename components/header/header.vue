<template>
	<u-navbar :title="title" @leftClick="leftClick" @rightClick="rightClick" :autoBack="false" :bgColor="bgColor"
		:titleStyle="{'font-weight': 600,'color':color,'font-family': 'PingFang SC-Bold'}">
		<view class="u-nav-slot" slot="left">
			<u-icon :name="name" :size="size" :bold="true" :color="color" v-if="name"></u-icon>
		</view>
		<view class="u-nav-slot" slot="right" v-if="rightIcon"
			style="font-size: 28upx;font-weight: 500;letter-spacing: 1upx">
			{{rightIcon}}
		</view>
	</u-navbar>
</template>

<script>
	export default {
		props: {
			//中间文本
			title: {
				typeof: String,
				default: ''
			},
			//左侧图标
			name: {
				typeof: String,
				default: 'arrow-left'
			},
			//字体大小
			size: {
				typeof: Number,
				default: 18
			},
			//背景颜色
			bgColor: {
				typeof: String,
				default: '#fff'
			},
			//左侧返回标签是否存在
			fanhui: {
				typeof: Boolean,
				default: true
			},
			// 中间字体颜色
			color: {
				typeof: String,
				default: '#000'
			},
			//右侧按钮
			rightIcon: {
				typeof: String,
				default: ''
			}
		},
		data() {
			return {

			};
		},
		methods: {
			leftClick() {
				if (this.fanhui) {
					uni.navigateBack()
				} else {
					this.$emit('leftClick')
				}
			},
			rightClick() {
				this.$emit('rightClick')
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
