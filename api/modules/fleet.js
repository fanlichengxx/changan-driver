import {
	$http
} from '@escook/request-miniprogram'
export default {
	getFleetList(data) { //车队信息列表
		return $http.get('/account/fleet/list', data)
	},
	getFleetDetails(data) { //车队详情
		return $http.get('/account/fleet/getDetails', data)
	},
	fileUpload(data){//司机文件上传
		return $http.post('/file/upload', data)
	},
	fileDel(data){
		return $http.delete('/file/delete/?url='+ data)
	}
}