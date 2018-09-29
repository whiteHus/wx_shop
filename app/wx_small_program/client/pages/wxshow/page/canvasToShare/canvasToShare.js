Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  // drawSharePic: function (goodsPicPath, qrCodePath) {
  //   let that = this;
  //   wx.showLoading({
  //     title: '正在生成图片...',
  //     mask: true,
  //   });
  //   //y方向的偏移量，因为是从上往下绘制的，所以y一直向下偏移，不断增大。
  //   let yOffset = 20;
  //   const goodsTitle = "LET'S SUMMON DEMONS";
  //   let goodsTitleArray = [];
  //   //为了防止标题过长，分割字符串,每行18个
  //   for (let i = 0; i < goodsTitle.length / 18; i++) {
  //     if (i > 2) {
  //       break;
  //     }
  //     goodsTitleArray.push(goodsTitle.substr(i * 18, 18));
  //   }

  //   const price = "￥26.99"; //this.data.orderDetail.price;
  //   const marketPrice = "￥26.99"; //this.data.orderDetail.marketPrice;
  //   // const title1 = '您的好友邀请您一起分享精品好货';
  //   // const title2 = '立即打开看看吧';
  //   const codeText = '长按识别小程序码查看详情';
  //   const imgWidth = 780;
  //   const imgHeight = 1600;

  //   const canvasCtx = wx.createCanvasContext('shareCanvas');
  //   //绘制背景
  //   canvasCtx.setFillStyle('white');
  //   canvasCtx.fillRect(0, 0, 780, 1600);
  //   canvasCtx.drawImage(goodsPicPath, 10, 10, 370, 370);
  //   canvasCtx.fillRect(0, 0, 10, 800);
  //   canvasCtx.fillRect(0, 0, 400, 10);
  //   canvasCtx.fillRect(370, 0, 10, 800);//x:10-370  y:10-800
  //   canvasCtx.fillRect(0, 330, 400, 50);//y:330
  //   canvasCtx.setFontSize(12);
  //   canvasCtx.setFillStyle('#333333');
  //   canvasCtx.fillText("用户阙忠锦邀您够买", 80, 345);
  //   // //绘制分享的标题文字
  //   // canvasCtx.setFontSize(16);
  //   // canvasCtx.setFillStyle('#333333');
  //   // canvasCtx.setTextAlign('center');
  //   // canvasCtx.fillText(title1, 195, 40);
  //   //绘制分享的第二行标题文字
  //   // canvasCtx.fillText(title2, 195, 70);
  //   //绘制商品图片
  //   // canvasCtx.drawImage(goodsPicPath, 0, 0, 390, 390);
  //   //绘制商品标题
  //   yOffset = 490;
  //   // goodsTitleArray.forEach(function (value) {
  //   //   canvasCtx.setFontSize(20);
  //   //   canvasCtx.setFillStyle('#333333');
  //   //   canvasCtx.setTextAlign('left');
  //   //   canvasCtx.fillText(value, 20, yOffset);
  //   //   yOffset += 25;
  //   // });
  //   //绘制价格
  //   yOffset += 8;
  //   canvasCtx.setFontSize(20);
  //   canvasCtx.setFillStyle('#f9555c');
  //   canvasCtx.setTextAlign('left');
  //   canvasCtx.fillText('￥', 20, yOffset);
  //   canvasCtx.setFontSize(30);
  //   canvasCtx.setFillStyle('#f9555c');
  //   canvasCtx.setTextAlign('left');
  //   canvasCtx.fillText(price, 40, yOffset);
  //   //绘制原价
  //   const xOffset = (price.length / 2 + 1) * 24 + 50;
  //   canvasCtx.setFontSize(20);
  //   canvasCtx.setFillStyle('#999999');
  //   canvasCtx.setTextAlign('left');
  //   canvasCtx.fillText('原价:¥' + marketPrice, xOffset, yOffset);
  //   //绘制原价的删除线
  //   canvasCtx.setLineWidth(1);
  //   canvasCtx.moveTo(xOffset, yOffset - 6);
  //   canvasCtx.lineTo(xOffset + (3 + marketPrice.toString().length / 2) * 20, yOffset - 6);
  //   canvasCtx.setStrokeStyle('#999999');
  //   canvasCtx.stroke();
  //   //绘制最底部文字
  //   canvasCtx.setFontSize(18);
  //   canvasCtx.setFillStyle('#333333');
  //   canvasCtx.setTextAlign('center');
  //   canvasCtx.fillText(codeText, 195, 780);
  //   //绘制二维码
  //   canvasCtx.drawImage(qrCodePath, 95, 550, 200, 200);
  //   canvasCtx.draw();
  //   //绘制之后加一个延时去生成图片，如果直接生成可能没有绘制完成，导出图片会有问题。
  //   setTimeout(function () {
  //     wx.canvasToTempFilePath({
  //       x: 0,
  //       y: 0,
  //       width: 390,
  //       height: 800,
  //       destWidth: 390,
  //       destHeight: 800,
  //       canvasId: 'shareCanvas',
  //       success: function (res) {
  //         that.setData({
  //           shareImage: res.tempFilePath,
  //           showSharePic: true
  //         })
  //         wx.hideLoading();
  //       },
  //       fail: function (res) {
  //         console.log(res)
  //         wx.hideLoading();
  //       }
  //     })
  //   }, 1000);
  // },
  /**
   * 绘制分享的图片
   * @param goodsPicPath 商品图片的本地链接
   * @param qrCodePath 二维码的本地链接
   */
  drawSharePic: function (goodsPicPath, qrCodePath) {
    let that=this;
    wx.showLoading({
      title: '正在生成图片...',
      mask: true,
    });
    //y方向的偏移量，因为是从上往下绘制的，所以y一直向下偏移，不断增大。
    let yOffset = 20;
    const goodsTitle = "LET'S SUMMON DEMONS";
    let goodsTitleArray = [];
    //为了防止标题过长，分割字符串,每行18个
    for (let i = 0; i < goodsTitle.length / 18; i++) {
      if (i > 2) {
        break;
      }
      goodsTitleArray.push(goodsTitle.substr(i * 18, 18));
    }
    let head ="https://mmbiz.qpic.cn/mmbiz_png/33MOico7VBXVFOEtib8HibzEs9CQ7aW6dvZX2JVXp6umebibI3nicvJg1MvicUPNwPq0h12pOLjUqaoPpnyQyMZDkmbA/0?wx_fmt=png";
    head ="poster.png"
    const price ="￥26.99"; //this.data.orderDetail.price;
    const marketPrice = "￥26.99"; //this.data.orderDetail.marketPrice;
    // const title1 = '您的好友邀请您一起分享精品好货';
    // const title2 = '立即打开看看吧';
    const codeText = '长按识别小程序码查看详情';
    const imgWidth = 800;
    const imgHeight = 1600;

    const canvasCtx = wx.createCanvasContext('shareCanvas');
    //绘制背景
    canvasCtx.setFillStyle('white');
    canvasCtx.fillRect(0, 0, 800, 1600);
    canvasCtx.drawImage(goodsPicPath, -10, -10, 820, 820);
    // canvasCtx.fillRect(0, 0, 15, 800);
    // canvasCtx.fillRect(0, 0, 800, 15);
    // canvasCtx.fillRect(785, 0, 15, 800);//x:10-370  y:10-800
    canvasCtx.fillRect(0, 700, 800, 200);//y:700
    yOffset = 700;

    canvasCtx.drawImage(head, 50, 650, 100, 100);
    canvasCtx.setFontSize(24);
    canvasCtx.setFillStyle('#333333');
    canvasCtx.fillText("用户阙忠锦  邀您购买", 180, 730);
    //绘制商品标题
    canvasCtx.setFontSize(32);
    canvasCtx.setFillStyle('#d9c064');
    canvasCtx.fillText(goodsTitle, 50, 840);
    //绘制二维码
    canvasCtx.drawImage(qrCodePath, 500, 780, 250, 250);

    //绘制商品标题
    canvasCtx.setFontSize(24);
    canvasCtx.setFillStyle('#333333');
    canvasCtx.fillText("长按识别图中二维码 →", 50, 1000);
    canvasCtx.draw();
    //绘制之后加一个延时去生成图片，如果直接生成可能没有绘制完成，导出图片会有问题。
    setTimeout(function () {
      wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: 800,
        height: 1600,
        destWidth: 800,
        destHeight: 1600,
        canvasId: 'shareCanvas',
        success: function (res) {
          that.setData({
            shareImage: res.tempFilePath,
            showSharePic: true
          })
          wx.hideLoading();
        },
        fail: function (res) {
          console.log(res)
          wx.hideLoading();
        }
      })
    }, 2000);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var pages = getCurrentPages()    //获取加载的页面
    var currentPage = pages[pages.length - 1]    //获取当前页面的对象
    var path = currentPage.route    //当前页面url
    // wx.request({
    //   url:"https://api.weixin.qq.com/wxa/getwxacode?access_token=ACCESS_TOKEN",
    //   method: 'POST',
    //   data: {
    //     path: path,
    //   },
    //   success: function (res) {
    //     debugger
    //   },
    //   fail: function (fres) {

    //   }
    // })
    // wx.downloadFile({
    //   url: 'https://mmbiz.qpic.cn/mmbiz_png/33MOico7VBXUktGsclrD3gxk7vpN7TAxdUvLmOLUwwvobotkmxTDN0tOhdU6RDCd01FH6gd0YmLyibyLpia4DMibdg/0?wx_fmt=png',
    //   success: function (res) {
    //     debugger
    //     console.log(res);
    //     that.data.img = res.tempFilePath
    //   }, fail: function (fres) {

    //   }
    // })
    // wx.getImageInfo({
    //   src: 'http://api.nvzz.com:8888/uploads/ui_ziyuan/category/20180905/2018090518132870165_555x335.png',
    //   success(res) {
    //     debugger
    //     console.log(res.width)
    //     console.log(res.height)
    //   }
    // })

    this.drawSharePic(
      "https://mmbiz.qpic.cn/mmbiz_png/33MOico7VBXUktGsclrD3gxk7vpN7TAxdUvLmOLUwwvobotkmxTDN0tOhdU6RDCd01FH6gd0YmLyibyLpia4DMibdg/0?wx_fmt=png",
      "https://mmbiz.qpic.cn/mmbiz_png/33MOico7VBXUktGsclrD3gxk7vpN7TAxd7RZIPWNyw1E0V4FkQsLHSbPAId1mRZkbmJzlLXW9iaTKD0EZuQotib0g/0?wx_fmt=png"
      );
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