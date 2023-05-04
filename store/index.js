import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import users from '@/store/modules/users.js'
import order from '@/store/modules/order.js'
import tim from '@/store/modules/tim.js'
import address from '@/store/modules/address.js'
const store = new Vuex.Store({
	getters: {
		token: state => state.users.token
	},

	//引入子模块
	modules: {
		users,
		order,
		tim,
		address
	}
})
export default store
