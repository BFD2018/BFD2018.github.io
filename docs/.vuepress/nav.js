module.exports = [
  {text: 'Home', link: '/', icon: 'reco-home'},
  {
    text: 'Java', link: '/java/', icon: "reco-document",
    items: [
      {
        text: '面向对象和基础', items: [
          {text: 'Java基础知识', link: '/java/base/'},
          {text: 'Java面向对象', link: '/java/oop/'}
        ]
      },
      {
        text: 'Java进阶-集合框架', items: [
          {text: 'list', link: '/java/collections/list'},
          {text: 'set', link: '/java/collections/set'},
          {text: 'map', link: '/java/collections/map'},
        ]
      },
      {
        text: 'Java进阶-并发框架', items: [
          {text: 'thread', link: '/java/juc/thread'},
          {text: 'pool', link: '/java/juc/pool'},
          {text: 'lock', link: '/java/juc/lock'},
        ]
      },
      {
        text: 'Java进阶-IO框架', items: [
          {text: 'writer', link: '/java/io/writer'},
          {text: 'reader', link: '/java/io/reader'},
        ]
      },
    ]
  },
  {
    text: '数据结构', link: '/datastructure/',
    items: [
      {text: '数组', link: '/java/datastructure/array'},
      {text: '链表', link: '/java/datastructure/link'},
      {text: '堆栈', link: '/java/datastructure/stack'},
      {text: '树', link: '/java/datastructure/tree'},
      {text: '图', link: '/java/datastructure/image'},
    ]
  },
  {
    text: '面试宝典', link: '/baodian/',
    items: [
      {text: '初级开发篇', link: '/baodian/zero/'},
      {text: '高级进阶篇', link: '/baodian/high/'},
    ]
  },
  {
    text: '工具箱',
    icon: "reco-tools",
    items: [
      {
        text: '在线编辑',
        items: [
          {text: '图片压缩', link: 'https://tinypng.com/'}
        ]
      },
      {
        text: '在线服务',
        items: [
          {text: '阿里云', link: 'https://www.aliyun.com/'},
          {text: '腾讯云', link: 'https://cloud.tencent.com/'}
        ]
      },
      {
        text: '关于',
        items: [
          {text: '关于我', link: '/guide/'},
          {text: '掘金', link: 'https://juejin.im/'},
          {text: 'CSDN', link: 'https://blog.csdn.net/'}
        ]
      }
    ]
  },
  {text: 'TimeLine', link: '/timeline/', icon: 'reco-date'}
]
