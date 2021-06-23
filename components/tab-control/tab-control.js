// components/tab-control/tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: { 
    currIndex: '0'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    currendIndex(e){
      const index = e.currentTarget.dataset.index
      // console.log(e);
      this.setData({
        currIndex: index
      })
      this.triggerEvent('itemClick', {index})
    }
  }
})
