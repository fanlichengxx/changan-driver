export default {
	namespaced: true,
	state: () => ({
		token: uni.getStorageSync('token') || '',
		userinfo: JSON.parse(uni.getStorageSync('userinfo') || '{}'),
		cont:0
	}),
	mutations: {
		setToken(state, data) {
			state.token = data
			uni.setStorageSync('token', data)
		},
		removeToken(state) {
			state.token = ''
			uni.removeStorageSync('token')
		},
		setUserinfo(state, data) {
			state.userinfo = data
			uni.setStorageSync('userinfo', JSON.stringify(data))
		},
		removeUserinfo(state) {
			state.userinfo = ''
			uni.removeStorageSync('userinfo')
		},
	},
	actions: {

	}
}
