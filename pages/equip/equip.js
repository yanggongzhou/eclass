Page({
  data: {
    equipData: [
      {
        id:"1",
        label:"设备1",
        classroom:"综合楼101",
        state:true,
        checked: false
      },
      {
        id: "2",
        label: "设备2",
        classroom: "综合楼102",
        state: true,
        checked: true
      },
      {
        id: "3",
        label: "设备3",
        classroom: "综合楼103",
        state: false,
        checked: false
      },
      {
        id: "4",
        label: "设备4",
        classroom: "综合楼104",
        state: true,
        checked: true
      },
    ],
    //搜索
    inputShowed: false,
    inputVal: ""
  },
 
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  //查看单个设备详情页
  checkboxClick(){
    wx.navigateTo({
      url: './equipmsg/equipmsg',
    })
  },
  //编辑
  deviceEdit(){
    wx.navigateTo({
      url: './equipoc/equipoc',
    })
  }
});