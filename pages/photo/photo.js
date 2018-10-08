//photo.js
// var animation = wx.createAnimation({
//   transformOrigin: "50% 50%",
//   duration: 200,
//   timingFunction: "ease",
//   delay: 0
// });
var toggleTrueFalse=true;
var animation1 = wx.createAnimation({
  duration: 800,
  timingFunction: "ease",
});
var animation2 = wx.createAnimation({
  duration: 1000,
  timingFunction: "ease",
});
var animation3 = wx.createAnimation({
  duration: 2000,
  timingFunction: "ease",
});
var animation4 = wx.createAnimation({
  duration: 1000,
  timingFunction: "ease",
});

Page({
  data: {
    animationData1: {},
    animationData2: {},
    animationData3: {},
    animationData4: {},
    items: [],
    hidden: false
  },
  onLoad: function (options) {
    var that = this;
    // this.animationType1();
    setInterval(this.animationType1, 1600);
    setInterval(this.animationType2, 3000);
    setInterval(this.animationType3, 4000);
    setInterval(this.animationType4, 2000);
    // this.animationType1();
    // requestData(that, mCurrentPage + 1);
    
  },
  animationType1: function () {
    // this.animation.rotateX(45).step();
    // this.animation.rotateX(-45).step();
    // this.animation.rotateY(45).step();
    // this.animation.rotateY(-45).step();
    // this.animation.rotateZ(45).step();
    // this.animation.rotateZ(-45).step();
    // this.animation.rotateX(0).rotateY(0).rotateZ(0).step();
    animation1.rotate(5).scaleX(0.9).scaleY(0.9).step();
    animation1.rotate(-5).scaleX(0.9).scaleY(0.9).step();
    this.setData({
      animationData1: animation1.export()
    })
    // this.animation.rotate(135).step();
    // this.animation.rotate(0).scaleX(1).scaleY(1).step();
  },
  animationType2: function(){
    animation2.scale(0.9,0.9).skew(0,0).step();
    // animation2.scale(0.9,0.9).skew(10,10).step();
    animation2.scale(0.9,0.9).rotateX(90).rotateY(90).step();
    // animation2.scale(0.9,0.9).skew(45, 45).step();
    animation2.scale(0.7, 0.7).rotateX(0).rotateY(0).skew(22, -22).step();


    // animation2.scale(0.9).skew(-40,-40).step();
    // animation2.scale(0.9).skew(-45, -45).step();

    // animation2.skewX(45).step();
    // animation2.skewY(45).step();
    // animation2.scale(0.9,0.9).skew(0,0).step();
    this.setData({
      animationData2: animation2.export()
    })
  },
  animationType3: function(){
    animation3.scale(0.9,0.9).rotateY(360).opacity(0.2).step();
    animation3.scale(0.9,0.9).rotateY(0).opacity(1).step();
    this.setData({
      animationData3: animation3.export()
    })
  },
  animationType4: function(){
    // animation4.scale(1, 1).translateX(0).scaleX(1).opacity(1).step();
    animation4.scale(0.9, 0.9).translateX(200).scaleX(0.3).opacity(0.1).step();
    animation4.scale(1, 1).translateX(0).scaleX(1).opacity(1).step();
    // animation4.scale(1, 1).translateX(0).scaleX(1).opacity(1).step();
    // animation4.scale(0.9, 0.9).translateX(200).scaleX(0.3).opacity(0.1).step();
    // animation4.scale(0.9,0.9).translateX(0).scaleX(1).opacity(1).step();
    animation4.scale(0.9, 0.9).translateX(-200).scaleX(0.3).opacity(0.1).step();
    // animation4.scale(1, 1).translateX(0).scaleX(1).opacity(1).step();
    // animation4.scale(0.9, 0.9).rotateY(360).opacity(0.2).step();
    // animation4.scale(0.9, 0.9).rotateY(0).opacity(1).step();
    this.setData({
      animationData4: animation4.export()
    })
    
    // this.setData({
    //   animationData4: animation4.export()
    // })
  }

  // rotateAndScale: function () {
  //   // 旋转同时放大
  //   this.animation.rotate(45).scale(2, 2).step()
  //   this.setData({
  //     animationData: animation.export()
  //   })
  // },
  // toggleText() {
  //   if (toggleTrueFalse) {
  //     toggleTrueFalse = false;
  //     this.animation.scale(1.2, 1.2).step();
  //   }
  //   else {
  //     toggleTrueFalse = true;
  //     this.animation.scale(1, 1).step();
  //   }
  // },
  // rotateThenScale: function () {
  //   // 先旋转后放大
  //   // this.rotateAngle += 45;
  //   r += 45;
  //   this.animation.rotate(r).step()
  //   // this.animation.rotate(90).step()
  //   // this.animation.rotate(135).step()
  //   // this.animation.scale(0.5, 2).rotate(45).step();
  //   // this.animation.scale(0.5, 2).rotate(90).step();
  //   this.setData({
  //     animationData: animation.export()
  //   })
  // },
  // rotateAndScaleThenTranslate: function () {
  //   // 先旋转同时放大，然后平移
  //   this.animation.rotate(45).scale(2, 2).step()
  //   this.animation.translate(100, 100).step({ duration: 1000 })
  //   this.setData({
  //     animationData: animation.export()
  //   })
  // }
});

