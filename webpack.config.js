const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

//絶対パスを生成 
const outputPath = path.resolve(__dirname, 'dist')
console.log({outputPath})

module.exports = {
  //webpackのエントリーポイントの設定　モジュールバンドルの対象を設定
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: outputPath
  },
  module: {
    rules: [   
      { 
        //ブラウザに関係なく、表示させる
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        //cssをjsとして取り扱う.逆順に実行される。
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loader: 'url-loader',
        options: {
          //２キロバイトを超えるものは別にする
          limit: 2048,
          name: './images/[name].[ext]'
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  //webpack-dev-serverのルートパス
  devServer: {
    contentBase: outputPath
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
}