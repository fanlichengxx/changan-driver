<template>
	<view class="box">
		<u-navbar title="车辆规格" :fixed="true" titleStyle="color:#202020;font-size:36rpx;font-weight:bold"
			:autoBack="true" :placeholder="true">
		</u-navbar>
		<view class="switch_group">
			<text>车厢是否为高顶</text>
			<u-switch inactiveColor="#CCCCCC" v-model="HighRoof"></u-switch>
		</view>
		<view class="card_box">
			<!-- 单选标签类型 -->
			<view class="card_group">
				<view class="card" v-for="(item,k) in singleData" :key="item.title">
					<view class="typeTitle">
						{{item.title}}
					</view>
					<view class="selectTag">
						<view :class="{tags:true,singleActive:index==singleData[k].singleTag}"
							v-for="(subItem,index) in item.tag" :key="subItem.name" @click="singleSelect(index,k)">
							{{subItem.name}}
						</view>
					</view>
				</view>
			</view>

			<!-- 混合选择标签类型 -->
			<view class="card_group">
				<view class="card" v-for="(item,k) in mixData" :key="item.title">
					<view class="typeTitle">
						{{item.title}}
					</view>
					<view class="selectTag">
						<view :class="{tags:true,singleActive:index==mixData[k].singleTag}"
							v-for="(subItem,index) in item.tag" :key="subItem.name" @click="mixSelect(index,k)">
							{{subItem.name}}
						</view>
					</view>
					<view class="addBox">
						<!-- 弹框上方尖角 -->
						<!-- :data-AngleIndex 存入当前选择序号mixData[k].singleTag,把值传入CSS变量计算偏移量left
						 //k值为 v-for="(item,k) in mixData"的K
						 -->
						<view class="sharpAngle" :style="{'--singleTag': mixData[k].singleTag}"></view>
						<view class="sub_selectTag">
							<view
								:class="{subTag:true,subTagActive:(item.tag[mixData[k].singleTag].subTag_Arr).includes(subIndex)}"
								@click="sub_checkedSelect(subIndex,k)"
								v-for="(minitem,subIndex) in item.tag[mixData[k].singleTag].subTag" :key="minitem.name">
								{{minitem.name}}
								<!-- 选中激活样式 右上角勾 -->
								<view class="activeGou"
									v-show="(item.tag[mixData[k].singleTag].subTag_Arr).includes(subIndex)">
									<image src="@/static/order/tag.png" mode="aspectFill" class="image"></image>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>

			<!-- 多选标签类型 -->
			<view class="card_group">
				<view class="card" v-for="(item,k) in typeData" :key="item.title">
					<view class="typeTitle">
						{{item.title}}
					</view>
					<!-- 多选标签 -->
					<view class="selectTag">
						<view @click="checkedSelect(index,k)"
							:class="{tags:true,tagActive:(typeData[k].tagArr).includes(index)}"
							v-for="(itemTag,index) in item.tag" :key="itemTag.name">
							{{itemTag.name}}
							<!-- 选中激活样式 右上角勾 -->
							<view class="activeGou" v-show="(typeData[k].tagArr).includes(index)">
								<u-icon class="iconGou" name="checkmark" color="#fff" size="8"></u-icon>
							</view>
						</view>
					</view>
				</view>

			</view>
		</view>



		<button class="btn">保存</button>





	</view>
</template>

<script>
	import Header from '@/components/header/header.vue'
	export default {
		data() {
			return {
				HighRoof: false, //车厢高顶开关是否开启 true高顶
				//单选标签数据
				singleData: [{
					title: '能源类型',
					tag: [{
						name: '新能源'
					}, {
						name: '燃油'
					}],
					singleTag: 0 //默认选择第一项
				}],
				//混合选择标签
				mixData: [{
					title: '货箱结构',
					mixSelect: true,
					tag: [{
							name: '箱式',
							subTag: [{
									name: '双排座'
								},
								{
									name: '开顶'
								},
								{
									name: '侧开门'
								},
								{
									name: '后双轮'
								},
								{
									name: '篷布'
								}
							],
							subTag_Arr: []
						},
						{
							name: '平板',
							subTag: [{
									name: '子标签1'
								},
								{
									name: '子标签2'
								},
								{
									name: '子标签3'
								},
							],
							subTag_Arr: []
						},
						{
							name: '高栏',
							subTag: [{
									name: '标签1'
								},
								{
									name: '标签2'
								},
								{
									name: '标签3'
								},
								{
									name: '标签4'
								},
								{
									name: '标签5'
								}
							],
							subTag_Arr: []
						}
					],
					singleTag: 0
				}],

				// 多选标签数据
				typeData: [{
					title: '车型',
					tag: [{
							name: '箱式',
						}, {
							name: '平板',
						},
						{
							name: '高栏',
						},
						{
							name: '飞翼车',
						},
						{
							name: '开顶',
						},
						{
							name: '侧板可拆',
						},
						{
							name: '冷藏车',
						}
					],
					tagArr: []
				}],



			}
		},
		methods: {
			singleSelect(i, k) {
				(this.singleData[k].singleTag) = i
				console.log('单选标签id' + i);
			},
			mixSelect(i, k) {
				(this.mixData[k].singleTag) = i

			},
			sub_checkedSelect(i, k) {
				//this.mixData[k].tag[this.mixData[k].singleTag].subTag_Arr 即 数组subTag_Arr

				if (this.mixData[k].tag[this.mixData[k].singleTag].subTag_Arr.includes(i)) {
					this.mixData[k].tag[this.mixData[k].singleTag].subTag_Arr = this.mixData[k].tag[this.mixData[k]
						.singleTag].subTag_Arr.filter(value => {
						return value != i
					})
				} else {
					(this.mixData[k].tag[this.mixData[k].singleTag].subTag_Arr).push(i)
					console.log(this.mixData[k].tag[this.mixData[k].singleTag].subTag_Arr);
				}
			},



			//多选标签事件
			checkedSelect(i, k) { //i为tagarr的序号  k为typedata数组序号
				//如果 tagArr数组里有 查找到了对应的序号i,找到返回true,没有返回false
				//
				if ((this.typeData[k].tagArr).includes(i)) {
					//逻辑 点击了标签,includes()在tagArr数组查找不到,返回false
					//返回true的话 执行下段语句,代表点击了高亮的标签,取消选择该标签,把存于tagArr数组里的序号去除,生成新的数组tagArr
					(this.typeData[k].tagArr) = (this.typeData[k].tagArr).filter(value => {
						return value != i
					})
					console.log('舍弃点击的标签id:' + i, (this.typeData[k].tagArr));
				} else {
					//实现点击标签,把标签序号,添加到tagArr数组,tagArr数组代表已高亮的标签
					//否则 一开始为空数组,点击标签必定为false,点了保留到新数组
					(this.typeData[k].tagArr).push(i)
					console.log('添加点击的标签id:' + i, (this.typeData[k].tagArr));
				}
			}
		},

	}
