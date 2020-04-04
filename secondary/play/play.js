

// 封装一个获得 随机颜色 函数
 function getRandomColor() {
    let rgb = []
    for (let i = 0; i < 3; ++i) {
        let color = Math.floor(Math.random() * 256).toString(16)
        color = color.length == 1 ? '0' + color : color
        rgb.push(color)
    }
    return '#' + rgb.join('')
}






// pages/play/play.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        src: '',
        opt:1, //当前观看视频的id
        danmuList: [],
        isBuy:false,  // 判断是否已购买状态
        list:[
            {id: 1, title: '课程标题课程标题课程标题课程标..',isSee:true},
            { id: 2, title: '课程标题课程标题课程标题课程标..', isSee: false },
            { id: 3, title: '课程标题课程标题课程标题课程标..', isSee: false },
            { id: 4, title: '课程标题课程标题课程标题课程标..', isSee: false },
            { id: 5, title: '课程标题课程标题课程标题课程标..', isSee: false },
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
    onReady: function (res) {
        this.videoContext = wx.createVideoContext('myVideo')
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

   
    selBtnClick(e){
       
     let id = e.currentTarget.dataset.selid;
     this.setData({
         opt:id
     })
    }
    
    
})