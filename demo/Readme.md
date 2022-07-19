Webpack5变化

Loader新增resource可以处理静态资源文件

```
type: 'asset/resource'
```

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
 module: {
  rules: [
      {
        test: /\.png$/,
        // use: {
        //   loader: 'file-loader',
        // },
        type: 'asset/resource',
      },
    ],
 },
};
```



