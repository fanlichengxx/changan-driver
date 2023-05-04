import {
	$http
} from '@escook/request-miniprogram'

export default {
	search_addr_book(data) { //获取地址薄
		return $http.get('/account/cargo_owner/info/search_addr_book', data)
	},
	get_vehicle_model_list(data) { //获取车辆类型列表
		return $http.get('/account/vehicle/get_vehicle_model_list', data)
	},
	get_addr_detail(data) { //获取地址详细信息
		return $http.get('/account/cargo_owner/info/get_addr_detail', data)
	},
	save_addr_book(data) { //保存编辑地址
		return $http.post('/account/cargo_owner/info/save_addr_book', data)
	},
	del_addr_detail(data) { //删除地址
		return $http.delete('/account/cargo_owner/info/del_addr_detail', data)
	},
}
