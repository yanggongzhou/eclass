const requestServers = require('../../api/api.js')
// pages/login/login.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    password:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //提示信息
  showTopTips: function () {
    var that = this;
    this.setData({
      showTopTips: true
    });
    setTimeout(function () {
      that.setData({
        showTopTips: false
      });
    }, 3000);
  },
  //提交登录信息
  signIn(){
    let self = this;
    requestServers.login({
      username:this.data.username,
      password:this.data.password
    }).then((res)=>{
      console.log("接口数据："+res);
    })
  },
  //用户名密码
  bindusernameInput(e) {
    this.setData({
      username: e.detail.value
    })
  },
  bindpasswordInput(e){
    this.setData({
      password: e.detail.value
    })
  }
})