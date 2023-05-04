import {
	$http
} from '@escook/request-miniprogram'
export default {
	owner_login(data) { //司机登录接口
		return $http.post('/auth/driver_login', data)
	},
	send_login_sms(data) { //登录短信接口
		return $http.post('/auth/sms/send_login_sms', data)
	},
}
