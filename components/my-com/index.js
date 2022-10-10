// components/my-com/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    custom: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  lifetimes: {
    created() {
      console.log('组件创建');
    },
    attached() {
      console.log('组件插入节点');
    },
    ready() {
      console.log('组件就绪');
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    test() {
      this.triggerEvent('myevent', {data: 'data'})
    }
  }
})
