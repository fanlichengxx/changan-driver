<template>
	<u-navbar :title="title" @leftClick="leftClick" @rightClick="rightClick" :autoBack="false" :bgColor="bgColor"
		:titleStyle="{'font-weight': 600,'font-size':fontSize,'color':color,'font-family': 'PingFang SC-Bold'}">
		<view class="u-nav-slot" slot="left">
			<u-icon :name="name" :size="size" :bold="true" :color="color" v-if="name"></u-icon>
		</view>
		<view class="u-nav-slot" slot="right" v-if="rightIcon"
			:style="{'font-size': '28upx','font-weight': 500,'color':rightColor}">
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
			//中间文本字体大小
			fontSize: {
				typeof: String,
				default: 18
			},

			//左侧图标
			name: {
				typeof: String,
				default: 'arrow-left'
			},
			//图标字体大小
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
			},
			//右侧字体颜色
			rightColor: {
				typeof: String,
				default: '#000'
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