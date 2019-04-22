// pages/myself/index.js
Page({
  /**
   *页面的初始数据
   */
  data: {
    imgUrls: [
      {
        link: '/pages/index/index',
        url: '../../img/school/1.jpg'
      }, {
        link: '/pages/list/list',
        url: '../../img/school/2.jpg'
      },
      {
        link: '/pages/index/index',
        url: '../../img/school/5.jpg'
      },
       {
        link: '/pages/list/list',
        url: '../../img/unit/4.jpg'
      },
      {
        link: '/pages/index/index',
        url: '../../img/unit/3.png'
      },
      {
        link: '/pages/index/index',
        url: '../../img/unit/5.jpg'
      }
    ],
  
    indicatorDots: true, //小点
    indicatorColor: "white",//指示点颜色
    activeColor: "coral",//当前选中的指示点颜色
    autoplay: true, //是否自动轮播
    interval: 3000, //间隔时间
    duration: 3000, //滑动时间
  },
  more(){
    wx.showToast({
      title: 'sorry,还没码到',
      icon: 'loading',
      duration: 3000
    });
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

  }
})