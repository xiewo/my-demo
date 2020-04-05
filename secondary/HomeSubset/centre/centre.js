// secondary/HomeSubset/centre/centre.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
         val:null,  // 接收input框的数据
         imgs:null,  // 接收图片的数据
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

    },
    // input框事件
    bindInputValue(e){
      let val = e.detail.value
     this.setData({
         val  // 设置val 值
     })
    },

// 图片选择框事件
 btnImage(e){
     let that = this;
    wx.chooseImage({
        count: 1,
        sizeType: [],
        sourceType: [],
        success: function(res) {
             // 这里面拿到的图片是临时的地址， 
            console.log(res); 
            let imgUrl = res.tempFilePaths[0];
         //需要向后台发送请求，将地址保存到后台 永久保存
            console.log(imgUrl);
            let img = {
                id: 6,
                type: 'info3',
                uname: '我是一号用户',
                time: '15:13:32',
                direction: '2',  /* 1表示左边   2表示右边  */
                unamePhotoUrl: '../../../static/img/photo1.png',
                msg: {
                    type: 'img',  /*img 图片 text 文本   tmp 模板 */
                    Url: imgUrl,
                }
            };
            that.setData({
                titleList: that.data.titleList.concat(img),
            })
        },
        fail: function(res) {},
        complete: function(res) {
            console.log('完成')
        },
    })
 },

//  button 发送事件
    btnClick(){
       let val = this.data.val;  //内容
       let imgUrl = this.data.imgs  // 图片
    
       let obj = {
                id: 6,
                type: 'info3',
                uname: '我是一号用户',
                time: '15:13:32',
                direction: '2',  /* 1表示左边   2表示右边  */
                unamePhotoUrl: '../../../static/img/photo1.png',
                msg: {
                    type: 'text',  /*img 图片 text 文本   tmp 模板 */
                    content: val
                }
        };
        let img = {
            id: 6,
            type: 'info3',
            uname: '我是一号用户',
            time: '15:13:32',
            direction: '2',  /* 1表示左边   2表示右边  */
            unamePhotoUrl: '../../../static/img/photo1.png',
            msg: {
                type: 'img',  /*img 图片 text 文本   tmp 模板 */
                Url: imgUrl,
            }
        };
        
        this.setData({
            titleList: this.data.titleList.concat(obj),
          
        })
    },


})