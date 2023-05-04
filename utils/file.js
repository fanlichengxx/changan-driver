// 上传文件
	import config from '@/api/index.js'
	import store from '@/store/index.js'
	console.log('baseUrl',config.baseUrl);
	const util={
		// 消息提示 弹框
		toast: function(text, duration, success) {
			//300 后执行  原因请求完成后0.3s执行uni.hideLoading()  会将showToast隐藏
			setTimeout(() => {
				uni.showToast({
					title: text || "出错啦~",
					icon: success ? 'success' : 'none',
					duration: duration || 2000,
					success: () => {}
				})
			}, 300)
		},
		// 文件上传
		AuploadFile: function(opts) {
			uni.showLoading({
				title: '请稍候...'
			})
			 return new Promise((resolve, reject) => {
				const uploadTask = uni.uploadFile({
					url: config.baseUrl + "/file/upload",
					filePath: opts.file,
					name: 'file',
					header: {
						'Authorization': store.getters.token,
					},
					success: function(res) {
						let data = JSON.parse(res.data)
						resolve(data)
						// console.log("res",data);
						uni.hideLoading()
						// if (res.code == 200) {
							 
						// 	console.log("res",data);
						// 	util.toast("上传成功");
						// } else {
						// 	util.toast("上传失败");
							
						// }
		
					},
		// 			fail: function(res) {
		// 				uni.hideLoading()
		
		// 				reject(res)
		// 				util.toast(res);
		// 			}
				})
			})
		}
	}
	
export default util