</script>

<style lang="scss" scoped>
	.box {
		position: relative;
		padding-bottom: 175rpx * 2;

	}



	.switch_group {

		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		padding: 46rpx 60rpx;
		border: 1px solid #eee;
		margin-bottom: 20rpx;

		>text {
			font-size: 28rpx;
			color: #666666;
		}
	}

	.card_group {
		padding-bottom: 20rpx;
		background-color: #fff;



		>.card {
			>.typeTitle {
				font-size: 17px;
				color: #202020;
				font-weight: bold;
				padding: 40rpx;
			}

			>.selectTag {
				display: flex;
				flex-wrap: wrap;
				padding-left: 60rpx;

				>.tags {
					width: 145rpx;
					height: 70rpx;
					line-height: 70rpx;
					background-color: #F6F6F6;
					margin-right: 17rpx;
					text-align: center;
					border-radius: 10rpx;
					color: #666666;
					font-size: 28rpx;
					border: 1rpx solid #fff;
					position: relative;
					overflow: hidden;

					&:nth-child(n+5) {
						margin-top: 20rpx;
					}
				}

				// 单选标签触发样式
				>.singleActive {
					background-color: #019FE8;
					color: #fff;
				}

				//多选标签触发样式
				>.tagActive {
					color: #579AA3;
					border: 1rpx solid #579AA3;
				}

				//触发样式 右上角勾
				.activeGou {
					width: 60rpx;
					height: 60rpx;
					position: absolute;
					right: -30rpx;
					top: -30rpx;
					background-color: #579AA3;
					border-radius: 50%;

					>.iconGou {
						position: absolute;
						left: calc(25% + 5rpx);
						top: 75%;
						transform: translate(-50%, -50%);
					}
				}
			}

			>.addBox {
				margin: 40rpx 40rpx 0rpx;
				background-color: #F6F6F6;
				width: 670rpx;
				height: 222rpx;
				border-radius: 10rpx;
				position: relative;

				>.sharpAngle {
					position: absolute;
					background-color: #F6F6F6;
					top: -15rpx;
					left: calc(20rpx + 145rpx / 2 + 165rpx * var(--singleTag));
					height: 30rpx;
					width: 30rpx;
					transform: translateX(-50%) rotate(45deg);
				}

				>.sub_selectTag {
					display: flex;
					flex-wrap: wrap;
					padding: 36rpx 0rpx 26rpx 20rpx;
					>.subTag {
						width: 145rpx;
						height: 70rpx;
						line-height: 70rpx;
						background-color: #fff;
						margin-right: 17rpx;
						text-align: center;
						border-radius: 10rpx;
						color: #666666;
						font-size: 28rpx;
						border: 1rpx solid #EEEEEE;
						position: relative;
						overflow: hidden;


						&:nth-child(4n) {
							margin-right: 0rpx;
						}

						&:nth-child(n+5) {
							margin-top: 20rpx;
						}

						//触发样式
						&.subTagActive {
							color: #579AA3;
							border: 1rpx solid #579AA3;
						}

						//触发样式 右上角勾
						.activeGou {
							width: 35rpx;
							height: 35rpx;
							position: absolute;
							right: -4%;
							top: -23%;

							 .image {
								width: 100%;
								height: 100%;
							}
						}

					}




				}



			}
		}
	}

	.btn {
		background-color: #00A0E9;
		height: 55rpx * 2;
		width: 335rpx * 2;
		text-align: center;
		line-height: 110rpx;
		color: #FFFFFF;
		font-size: 28rpx;
		position: absolute;
		left: 50%;
		transform: translate(-50%, 0);
		bottom: 88rpx;
	}
</style>