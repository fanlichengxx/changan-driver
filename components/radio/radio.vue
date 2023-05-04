<template>
	
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
			
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
