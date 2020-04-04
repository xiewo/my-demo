// secondary/HomeSubset/centre/centre.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        titleList:[
             {
                 id:1,
                   /*
                    *info1中间提示消息 单行 
                    *info2中间提示  多行
                    */
                 type:"info1",   
             },
            {
                id: 2,
                type: "info2",
            },
            {
                id:3,
                type:'info3',
                uname: '智能机器人',
                time: '11:13:32',
                direction:'1',  /* 1表示左边客服   2表示右边用户  */
                unamePhotoUrl: '../../../static/img/morentouxiang.png',
                msg:{
                   type: 'img',  /*img 图片 text 文本   tmp 模板 */
                    Url:'../../../static/img/shouye.png',

                }
            },
            {
              id:4,
              type:'info3',
             direction: '2',
                uname: '我是一号用户',
                time: '12:13:32',
             unamePhotoUrl: '../../../static/img/photo1.png',
              msg:{
                  type: 'text',
                  content: '小可爱～欢迎光临帮恩宝婴儿纸尿裤 旗舰店。偶是贴心的机器人接待，有 什么问题都可以问我哦如需人工作答 请手动回复：人工方可召唤。客服小 姐妹值班时间是09:00-24:00，其余 时间不在线的，请谅解～'
              }
            },

            {
                id: 5,
                /*
                 *info1中间提示消息 单行 
                 *info2中间提示  多行
                 */
                type: "info1",
            },
            {
                id: 6,
                type: 'info3',
                uname: '我是一号用户',
                time: '15:13:32',
                direction: '2',  /* 1表示左边   2表示右边  */
                unamePhotoUrl: '../../../static/img/photo1.png',
                msg: {
                    type: 'img',  /*img 图片 text 文本   tmp 模板 */
                    Url: '../../../static/img/shouye.png',

                }
            },
            {
                id: 4,
                type: 'info3',
                direction: '1',
                uname: '智能机器人',
                time: '16:13:32',
                unamePhotoUrl: '../../../static/img/morentouxiang.png',
                msg: {
                    type: 'text',
                    content: '小可爱～欢迎光临帮恩宝婴儿纸尿裤 旗舰店。偶是贴心的机器人接待，有 什么问题都可以问我哦如需人工作答 请手动回复：人工方可召唤。客服小 姐妹值班时间是09:00-24:00，其余 时间不在线的，请谅解～'
                }
            },
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

    }
})