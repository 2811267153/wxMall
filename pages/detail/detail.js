//Page Object
import { getDetail } from "../../servise/detail";
const util = require("../../utils/util");

Page({
  data: {
    iid: "",
    topImg: [],
    itemInfo: "",
    score: "",
    timer: "",
    promotions: [],
    comment: "",
    shopInfo: "",
    goodsSize: [],
    detailImage: [],
  },

  //options(Object)
  onLoad: function (options) {
    let timer = util.formatTime(new Date());
    let time_stamp = new Date(timer).getTime();
    time_stamp = time_stamp + 200000;
    let tomorrow = util.tomorrowTime(new Date());
    this.setData({
      iid: options.iid,
      timer,
      tomorrow,
    });
    this._getDetail(this.data.iid);
    wx.showLoading({
      title: "稍等一下",
      mask: true,
    });
  },

  _getDetail(iid) {
    getDetail(iid).then((res) => {
      const data = res.data.result;
      const banner = data.itemInfo.topImages; //保存图片地址

      const itemInfo = data.itemInfo; //保存商品数据

      const score = data.shopInfo.score;

      const promotions = data.promotions; //商检优惠信息
      console.log(data.promotions);

      const columns = data.shopInfo.services; //商品服务信息

      const comment = data.rate; //商品评论

      const shopInfo = data.shopInfo; //店铺信息

      const goodsSize = data.itemParams;

      const detailImage = data.detailInfo.detailImage[0].list;

      this.setData({
        topImg: banner,
        itemInfo: itemInfo,
        score: score,
        promotions,
        columns,
        comment,
        shopInfo,
        goodsSize,
        detailImage,
      });
    });
  },

  imgOnLoad(e) {
    console.log(e);
  },
  onReady: function () {},
  onShow: function () {
  },
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {},
  onPageScroll: function () {},
  //item(index,pagePath,text)
  onTabItemTap: function (item) {},
});
