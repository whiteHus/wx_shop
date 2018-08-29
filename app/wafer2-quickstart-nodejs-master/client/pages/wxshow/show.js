Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    menus:[
      {
        title:"新品推荐",
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      },
      {
        title: "店家推荐",
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      },
      {
        title: "顾客推荐",
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      },
      {
        title: "当季热销",
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      }
      
    ],
    productList:[
      {
        productImg:"http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",//产品图片
        productName:"埃菲尔铁塔",//产品名称
        price: "99.00",//产品价格
        sellPrice: "99.00",//产品售价
        sales:99,//销量
        stock:100,//库存
      },
      {
        productImg: "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg",//产品图片
        productName: "篮球",//产品名称
        price: "99.00",//产品价格
        sellPrice: "99.00",//产品售价
        sales: 99,//销量
        stock: 100,//库存
      },
      {
        productImg: "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",//产品图片
        productName: "衣服",//产品名称
        price: "99.00",//产品价格
        sellPrice: "99.00",//产品售价
        sales: "99",//销量
        stock: "100",//库存
      },
      {
        productImg: "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",//产品图片
        productName: "十万个为啥",//产品名称
        price: "99.00",//产品价格
        sellPrice: "99.00",//产品售价
        sales: "99.00",//销量
        stock: "99.00",//库存
      },
       {
        productImg: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",//产品图片
        productName: "埃菲尔铁塔",//产品名称
        price: "99.00",//产品价格
        sellPrice: "99.00",//产品售价
        sales: 99,//销量
        stock: 100,//库存
      },
      {
        productImg: "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg",//产品图片
        productName: "篮球",//产品名称
        price: "99.00",//产品价格
        sellPrice: "99.00",//产品售价
        sales: 99,//销量
        stock: 100,//库存
      },
      {
        productImg: "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",//产品图片
        productName: "衣服",//产品名称
        price: "99.00",//产品价格
        sellPrice: "99.00",//产品售价
        sales: "99",//销量
        stock: "100",//库存
      },
      {
        productImg: "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",//产品图片
        productName: "十万个为啥",//产品名称
        price: "99.00",//产品价格
        sellPrice: "99.00",//产品售价
        sales: "99.00",//销量
        stock: "99.00",//库存
      }
    ]
  },

  /**
   * 停止下拉刷新
   */
  stopPullDownRefresh: function () {
    wx.stopPullDownRefresh({
      complete: function (res) {
        wx.hideToast()
        console.log(res, new Date())
      }
    })
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
    console.log("开始下拉刷新");
    wx.showToast({
      title: 'loading...',
      icon: 'loading'
    })
    setTimeout(() => {
      wx.stopPullDownRefresh();
    }, 1000);
    console.log('onPullDownRefresh', new Date())
  },  

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("页面上拉触底事件的处理函数");
    wx.showToast({
      title: 'loading...',
      icon: 'loading'
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})