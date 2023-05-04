// 手机号前三后四显示处理
function getPhone(val) {
	let str = val + ''
	let arr1 = str.split('')
	let arr2 = []
	for (let i = 0; i < arr1.length; i++) {
		if (i < 3 || i > arr1.length - 5) {
			arr2.push(arr1[i])
		} else {
			arr2.push('*')
		}
	}
	let str1 = arr2.join('')
	return str1
}
export default {
	getPhone
}
