// pages/equip/equipmsg/equipmsg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classItem: ["综合楼101", "综合楼102","综合楼103","综合楼104"],
    classData:[
      { id: "1", name: "综合楼101"},
      { id: "2", name: "综合楼102" },
      { id: "3", name: "综合楼103" },
      { id: "4", name: "综合楼104" }
    ],
    index: 0,

    equipsingledata:{
      id: "1",
      label: "设备1",
      classroom: "综合楼101",
      state:true,
      checked: false
    }
  },
  //绑定教室
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  //设备开关
  openclose(){
    wx.showModal({
      title: '提示',
      content: '更改设备状态？',
      confirmText: "开机",
      cancelText: "关机",
      success: function (res) {
        console.log(res);
        if (res.confirm) {
          console.log('开机')
          wx.showToast({
            title: '开机中',
            icon: 'loading',
            duration: 3000
          });
        } else {
          wx.showToast({
            title: '关机中',
            icon: 'loading',
            duration: 3000
          });
        }
      }
    });
  },
  changeClass(){
    
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