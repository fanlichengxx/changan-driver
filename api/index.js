import {
	$http
} from '@escook/request-miniprogram'
import store from '@/store/index.js'
// 请求的根路径
$http.baseUrl = 'http://192.168.31.157'
// $http.baseUrl = 'http://192.168.0.131:8080'

// 请求拦截器
$http.beforeRequest = function(options) {
	uni.showLoading({
		title: '数据加载中...'
	})
	if (store.getters.token) {
		options.header = {
			Authorization: store.getters.token
		}
	}

}
// 响应拦截器
$http.afterRequest = function(error) {
	if (error.data.code !== 200) {
		uni.showToast({
			title: error.data.msg,
			duration: 1500,
			icon: 'none'
		})
	}
	uni.hideLoading()
}

const modulesFiles = require.context('@/api/modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
	// set './app.js' => 'app'
	const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
	const value = modulesFiles(modulePath)
	modules[moduleName] = value.default
	return modules
}, {})

$http['api'] = modules


export default $http
