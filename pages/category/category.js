// pages/category/category.js
import { getCategoryData } from "../../servise/caregory";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    categoryList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getCategoryData();
  },
  _getCategoryData() {
    getCategoryData().then((res) => {
      console.log(res);
      const list = res.data.data.category.list
      this.setData({
        categoryList: list
      })
    });
  },
  getIndex(e){
    console.log(e);
  },












  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

});
