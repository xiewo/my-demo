// pages/firstPage/firstPage.js

var  app = getApp();
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    text: '这是内容',
    btnText: '关闭',
    textTop: '我要显示一个新的内容',
    show:true,
    news: ['aaaa', 'bbbb', 'cccd'],
    uname:'hello world'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     console.log(getApp())
       this.setData({
           uname: app.myData.userName
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

  },
  btnClick:function(){
    console.log(1)
    var  isShow = this.data.show;
    var  newsData = this.data.news;
    newsData.shift();

    console.log('show：'+ isShow)
    this.setData({
       show:!isShow,
       news:newsData,
      
    })
  },
  view1Click:function(evel){
    console.log('我是view1')
    console.log(evel)
  },
  view2Click: function () {
    console.log('我是view2')
  },
  view3Click: function (evel) {
    console.log('我是view3')
    console.log( evel)
  },
})