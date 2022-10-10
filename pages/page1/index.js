import utils from '../../utils/util';
import dayjs from 'dayjs';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: "这是页面初始数据"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('页面加载');
    const app =  getApp();
    console.log(app.globalData);
    app.globalFunction();

    utils.testUtil();

    console.log(dayjs().valueOf());
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('页面渲染');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('页面展示');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('页面隐藏');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('页面销毁');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('页面下拉');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('页面上拉');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  changeText() {
    this.setData({
      text: "数据被更改"
    })
  },

  gotoPage3: () => {
    wx.navigateTo({ url: '../page3/index' })
  },

  childEvent(e) {
    console.log(e);
  }
})