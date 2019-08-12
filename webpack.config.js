
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCdnPlugin = require('webpack-cdn-plugin');
const exchangUrl =require('./webpack.cdnconfig.js')
module.exports = {
    entry: './index.module.js',
    output: {
        filename: "[name].buddle.js",
        path: path.resolve(__dirname, 'build')
    },
    mode: 'development',
    module : {
        rules: [
            {test:/\.css$/, use:'css-loader'},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'ceshi demo',
            filename: 'index.html',
            template: './index.html',
            inject: true,
            minify: {
                removeComments: true,
                // collapseWhitespace: true,
            }
        }),
        // new exchangUrl({
        //     cdnPath: '/cdn/gfhkstore/'
        // })
    ]
}