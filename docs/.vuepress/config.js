module.exports = {
  base: '/',
  title: '胡潇遥的个人网站',
  description: '胡潇遥的个人网站,个人网，个人博客',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '基础知识',
        link: '/base/',
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
      '/base/': [
        ['', '目录'],
        {
          name: 'code',
          collabsable: true,
          title: 'js基础',
          children: [
            ['code/', '目录'],
            ['code/debounce', '什么是防抖，应用场景有哪些⭐️'],
            ['code/throttle', '什么是节流，应用场景有哪些⭐️'],
          ],
        },
        'css',
      ],
    },
  },
};
