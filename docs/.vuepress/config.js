module.exports = {
  title: 'VuePress-xiong',
  description: 'Just playing around',
  dest: '/dist',
  port: '8081',
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }],
    ["link", {
      rel: "stylesheet",
      href: "/css/style.css"
    }],
    ["script", {
      charset: "utf-8",
      src: "/js/main.js"
    }],
  ],
  markdown: {
    lineNumbers: true
  },

  theme: 'reco',
  themeConfig: {
    //1、导航栏logo
    logo: '/images/看书猫头鹰.png',

    //2、导航栏
    nav: require('./nav.js'),

    //3、侧边栏
    sidebar: require('./sidebar.js'),
    subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    sidebarDepth: 2,
    //activeHeaderLinks: false, // 默认值：true

    //4、搜索栏
    search: true, //默认是true（显示搜索栏）
    searchMaxSuggestoins: 10,

    //5、最后更新时间
    lastUpdated: 'Last Updated',

    //6、配置git仓库链接
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'https://github.com/BFD2018',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'Github',

    //指定类型为blog
    type: 'blog',

    // 博客配置
    blogConfig: {
      category: {
        location: 3, // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认文案 “分类”
      },
      tag: {
        location: 4, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag' // 默认文案 “标签”
      },
      socialLinks: [      // 信息栏展示社交信息
        {
          icon: 'reco-github',
          link: 'https://github.com/recoluan'
        },
        {
          icon: 'reco-npm',
          link: 'https://www.npmjs.com/~reco_luan'
        }
      ]
    },

    //评论
    valineConfig: {
      appId: "v4acQePrpDWGpaK4bYGzE4OQ-9Nh9j0Va",
      appKey: "mL3MunlNyVD4JcAkLcMSOQ2z",
      showComment: false
    },

    // 作者
    author: 'xiong',
    // 备案号
    record: 'xxxx',
    // 项目开始时间
    startYear: '2022',
    //设置首页右侧信息栏作者头像
    authorAvatar: '/avatar.png',

    //友链
    friendLink: require("./friendLinks.js"),

    serviceWorker: {
      updatePopup: {
        message: "有新的内容.",
        buttonText: '更新'
      }
    },

    //编辑超链接
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页 ！'
  },

  plugins: require("./plugins.js"),
}
