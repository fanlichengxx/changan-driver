<template>
	<view class="cityList paddTopheder">
		
		<Header title="城市列表" />
		
		<u-index-list :index-list="indexList">
			<template v-for="(item, index) in itemArr">
				<!-- #ifdef APP-NVUE -->
				<u-index-anchor :text="indexList[index]"></u-index-anchor>
				<!-- #endif -->
				<u-index-item>
					<!-- #ifndef APP-NVUE -->
					<u-index-anchor :text="indexList[index]"></u-index-anchor>
					<!-- #endif -->
					<view class="list-cell" v-for="(cell, index) in item">
						{{cell}}
					</view>
				</u-index-item>
			</template>
		</u-index-list>
	</view>
</template>

<script>
	import Header from '@/components/header/header.vue'
	export default {
		name: "cityList",
		data() {
			return {
				indexList: ["A", "B", "C"],
				itemArr: [
					['列表A1', '列表A2', '列表A3'],
					['列表B1', '列表B2', '列表B3'],
					['列表C1', '列表C2', '列表C3']
				]
			};
		},
		components: {
			Header
		}
	}
</script>

<style lang="scss" scoped>
	.cityList {
		height: 100vh;
		background-color: #fff;
		display: flex;
		flex-direction: column;

		.addresBox {
			flex: 1;
		}
	}
</style>
