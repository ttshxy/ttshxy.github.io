module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
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
  },
};
