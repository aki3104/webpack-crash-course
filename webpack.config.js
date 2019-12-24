const path = require('path')
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
  //webpack-dev-serverのルートパス
  devServer: {
    contentBase: outputPath
  }
}