// pages/category/category.js
import { getCategoryData, getSubcategory } from "../../servise/caregory";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    categoryList: [],
    index: 0,
    categoryTagList: [],
    mailKey: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var pages = getCurrentPages(); 
    var currentPage = pages[pages.length - 1]
    var url =  currentPage.route 	
    console.log(url);
    this._getCategoryData();
  },
  _getCategoryData() {
    getCategoryData().then((res) => {
      console.log(res);
      const list = res.data.data.category.list;
      this.setData({
        categoryList: list,
      });
    });
  },
  getIndex(e) {
    console.log(e);
    if (arguments.length >= 1) {
      var index = e.currentTarget.dataset.index;
    } else {
      //
      this.setData({
        mailKey: this.data.categoryList[this.data.index].maitKey,
      });

      this._getSubcategory(mailKey);
    }
    this.setData({
      index: index,
    });
    const mailKey = this.data.categoryList[this.data.index].maitKey;
    this._getSubcategory(mailKey);
  },
  _getSubcategory(mailKey) {
    getSubcategory(mailKey).then((res) => {
      console.log(res);
      this.setData({
        categoryTagList: res.data.data.list
      });
      console.log(this.data.categoryTagList);
    });
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
