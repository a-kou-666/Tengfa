// index.js
// 获取应用实例
const app = getApp()
const {ershouche,pin,chexing}=require("../../plugins/apis")
Page({
  data: {
    arr:[],
    pinpai:[],
    chex:[]
  },
  // 事件处理函数
  qingqiu(){
    ershouche().then(res=>{
     
        this.setData({
            arr:res.data.data.content
        })
        console.log(this.data.arr);
    })
  },
  pai(){
    pin().then(res=>{
     
        this.setData({
            pinpai:res
        })
        console.log(res,"___________________");
    })
  },
  che(){
    chexing().then(res=>{
     
        this.setData({
            chex:res
        })
        console.log(res,"*************");
    })
  },
  onLoad() {
  this.qingqiu()
  this.pai()
  this.che()
  }
})
