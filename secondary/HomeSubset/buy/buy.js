// secondary/HomeSubset/buy/buy.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // isBuy判断是否已经购买
        isBuy:true,
         buyNavTitle: [{
                id: 1,
                title: '全部'
            },
            {
                id: 2,
                title: '心理'
            },
            {
                id: 3,
                title: '瑜伽'
            },
            {
                id: 4,
                title: '心理'
            },
            {
                id: 5,
                title: '瑜伽'
            },
            {
                id: 6,
                title: '心理'
            },
            {
                id: 7,
                title: '瑜伽'
            },
        ],
        // 初始选中状态
        opt: 1,
        buys: [
            {
                id: 59856173214,
                price: '99',
                buyTime: '2019-09-09 14:46:06',
                tody: '156天15小时24分',
                studys: '返回学习'
            },
            {
                id: 59856173214,
                price: '99',
                buyTime: '永久',
                tody: '156天15小时24分',
                studys: '再来一单'
            },
            {
                id: 59856173214,
                price: '99',
                buyTime: '2019-09-09 14:46:06',
                tody: '156天15小时24分',
                studys: '再来一单'
            },
            {
                id: 59856173214,
                price: '99',
                buyTime: '2019-09-09 14:46:06',
                tody: '156天15小时24分',
                studys: '再来一单'
            },
            {
                id: 59856173214,
                price: '99',
                buyTime: '2019-09-09 14:46:06',
                tody: '156天15小时24分',
                studys: '再来一单'
            },
            {
                id: 59856173214,
                price: '99',
                buyTime: '2019-09-09 14:46:06',
                tody: '156天15小时24分',
                studys: '再来一单'
            },
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    },
    BtnOpt(e) {
        this.setData({
            opt: e.currentTarget.dataset.sel
        })
    },
    scroll(e){
        console.log(e)
        // 滚动触发的方法
        // console.log('滚动')
    }
})