// pages/xq/xq.js\
const app = getApp()
const {xq}=require("../../plugins/apis")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:"",
    shuju:""
  },
xiang(){
    xq(
     this.data.id
    ).then(res=>{
        this.setData({
            shuju:res.data.data
        })
        console.log(res.data.data);
    })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var id = ""
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on("id", function (data) {
        id = data
    })
    this.setData({
        id: id
    })
    console.log(this.data.id);
    this.xiang()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})