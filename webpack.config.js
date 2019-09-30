const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('build'),
        filename: 'bundle.js',
        library: 'app',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: [ '@babel/preset-env' ],
                        },
                    },
                    {
                        loader: 'eslint-loader',
                        options: {
                            fix: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it use publicPath in webpackOptions.output
                            publicPath: '../'
                        }
                    },
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            filename: 'bundle.css'
        })
    ],
};