// var mTitles = [];
// var mSrcs = [];
// var mTimes = [];
// var mCurrentPage = -1;

/**
 * 请求数据
 * @param that Page的对象，用其进行数据的更新
 * @param targetPage 请求的目标页码
 */
// function requestData(that, targetPage) {
//   wx.request({
//     url: Constant.GET_URL.replace("(/\(\d+))$", targetPage),
//     header: {
//       "Content-Type": "application/json"
//     },
//     success: function (res) {
//       if (res == null ||
//         res.data == null ||
//         res.data.results == null ||
//         res.data.results.length <= 0) {

//         console.error(Constant.ERROR_DATA_IS_NULL);
//         return;
//       }
//       mTitles.push("111");
//       mSrcs.push("http://i1.bvimg.com/617157/f0f726cb4e3f8ab1.png");
//       mTitles.push("222");
//       mSrcs.push("http://i1.bvimg.com/617157/f0f726cb4e3f8ab1.png");
//       mTitles.push("333");
//       mSrcs.push("http://i1.bvimg.com/617157/f0f726cb4e3f8ab1.png");

//       // var i = 0;
//       // for (; i < res.data.results.length; i++)
//       //   bindData(res.data.results[i]);

//       //将获得的各种数据写入itemList，用于setData
//       var itemList = [];
//       for (var i = 0; i < mTitles.length; i++)
//         itemList.push({ title: mTitles[i], src: mSrcs[i], time: mTimes[i] });

//       that.setData({
//         items: itemList,
//         hidden: true
//       });

//       mCurrentPage = targetPage;
//     }
//   });
// }

// /**
//  * 绑定数据
//  * @param itemData Gank的接口返回的content值，里面有各种相关的信息
//  */
// function bindData(itemData) {

//   var re = new RegExp("[a-zA-z]+://[^\"]*");
//   //图片URL标志之前的是"img alt"
//   var title = itemData.content.split("img alt=")[1].match(re)[0];

//   //todo 挺奇怪的，小程序不能显示以 （ww+数字） 开头的图片，把它改成 ws 开头就可以了，不知道为什么
//   if (-1 != (title.search("//ww"))) {
//     var src = title.replace("//ww", "//ws");
//   }
//   //早期的URL不一定是ww开头的，不需要转换直接调用
//   else {
//     var src = "http://i1.bvimg.com/617157/f0f726cb4e3f8ab1.png";
//     //title;
//   }

//   mTitles.push(itemData.title);
//   mTimes.push(itemData.publishedAt.split("T")[0]);
//   // mSrcs.push(src);
// }

// var Constant = require('../../utils/constant.js');