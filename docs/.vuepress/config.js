module.exports = {
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
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
      { text: '数据接口与算法', link: '/algorithms/' },
      { text: 'leetcode', link: '/leetcode/' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' },
        ],
      },
      // {
      //   text: 'test2',
      //   ariaLabel: 'Language Menu',
      //   items: [
      //     {
      //       text: 'Group1',
      //       items: [
      //         { text: 'Japanese', link: '/language/japanese/' },
      //         { text: 'Japanese', link: '/language/japanese/' },
      //       ],
      //     },
      //     {
      //       text: 'Group2',
      //       items: [
      //         { text: 'Japanese', link: '/language/japanese/' },
      //         { text: 'Japanese', link: '/language/japanese/' },
      //       ],
      //     },
      //     { text: 'Japanese', link: '/language/japanese/' },
      //   ],
      // },
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
            ['code/01', 'js中为何 0.1+0.2 不等于 0.3，应如何做相等比较'],
          ],
        },
        {
          name: 'css',
          collabsable: true,
          title: 'css基础',
          children: [
            ['css/', '目录'],
            ['css/01', 'z-index: 999 元素一定会置于 z-index: 0 元素之上吗'],
          ],
        },
      ],
      '/leetcode/': [
        ['', '目录'],
        {
          name: '箭指offer',
          collabsable: true,
          title: '箭指offer',
          children: [
            ['offer09', '剑指 Offer 09. 用两个栈实现队列'],
            ['offer30', '剑指 Offer 30. 包含min函数的栈'],
            ['offer06', '剑指 Offer 06. 从尾到头打印链表'],
            ['offer24', '剑指 Offer 24. 反转链表'],
            ['offer35', '剑指 Offer 35. 复杂链表的复制'],
            ['offer06', '剑指 Offer 04. 二维数组中的查找'],
            ['offer11', '剑指 Offer 11. 旋转数组的最小数字'],
            ['offer50', '剑指 Offer 50. 第一个只出现一次的字符'],
          ],
        },
      ],
      '/algorithms/': [
        ['', '目录'],
        ['binarySearch', '二分查找'],
      ],
    },
  },
};
