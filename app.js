
//app.js
App({
  //错误信息配置
  onError(msg) {
    console.log(msg)
  },
  onLaunch: function () {
    // let self = this
    // //获取屏幕像素高度px
    // wx.getSystemInfo({
    //   success(res) {
    //     self.globalData.windowHeight=res.windowHeight
    //   }
    // })


    // 网络情况,无网3sloding  
    wx.getNetworkType({
      success(res) {
        const networkType = res.networkType
        if (networkType === 'none') {
          wx.showToast({
            title: '当前无网络',
            icon: 'loading',
            duration: 3000
          })
        }
      }
    });
    //监听网络状态
    wx.onNetworkStatusChange(function (res) {
      if (!res.isConnected) {
        wx.showToast({
          title: '网络已断开',
          icon: 'loading',
          duration: 3000,
          complete: function () {
            // 页面跳转404
            // setTimeout(function () {
            //   wx.redirectTo({
            //     url: "/pages/404"
            //   })
            // }, 1000)
          }
        })
      } else {
        //隐藏模态框
        wx.hideToast()
      }
    });
    //为 tabBar 某一项的右上角添加文本
    wx.setTabBarBadge({
      index: 1,
      text: '8'
    })
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // console.log(res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    wx.getUserInfo({
      success: res => {
        console.log(res)
      }
      })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log(res.authSetting)
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    student_msg:null
  }
})