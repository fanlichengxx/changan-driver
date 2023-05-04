import App from './App'
import Vue from 'vue'
// import '@/utils/TIM.js'
Vue.config.productionTip = false
App.mpType = 'app'

import store from './store'
Vue.prototype.$store = store
import regExp from './utils/regExp.js'
Vue.prototype.$regExp = regExp
// 导入网络请求的包
import $http from '@/api/index.js'
import filters from "@/utils/filters.js";
uni.$http = $http

import uView from 'uview-ui'
Vue.use(uView)
// 如此配置即可
// uni.$u.setConfig({
// 	// 修改$u.config对象的属性
// 	config: {
// 		// 修改默认单位为rpx，相当于执行 uni.$u.config.unit = 'rpx'
// 		unit: 'rpx'
// 	},
// 	// 修改$u.props对象的属性
// 	props: {
// 		// 修改radio组件的size参数的默认值，相当于执行 uni.$u.props.radio.size = 30
// 		radio: {
// 			size: 28
// 		}
// 	}
// })

// 封装弹框的方法
uni.$showMsg = function(title = '数据请求失败！', duration = 1500) {
	uni.showToast({
		title,
		duration,
		icon: 'none'
	})
}

//全局注册过滤器
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key]);
});

const app = new Vue({
	...App,
	store
})
app.$mount()

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
