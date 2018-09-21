Page({
  data: {
    title: '首页'
  },
  onLoad() {
    wx.request({
      url: wx.apis.home,
      success: (res) => {
        const { data } = res;
        console.log(data);
      }
    })
  }
})