export default {
	namespaced: true,
	state: () => ({
		addressList: [], //地址薄列表

	}),
	mutations: {
		//修改地址薄
		getAddressList(state, data) {
			state.addressList = data
		},
	},
	actions: {
		//获取地址薄地址
		async search_addr_book(context, data) {
			const {
				data: res
			} = await uni.$http.api.address.search_addr_book(data)
			if (res.success) {
				context.commit('getAddressList', res.data)
			}
		}
	}
}
