// secondary/HomeSubset/collect /collect .jsc
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isCollect: false,
        collectData: [
            {
                id: 1, dateTimes: '今日', playTitle: '视频播放',
                caption: '课程标题课程标题课程标...',
                content: '课程说明课程说明课程说明课程说明课程说明课程说明课程说明...'
            },
            {
                id: 2, dateTimes: '2020-01-01', playTitle: '音频播放',
                caption: '课程标题课程标题课程标...',
                content: '课程说明课程说明课程说明课程说明课程说明课程说明课程说明...'
            },
            {
                id: 3, dateTimes: '2019-12-02', playTitle: '音频播放',
                caption: '课程标题课程标题课程标...',
                content: '课程说明课程说明课程说明课程说明课程说明课程说明课程说明...'
            },
            {
                id: 4, dateTimes: '2019-11-03', playTitle: '视频播放',
                caption: '课程标题课程标题课程标...',
                content: '课程说明课程说明课程说明课程说明课程说明课程说明课程说明...'
            },
            {
                id: 5, dateTimes: '2019-10-04', playTitle: '视频播放1',
                caption: '课程标题课程标题课程标...',
                content: '课程说明课程说明课程说明课程说明课程说明课程说明课程说明...'
            }

        ],
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

    BtnTitleDelete(e) {
        // let that = this
        console.log(e)
        let i = e.currentTarget.dataset.index;

        wx.showModal({
            title: '提示',
            content: '是否确认删除',
            success: (res) => {
                if (res.confirm) {
                    let arr = this.data.collectData;
                    arr.splice(i, 1)
                    this.setData({
                        collectData: arr,
                    })
                }
            }
        })
    }


})