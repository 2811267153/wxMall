// components/w-goods-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: {
      type: Object,
      default: {},
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    path: "",
  },

  /**
   * 组件的方法列表
   */

  created() {
    var pages = getCurrentPages();
    var currentPage = pages[pages.length - 1];
    var url = currentPage.route;
    this.setData({
      path: url
    })
    console.log(url);
  },
  onLoad: function () {},
  methods: {
    // path = this.data.path,
    itemClick(e) {
      console.log(e);
      if(this.data.path == 'pages/home/home'){
        this.iid = this.data.item.iid;
        wx.navigateTo({
          url: "/pages/detail/detail?iid=" + this.iid,
        });
        console.log(this.data.path);
      }else{
        this.data.path = 'pages/home/home'
      }
    },
  },
});

/**
 * itemClick(e) {
        console.log(e);
        this.iid = this.data.item.iid;
        console.log(this.iid);
        //跳转到详情页
  
        wx.navigateTo({
          url: "/pages/detail/detail?iid=" + this.iid,
        });
      },
 */
