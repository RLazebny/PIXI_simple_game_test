const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
       path: path.resolve(__dirname, "dist"), 
       filename: "bundle.js", 
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 1234
  },
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'})
  ],
};
