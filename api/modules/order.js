import {
	$http
} from '@escook/request-miniprogram'
export default {
	calculate_amount(data) { //计算当前订单金额
		return $http.post('/order/calculate_amount', data)
	},
}
