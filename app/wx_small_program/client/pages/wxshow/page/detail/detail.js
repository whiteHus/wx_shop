Page({

  /**
   * 页面的初始数据
   */
  data: {
    shareShow: false,
    detail: true,
    productList: [
      {
        productId: "1",//产品id
        productImg: "http://api.nvzz.com:8888/uploads/ui_ziyuan/nodesign/lets-summon-demons-tshirts0_253x253.jpg",//产品图片
        productName: "LET'S SUMMON DEMONS",//产品名称
        price: "24.99",//产品价格
        sellPrice: "24.99",//产品售价
        sales: 10,//销量
        stock: 100,//库存
      },
      {
        productId: "2",//产品id
        productImg: "http://api.nvzz.com:8888/uploads/ui_ziyuan/nodesign/bear-in-whimsical-wild-tshirts0_253x253.jpg",//产品图片
        productName: "Bear In Whimsical Wild",//产品名称
        price: "99.00",//产品价格
        sellPrice: "99.00",//产品售价
        sales: 99,//销量
        stock: 100,//库存
      },
      {
        productId: "3",//产品id
        productImg: "http://api.nvzz.com:8888/uploads/ui_ziyuan/nodesign/jellyfish-onz-leggings0_253x253.jpg",//产品图片
        productName: "Jellyfish",//产品名称
        price: "99.00",//产品价格
        sellPrice: "99.00",//产品售价
        sales: "99",//销量
        stock: "100",//库存
      },
      {
        productId: "4",//产品id
        productImg: "http://api.nvzz.com:8888/uploads/ui_ziyuan/nodesign/mandala-rose-gold-and-black-marble-leggings0_253x253.jpg",//产品图片
        productName: "Desert Nights",//产品名称
        price: "99.00",//产品价格
        sellPrice: "99.00",//产品售价
        sales: "99.00",//销量
        stock: "99.00",//库存
      },
      {
        productId: "5",//产品id
        productImg: "http://api.nvzz.com:8888/uploads/ui_ziyuan/nodesign/impossible-contour-map-leggings0_253x253.jpg",//产品图片
        productName: "Octopsychedelia",//产品名称
        price: "99.00",//产品价格
        sellPrice: "99.00",//产品售价
        sales: 99,//销量
        stock: 100,//库存
      },
      {
        productId: "6",//产品id
        productImg: "http://api.nvzz.com:8888/uploads/ui_ziyuan/nodesign/aerial-acrobat-leggings0_253x253.jpg",//产品图片
        productName: "Aerial acrobat",//产品名称
        price: "99.00",//产品价格
        sellPrice: "99.00",//产品售价
        sales: 99,//销量
        stock: 100,//库存
      },
      {
        productId: "7",//产品id
        productImg: "http://api.nvzz.com:8888/uploads/ui_ziyuan/nodesign/1ffde1195d914a078e7ed28575ccee380_253x253.png",//产品图片
        productName: "Pride Shoes",//产品名称
        price: "99.00",//产品价格
        sellPrice: "99.00",//产品售价
        sales: "99",//销量
        stock: "100",//库存
      },
      {
        productId: "8",//产品id
        productImg: "http://api.nvzz.com:8888/uploads/ui_ziyuan/nodesign/0d8ad584133546a885aeb955fc3fda3c0_253x253.png",//产品图片
        productName: "Tropical deets",//产品名称
        price: "99.00",//产品价格
        sellPrice: "99.00",//产品售价
        sales: "99.00",//销量
        stock: "99.00",//库存
      },
      {
        productId: "9",//产品id
        productImg: "http://api.nvzz.com:8888/uploads/ui_ziyuan/nodesign/make-your-own-luck-sjg-bags0_253x253.jpg",//产品图片
        productName: "Underestimate me. ",//产品名称
        price: "99.00",//产品价格
        sellPrice: "99.00",//产品售价
        sales: "99.00",//销量
        stock: "99.00",//库存
      },
      {
        productId: "10",//产品id
        productImg: "http://api.nvzz.com:8888/uploads/ui_ziyuan/nodesign/never-stop-exploring-the-beach-bags0_253x253.jpg",//产品图片
        productName: "Harry Pattern",//产品名称
        price: "99.00",//产品价格
        sellPrice: "99.00",//产品售价
        sales: "99.00",//销量
        stock: "99.00",//库存
      }
    ]
  },
  //产品分享
  detailShare: function (event){
    console.log("产品分享");
    this.setData({ shareShow: true });
  },
  //生成海报分享
  produceShare:function(event){
    console.log("生成海报分享");
  },
  //取消分享
  cancelShare: function (event){
    console.log("取消分享");
    this.setData({ shareShow: false });
  },
  //点击显示详情或者评价
  showdetail: function(event) {
    let tag=event.currentTarget.dataset.tag;
    this.setData({
      detail: tag ? true : false
    });
  },
  // showdetail:function(){
  //   console.log(123)
  //   this.data.detail.setData(num?true:false);
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let productId = options.productId
    if (productId){
      let productList = this.data.productList;
      for (let i = 0; i < productList.length;i++){
        let productInfo =productList[i];
        let id = productInfo.productId;
        if (productId == id){
          this.setData({ "productInfo": productInfo});
        }
      }
    }
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