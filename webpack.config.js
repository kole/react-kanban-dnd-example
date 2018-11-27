const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/entry.js'
    },
    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
      contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  {
                      loader: 'css-loader',
                      options: {
                          modules: true,
                          importLoaders: 1
                      }
                  },
                  'postcss-loader'
                ]
            }
        ]
    }
};
