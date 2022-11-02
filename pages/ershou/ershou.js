// index.js
// 获取应用实例
const app = getApp()
const {ershouche,pin,chexing}=require("../../plugins/apis")
Page({
  data: {
    arr:[],
    pinpai:[],
    chex:[],
    falg:true,
    falg1:true,
    carModel:'',
    carBrand:'',

  },
  // 事件处理函数
  qingqiu(){
    ershouche({
        data:{
            page:1,
            carModel:this.setData.carModel,
            carBrand:this.setData.carBrand
        }
    }).then(res=>{
     
        this.setData({
            arr:res.data.data.content
        })
        console.log(this.data.arr);
    })
  },
  pai(){
    pin().then(res=>{
     
        this.setData({
            pinpai:res.data.data.content
        })
        console.log(res.data.data.content,"___________________");
    })
  },
  che(){
    chexing().then(res=>{
     
        this.setData({
            chex:res.data.data.content
        })
        console.log(res.data.data.content,"*************");
    })
  },
  huan(){
      this.setData({
          falg:false
      })
  },
  huan1(){
    this.setData({
        falg1:false
    })
},
  na(e){
      console.log(e.currentTarget.dataset.id);
    this.setData({
        falg:true,
        carModel:e.currentTarget.dataset.id,
        carBrand:""
    })
    this.qingqiu()
  },
  na1(e){
    console.log(e.currentTarget.dataset.id);
    this.setData({
        falg1:true,
        carModel:"",
        carBrand:e.currentTarget.dataset.id
    })
    this.qingqiu()
  },
  tiao(e){
    console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
        url: '/pages/xq/xq',
        success: res => {
            // 通过 eventChannel 向被打开页面传送数据
            res.eventChannel.emit('id', e.currentTarget.dataset.id)
        }
    })
  },
  onLoad() {
  this.qingqiu()
  this.pai()
  this.che()
  }
})
