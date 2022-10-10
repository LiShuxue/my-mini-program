App({
  onLaunch() {
    console.log("小程序初始化");
  },
  onShow: () => {
    console.log("小程序启动或切前台");
  },
  onHide() {
    console.log("小程序切后台");
  },
  onError() {
    console.log("发现错误");
  },
  onError() {
    console.log("发现错误");
  },
  onPageNotFound: () => {
    console.log("页面不存在");
  },
  globalData: {
    text: "这是全局数据"
  },
  globalFunction() {
    console.log("这是全局函数");
  }
})
