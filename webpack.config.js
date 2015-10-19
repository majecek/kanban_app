var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');


var ROOT_PATH = path.resolve(__dirname);
var TARGET = process.env.TARGET;

var common = {
    entry: path.resolve(ROOT_PATH, 'app/main'),
    output: {
        path: path.resolve(ROOT_PATH, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlwebpackPlugin({
            title: 'Kanban app'
        })
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
                include: path.resolve(ROOT_PATH, 'app')
            }
        ]
    }
};


if (TARGET === 'dev') {
    module.exports = merge(common, {
        devtool: 'eval',
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    loaders: ['react-hot', 'babel?stage=1'],
                    include: path.resolve(ROOT_PATH, 'app')
                }
            ]
        },
        devServer: {
            colors: true,
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    });
}
