const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/bundle.js?v=[hash]',
        hotUpdateChunkFilename: 'js/hot-update.js',
        hotUpdateMainFilename: 'js/hot-update.json'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            path: 'build',
            template: 'index.html',
            filename: 'index.html',
            title: 'This webApp use react for peng',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        })
    ]
};