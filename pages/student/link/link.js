var app = getApp();
// pages/student/link/link.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    unitname:"请选择班级",
    link:"",
    students: [
      {
        id: "1",
        label: "小明",
        imgUrl: "../../../img/person.png",
        link: ""
      },
      {
        id: "2",
        label: "小红",
        imgUrl: "../../../img/person.png",
        link: ""
      },
      {
        id: "3",
        label: "李雷",
        imgUrl: "../../../img/person.png",
        link: ""
      },
      {
        id: "4",
        label: "韩梅梅",
        imgUrl: "../../../img/person.png",
        link: ""
      },
    ],

    units: ['一年级一班', '二年级一班', '三年级一班', '四年级一班'],
    index: 0,
  },
  studentClick(e){
    app.globalData.student_msg=e.target.id
    wx.navigateTo({
      url: this.data.link,
    })
  },
  //picker上拉框
  chooseunit: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value,
      unitname: this.data.units[e.detail.value]
    });

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    switch (options.name){
      case "homework":
      this.setData({
        link:"../homework/homework"
      })
      break;
      case "gate":
        this.setData({
          link: "../gate/gate"
        })
        break;
      case "studentmsg":
        this.setData({
          link: "../studentmsg/studentmsg"
        })
        break;
      case "score":
        this.setData({
          link: "../score/score"
        })
        break;  
    }
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