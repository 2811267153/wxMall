// pages/home/components/w-recommends.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommend: {
      type: Array,
      default: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    imageLoad(){
      this.triggerEvent('imageLoad')
      // console.log('----');
    }
  }
})
