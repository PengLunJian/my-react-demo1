const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.jsx'),
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
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'less-loader'],
                    publicPath: '../'
                })
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: 'images/[hash].[ext]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx']
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/main.css?v=[hash]'
        }),
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
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "build"),
        port: 9000,
        open: true,
        index: 'index.html',
        inline: true,
        hot: false,
        compress: true
    }
};