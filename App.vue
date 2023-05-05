<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')

		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";

	// 设置整个项目的背景色
	page {
		background-color: #F7F9FB;
	}

	view,
	text {
		// font-family: 'Arial Normal', 'Arial', sans-serif;
		font-family: PingFang SC-Bold;
	}

	.orderMap {
		/deep/.u-icon__icon {
			span {
				margin-top: 5upx;
			}
		}
	}

	.orderMap13 {
		/deep/.u-icon__icon {
			span {
				margin-top: 6upx;
			}
		}
	}

	.padd-top {
		padding-top: 88upx;
		box-sizing: border-box;
	}

	.paddTopheder {
		padding-top: calc(var(--status-bar-height) + 44px);
		box-sizing: border-box;
	}
</style>
