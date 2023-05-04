<!-- 司机加盟信息 -->
<template>
	<view class="confirm paddTopheder">
		<Header title="司机加盟-确认信息" />
		<view class="main">
			<!-- 司机信息 -->
			<view class="driver">
				<view class="title">司机信息</view>
				<u--form labelPosition="left" :model="driver" :rules="rules" ref="uForm" :labelStyle="{color:'#202020',marginLeft:'60upx',fontSize:'28upx'}">
					<u-form-item label="姓名" labelWidth='100'  prop="name" borderBottom ref="item1">
						<u--input v-model="driver.name" border="none"></u--input>
					</u-form-item>
					<u-form-item label="接单城市" labelWidth='100' prop="city" borderBottom @click="showSex = true; hideKeyboard()"
						ref="item1">
						<u--input v-model="driver.city" disabled disabledColor="#ffffff" placeholder="请选择"
							border="none"></u--input>
						<u-icon slot="right" name="arrow-right" class="icon"></u-icon>
					</u-form-item>
					<u-form-item label="司机电话" labelWidth='100' prop="driverPhone" borderBottom ref="item1">
						<u--input v-model="driver.driverPhone" border="none"></u--input>
					</u-form-item>
					<u-form-item label="准驾车型" labelWidth='100' prop="vehicleType" borderBottom @click="showType = true; hideKeyboard()"
						ref="item1">
						<u--input v-model="driver.vehicleType" disabled disabledColor="#ffffff" placeholder="请选择"
							border="none"></u--input>
						<u-icon slot="right" name="arrow-right" class="icon"></u-icon>
					</u-form-item>
				</u--form>
				<u-action-sheet :show="showCity" :actions="citys" title="请选择接单城市" 
					@close="showSex = false" @select="citySelect">
				</u-action-sheet>
				<u-action-sheet :show="showType" :actions="type" title="请选择车辆类型"
					@close="showSex = false" @select="typeSelect">
				</u-action-sheet>
			</view>
			<view class="vehcile">
				<view class="title">车辆信息</view>
			</view>
		</view>
		<view class="btn">
			<button type="primary" @click="confirm"> 提交</button>
		</view>

	</view>
</template>

<script>
	import Header from '@/components/header/header.vue'
	export default {
		data() {
			return {
				showCity: false,
				showType: false,
				driver: {
					name:'',
					city:'',
					vehicleType:'',
					driverPhone:''
				}
					
				,
				citys: [{name:'重庆',value:'cq'}],
				type:[{name:'小面',value:'c1'}],
				rules: {
					'name': {
						type: 'string',
						required: true,
						message: '请填写姓名',
						trigger: ['blur', 'change']
					},
					'city': {
						type: 'string',
						max: 1,
						required: true,
						message: '请选择接单城市',
						trigger: ['blur', 'change']
					},
					'driverPhone':{
								// 自定义验证函数，见上说明
								validator: (rule, value, callback) => {
									// 上面有说，返回true表示校验通过，返回false表示不通过
									// uni.$u.test.mobile()就是返回true或者false的
									return uni.$u.test.mobile(value);
								},
								message: '手机号码不正确',
								// 触发器可以同时用blur和change
								trigger: ['change','blur'],
							}
				},
				radio: '',
				switchVal: false

			}

		},
		methods: {
			citySelect(e) {
				this.model1.userInfo.sex = e.name
				this.$refs.uForm.validate('userInfo.sex')
			},


			// 提交按钮
			confirm() {
				console.log('提交', this.model);
			}
		},
		components: {
			Header
		},
		onLoad(option) {
			//接收跳转过来的参数
			console.log(option);

		}
	}
</script>

<style lang="scss" scoped>
	.confirm {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: calc(100vh - var(--window-bottom));
		box-sizing: border-box;
		background-color: #F6F6F6;
		.driver,.vehicle{
			width: 100%;
			margin-top: 10upx ;
			background-color: #FFFFFF;
			box-sizing: border-box;
			.title{
				font-size: 34upx;
				font-weight: 900;
				font-family: PingFang SC;
				color: #202020;
				padding-top: 40upx;
				padding-left: 60upx;
			}
			.icon{
				margin-right: 50upx;
			}
		}


	}
</style>