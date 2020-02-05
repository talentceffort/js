const path = requier('path') // node 에서 경로를 쉽게 컨트롤 할 수 있음.

module.exports = {
  name: 'wordRelay-setting',
  mode: 'development', //실서비스 production
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx']
  },

  entry : {
    app: ['./client'],
  }, //입력

  output : {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  } //출력

}