//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        list: [{
                name: "首页",
                id: 1
            },
            {
                name: "瑜伽",
                id: 2
            },
            {
                name: "心理",
                id: 3
            },
            {
                name: "其它",
                id: 4
            },
        ],
        sel: 1,
        hotspot: [{
                id: 1
            },
            {
                id: 2
            },
            {
                id: 3
            },
            {
                id: 4
            }
        ],
        discounts: [{
                id: 1
            },
            {
                id: 2
            },
        ],

        lecture:[
            {
                id: 1
            },
            {
                id: 2
            },
            {
                id: 3
            },
        ],

    },
    change: function(e) {
        this.setData({
            sel: e.currentTarget.dataset.s
        })
    }
})