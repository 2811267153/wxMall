// components/w-block/w-block.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  methods: {
    onBlock(){
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      });
    }
  },
})
