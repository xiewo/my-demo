// pages/myHome/myHome.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        btnText: '我是一个btn',
        text: '这是内容',
         show: true,
         news:['aaa','bbb','ccc','ddd'],
         imgs:[
             { id: 1, url: '../../static/img/icon_guankanlishi.png',
              title:'观看历史',
                 pathUrl: "/secondary/HomeSubset/history/history",
             },
             { id: 2, url: '../../static/img/icon_wodeshoucang.png', title: '我的收藏' },
             { id: 3, url: '../../static/img/icon_futongzhi.png', title: '服务通知' },
             { id: 4, url: '../../static/img/icon_yigoumai.png', title: '已购买' },
             { id: 5, url: '../../static/img/icon_kefuzhongxin.png', title: '客服中心' },
             { id: 6, url: '../../static/img/icon_tuiguang.png', title: '推广' },
             ]
       
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

    },

   
})