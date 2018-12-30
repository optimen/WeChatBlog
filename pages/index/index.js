//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    mInfo: [],
    mH:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //这个onLoad注意大小写区分，刚开始用小写总报错
      var that = this;
      wx.request({
        async:true,
        url: 'https://wx.iacblog.com/wx/api/resume',//这个地址好像只能https的
        method: "GET",
        header: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          console.log(res.data);
          var mInfo = res.data.mInfo;
          var mH = res.data.mH;
          that.setData({
            mInfo: mInfo,
            mH:mH
          })
        },
        fail: function () {
          console.log("接口调用失败");
        }
      })
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
