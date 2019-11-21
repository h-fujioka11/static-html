const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'), 
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/assets'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
    publicPath: '/assets/',
    watchContentBase: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              importLoaders: 1
            },
          },
          {
            loader: "sass-loader",
            options: {
              // ソースマップの利用有無
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                // Autoprefixerを有効化
                require("autoprefixer")({
                  // ☆IEは11以上、Androidは4.4以上
                  // その他は最新2バージョンで必要なベンダープレフィックスを付与する設定
                  browsers: ["last 2 versions", "ie >= 11", "Android >= 4"]
                })
              ]
            }
          },
          'import-glob-loader',
        ]
      }
    ]
  }
};
