module.exports = {
  base: '/',
  title: '胡潇遥的个人网站',
  description: '胡潇遥的个人网站,个人网，个人博客',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '每日一题',
        link: '/questions/',
      },
      { text: 'External', link: 'https://google.com' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' },
        ],
      },
      {
        text: 'test2',
        ariaLabel: 'Language Menu',
        items: [
          {
            text: 'Group1',
            items: [
              { text: 'Japanese', link: '/language/japanese/' },
              { text: 'Japanese', link: '/language/japanese/' },
            ],
          },
          {
            text: 'Group2',
            items: [
              { text: 'Japanese', link: '/language/japanese/' },
              { text: 'Japanese', link: '/language/japanese/' },
            ],
          },
          { text: 'Japanese', link: '/language/japanese/' },
        ],
      },
    ],
    sidebar: {
      '/questions/': ['', 'js', 'css'],
    },
  },
};
