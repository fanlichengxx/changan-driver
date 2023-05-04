import TIM from 'tim-wx-sdk';
export default {
	namespaced: true,
	state: () => ({
		friendList: [], //好友列表
		messageList: [], //消息列表
		nextReqMessageID: '', //续拉ID
		isCompleted: false, //表示是否已经拉完所有消息
	}),
	mutations: {
		//修改好友列表
		updateFriendList(state, data) {
			state.friendList = data
		},
		//修改续拉ID
		getNextReqMessageID(state, data) {
			state.nextReqMessageID = data
		},
		//修改消息列表
		getMessageList(state, data) {
			state.messageList = data
		},
		//修改是否已经拉完所有消息
		getCompleted(state, data) {
			state.isCompleted = data
		},
	},
	actions: {
		//获取消息列表
		getMessageList(context, data) {
			TIM.getMessageList({
				conversationID: `C2C${data.user}`,
				nextReqMessageID: context.state.nextReqMessageID, //首次拉去不传入
			}).then(imResponse => {
				context.commit('getMessageList', imResponse.data.messageList) // 消息列表。
				context.commit('getNextReqMessageID', imResponse.data.nextReqMessageID) // 用于续拉，分页续拉时需传入该字段。
				context.commit('getCompleted', imResponse.data.isCompleted)
				// 表示是否已经拉完所有消息。isCompleted 为 true 时，nextReqMessageID 为 ""。
			})
		},
		//删除对话
		deleteConversation(context, data) {
			TIM.deleteConversation('C2CExample').then(imResponse => {

			})
		},
		//获取好友列表
		getFriendList(context, data) {
			TIM.getFriendList().then(imResponse => {
				context.commit('updateFriendList', imResponse.data)
			}).catch(error => {
				uni.$showMsg({
					title: '获取好友列表失败'
				})
			})
		},
		// 修改个人标配资料
		updateMyProfile(context, data) {
			TIM.updateMyProfile({
				nick: '', //名称
				avatar: '', //头像
				gender: TIM.TYPES.GENDER_UNKNOWN,
				allowType: TIM.TYPES.ALLOW_TYPE_ALLOW_ANY
			}).then(() => {

			})
		},

	}
}
