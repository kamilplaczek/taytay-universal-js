const webpack = require('webpack');

module.exports = function (options, webpackOptions) {
    return [require('./webpack.client.config'), require('./webpack.server.config')];
}