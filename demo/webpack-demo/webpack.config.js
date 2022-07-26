const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
module.exports = {
  //mode: 'production',
  mode: 'development',
  entry: './src/index.js',
  //开发环境推荐：
  //cheap-module-eval-source-map
  //生产环境推荐：
  //cheap-module-source-map （这也是下版本 webpack 使用-d命令启动 debug 模式时的默认选项）
  //devtool: 'hidden-source-map',
  devServer: {
    //contentBase: './dist',
    open: true,
    port: 8000,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            // 用原文件名
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            limit: 2048,
          },
        },
        //type: 'asset/resource',
      },
      {
        test: /\.less/,
        use: [
          // compiles Less to CSS
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'less-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'autoprefixer',
                    {
                      // 选项
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'index.html' }),
    new CleanWebpackPlugin(),
  ],
};
