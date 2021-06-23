// pages/home/home.js

import { getMultiData, getGoodsList } from "../../servise/home";

const type = ['pop', 'new', 'sell']
Page({
  /**
   * 页面的初始数据
   */
  data: {
    banner: [],
    recommend: [],
    title: ["流行", "新款", "精选"],
    goods: {
      'pop': { page: 0, list: [] },
      'new': { page: 0, list: [] },
      'sell': { page: 0, list: [] },
    },
    currentType: 'pop',
    isFixed: false,
    tabScroll: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title:"稍等一下",
      mask: true,
    })
    this._getMultiData(),
      this._getGoodsList("pop"),
      this._getGoodsList("new")
      this._getGoodsList("sell");
  },


  //  ----------------- 网络请求数据
  _getMultiData() {
    getMultiData().then((res) => {

      const banners = res.data.data.banner.list;
      const recommend = res.data.data.recommend.list;
      console.log(banners);
      this.setData({
        banner: banners,
        recommend: recommend,
      });
    });
  },
  _getGoodsList(type) {

    //获取页码
    const page = this.data.goods[type].page + 1;
    getGoodsList(type, page).then((res) => {
      console.log(res);
      const list = res.data.data.list
      //将数据保存到对应的type的list中
      const oldList = this.data.goods[type].list
      oldList.push(...list)

      // //将数据设置到data中的goods中
      
      // //首先申明一个tyre的关键字
      const typeKey = `goods.${type}.list`
      const pageKey = `goods.${type}.page`
      this.setData({
        [typeKey]: oldList,
        [pageKey]: page
      })
      wx.hideLoading()
    });
  },

  itemClick(e) {
    const index = e.detail.index;
    this.setData({
      currentType: type[index]
    })
  },
  imageLoad(){
    wx.createSelectorQuery().select('#tab-bar').boundingClientRect(rect => {
      console.log(rect, 'aa');
      this.data.tabScroll = rect.top
    }).exec()
    // console.log('aa');
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this._getGoodsList(this.data.currentType)

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},

  onPageScroll(options){
    const scrollTop  =  options.scrollTop

    const flag = scrollTop >= this.data.tabScroll

    if(flag != this.data.isFixed){
      this.setData({
        isFixed: flag
      })
    }
  }
});
