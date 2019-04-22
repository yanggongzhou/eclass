var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["设备状态", "设备日志", "厂家报修"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,

    equipData: [
      {
        id: "1",
        label: "设备1",
        classroom: "综合楼101",
        checked: false
      },
      {
        id: "2",
        label: "设备2",
        classroom: "综合楼102",
        checked: true
      },
      {
        id: "3",
        label: "设备3",
        classroom: "综合楼103",
        checked: false
      },
      {
        id: "4",
        label: "设备4",
        classroom: "综合楼104",
        checked: true
      },
    ],
  
    allselect: false,
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },

  
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },

  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值/发给后台的值为：', e.detail.value);
    let checkedArr = e.detail.value;
    this.data.equipData.forEach((val) => {
      checkedArr.indexOf(val.id) !== -1 ? val.checked = true : val.checked = false;
    })
    this.setData({
      equipData: this.data.equipData
    })
  },
  //全选
  bindAllSelect() {
    let self = this, equipData = this.data.equipData
    if (this.data.allselect) {
      equipData.forEach((val) => {
        val.checked = false;
      })
      this.setData({
        equipData: equipData
      })
    } else {
      equipData.forEach((val) => {
        val.checked = true;
      })
      this.setData({
        equipData: equipData
      })
    };
    this.setData({
      allselect: !this.data.allselect
    })
  },
  //一键开关机
  openDevice() {
    wx.showModal({
      title: '提示',
      content: '当前操作会为选中设备一键开机，是否继续？',
      confirmText: "确定",
      cancelText: "取消",
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
          console.log('取消')
        }
      }
    });
  },
  closeDevice() {
    wx.showModal({
      title: '提示',
      content: '当前操作为选中设备一键关机，是否继续？',
      confirmText: "确定",
      cancelText: "取消",
      success: function (res) {
        console.log(res);
        if (res.confirm) {
          console.log('关机')
          wx.showToast({
            title: '关机中',
            icon: 'loading',
            duration: 3000
          });
        } else {
          console.log('取消')
        }
      }
    });
  },
});