const webpack = require('webpack'); // eslint-disable-line no-unused-vars
const path = require('path');


module.exports = {
  devServer: {
    publicPath: '/',
    contentBase: path.join(__dirname, '../build'),
    port: process.env.PORT || 3000,
    hot: true,
  },
};
