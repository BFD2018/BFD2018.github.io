module.exports = [
  [
    "@vuepress-reco/vuepress-plugin-kan-ban-niang",
    {
      theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
      clean: false,
      width:150,
      height:300,
      messages: {
        welcome: '欢迎来到小熊的站点',
        home: '心里的花，我想要带你回家。',
        theme: '好吧，希望你能喜欢我的其他小伙伴。',
        close: '你知道我喜欢吃什么吗？痴痴地望着你。'
      }
    }
  ],
  [
    "@vuepress-reco/vuepress-plugin-bgm-player",
    {
      audios: [
        //本地文件
        {
          name: '你的答案',
          artist: '阿冗',
          url: '/music/你的答案.mp3',
          cover: 'https://inews.gtimg.com/newsapp_ls/0/14832828037/0.jiketuchuang.png'
        },
        {
          name: '出山',
          artist: '花粥',
          url: '/music/出山.mp3',
          cover: 'https://inews.gtimg.com/newsapp_ls/0/14832831408/0.jiketuchuang.png'
        },
        {
          name: '处处吻',
          artist: '杨千嬅',
          url: '/music/处处吻.mp3',
          cover: 'https://inews.gtimg.com/newsapp_ls/0/14832836189/0.jiketuchuang.png'
        },
        {
          name: '多想在平庸的生活拥抱你',
          artist: '隔壁老樊',
          url: '/music/多想在平庸的生活拥抱你.mp3',
          cover: 'https://inews.gtimg.com/newsapp_ls/0/14832843989/0.jiketuchuang.png'
        },
        {
          name: '伽罗',
          artist: 'SENS',
          url: '/music/伽罗.mp3',
          cover: 'https://inews.gtimg.com/newsapp_ls/0/14832853189/0.jiketuchuang.png'
        },
        // 网络文件示例
        {
          name: '用胳膊当枕头',
          artist: '최낙타',
          url: 'https://assets.smallsunnyfox.com/music/3.mp3',
          cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
        }
      ]
    }
  ],
  //樱花插件
  ["sakura", {
    num: 20, // 默认数量
    show: true, //  是否显示
    zIndex: -1, // 层级
    img: {
      replace: false, // false 默认图 true 换图 需要填写httpUrl地址
      httpUrl: '...' // 绝对路径
    }
  }],

  //公告插件
  ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
    width: '300px',         // 默认 260px
    title: '消息提示',
    body: [{
      type: 'title',
      content: '欢迎加入QQ交流群 🎉🎉🎉',
      style: 'text-aligin: center;'
    },
      {
        type: 'image',
        src: '/images/wx.jpg'
      }
    ],
    footer: [{
      type: 'button',
      text: '打赏',
      link: '/donate'
    },
      {
        type: 'button',
        text: '关注',
        link: '/lookme'
      }
    ]
  }],
  //光标效果
  ['cursor-effects', {
    size: 2, // size of the particle, default: 2
    shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
    zIndex: 999999999, // z-index property of the canvas, default: 999999999
  }],
  //代码复制
  ["vuepress-plugin-nuggets-style-copy", {
    copyText: "复制代码",
    tip: {
      content: "复制成功"
    }
  }],
  //添加著作权信息
  [
    'copyright',
    {
      authorName: 'xiaoxiong', // 选中的文字将无法被复制
      minLength: 30, // 如果长度超过  30 个字符
    },
  ],

]
