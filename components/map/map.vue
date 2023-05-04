<!-- 地图 -->
<template>
	<view class="mapBox">
		<map :style="{width:width+'px',height:height+'px'}" :latitude="latitude" :longitude="longitude"
			:markers="markersArr" :min-scale="minScale" :scale="scale" @regionchange="tabmd" :show-location="true"
			:id="ids" :ref="ids" :controls='controls'>
		</map>
	</view>
</template>

<script>
	var aMapFun
	var amapFile = require('../../utils/map.js')
	export default {
		props: {
			width: {
				typeof: Number,
				default: 300
			},
			height: {
				typeof: Number,
				default: 300
			},
			//最小缩放比例
			minScale: {
				typeof: Number,
				default: 5,
			},
			// 默认缩放比例
			scale: {
				typeof: Number,
				default: 10,
			},
			ids: {
				typeof: String,
				default: 'mapId1',
			},
			map: {
				typeof: String,
				default: 'map1',
			},
			//中心纬度
			latitude: {
				typeof: Number,
				default: 39.909,
			},
			//中心经度
			longitude: {
				typeof: Number,
				default: 116.39742,
			},
			//地图上的标记点
			markers: {
				typeof: Array,
				default: [{
					latitude: 39.909,
					longitude: 116.39742
				}],
			},
			index: null,
		},
		data() {
			return {
				controls: []
			};
		},
		methods: {
			tabmd(val) {
				if (val.type === 'end') {
					console.log(val);
					this.$emit('update:latitude', val.target.centerLocation.latitude) //中心纬度
					this.$emit('update:longitude', val.target.centerLocation.longitude) //中心经度
					// console.log(this.$refs[this.ids]);

					console.log(aMapFun);
					aMapFun.getRegeo({
						location: val.target.centerLocation.longitude + ',' + val.target.centerLocation.latitude,
						success: function(data) {
							//成功回调
							console.log(data)
						},
						fail: function(info) {
							//失败回调
							console.log(info)
						}
					})
				}
			}
		},
		created() {
			this.controls = [{
				// id: this.index,
				position: {
					left: this.width / 2 - 6,
					top: this.height / 2 - 32,
					width: 25,
					height: 42
				},
				iconPath: this.index === 1 ? '/static/order/xie.png' : '/static/order/fa.png',
			}]
			aMapFun = new amapFile.AMapWX({
				key: '6c98368c15d758bb7219ae045177a057'
			});
		},
		watch: {
			markersArr: {
				handler(val) {
					// console.log(val);
				},
				immediate: true,
				deep: true
			}
		},
		computed: {
			markersArr() {
				if (this.markers.length == 0) return []
				return this.markers.map(val => {
					return {
						latitude: val.latitude,
						longitude: val.longitude,
						iconPath: val.iconPath ? val.iconPath : '../../static/tabBar/huihua.png',
					}
				})
			}
		}
	}
</script>
<style lang="scss">

</style>
<style lang="scss" scoped>
	.mapBox {
		width: 100%;
		box-sizing: border-box;
		background: #fff;
	}
</style>
