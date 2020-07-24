/**
 * Use this template for building basic static websites
 * 
 * Author:  Anshul Kharbanda
 * Created: 7 - 22 - 2020
 */
const ProvidePlugin = require('webpack').ProvidePlugin
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

// Webpack config
module.exports = {
    mode: process.env.NODE_ENV || 'production',
    devtool: 'source-map',
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s?css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'assets', noErrorOnMissing: true },
                'pages'
            ]
        }),
        new ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
}