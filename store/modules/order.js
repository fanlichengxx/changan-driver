export default {
	namespaced: true,
	state: () => ({
		orderDetails: {
			ownerType: 1, //1个人用车  2企业用车
			vehicleTypeId: null, //车辆类型id
			norms: [], //车型标签
		}, //订单详情地址等信息
		addressList: [{}, {}], //地址详情
		order: {
			description: '', //下单备注描述
			tags: '', //,分隔
			moveHouse: false, //是否搬家
		}
	}),
	mutations: {
		//车类型修改
		setOrderDetails(state, data) {
			state.orderDetails = data
		},
		//修改用车类型
		setOwnerType(state, data) {
			state.orderDetails.ownerType = data
		},
		// 修改车辆id
		setVehicleTypeId(state, data) {
			state.orderDetails.vehicleTypeId = data
		},
		// 修改车辆标签
		setNorms(state, data) {
			state.orderDetails.norms = data
		},
		//修改地址
		setAddressList(state, data) {
			state.addressList = data
		},
		// 添加地址
		addAddressList(state, data) {
			state.addressList.push(data)
		},
		// 删除或修改地址某个指定地址
		deleteAddressList(state, {
			index,
			data
		}) {
			if (data) {
				state.addressList.splice(index, 1, data)
			} else {
				state.addressList.splice(index, 1)
			}
		},
		//交换地址
		exchangeAddressList(state, index) {
			let adlist = JSON.parse((JSON.stringify(state.addressList)))
			let da = adlist[index - 1]
			let da2 = adlist[index]
			adlist[index - 1] = da2
			adlist[index] = da
			state.addressList = adlist
		},
		setRemarks(state, data) {
			state.description = data.description
			state.tags = data.tags
			state.moveHouse = data.moveHouse
		}
	},
	actions: {

	}
}
