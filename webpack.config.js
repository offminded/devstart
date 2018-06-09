const path = require('path');
const webpack = require('webpack');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './app/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: 'ng-annotate?add=true!babel',
                exclude: /node_modules/
            },
            {
                test: /.html$/,
                loader: 'ngtemplate?relativeTo=' + __dirname +'/app!html?root=' + __dirname + '/app'
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css?root=' + __dirname + '/app', 'autoprefixer-loader?browsers=last 2 versions', 'sass'],
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css-loader'],
            },
            {
                test: /\.json$/,
                loader: 'json',
                exclude: '/node_modules/'
            },
            {
                test: /\.png$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        //new webpack.optimize.UglifyJsPlugin({ minimize: true, output: { comments: false }}),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new HtmlWebpackPlugin({
            devServer: 'http://192.168.0.12:9000/webpack-dev-server.js',
            template: './app/index.ejs'
        }),
        new HardSourceWebpackPlugin({})
    ],
    resolve: {
        root: path.resolve('app/'),
        extensions: ['', '.js']
    },
    eslint: {
        failOnError: true
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./app")]
    },
    //devtool: '#source-map',
    devtool: 'eval',
    node: {
        net: 'empty',
        tls: 'empty',
        dns: 'empty',
        got: 'empty',
        fs: 'empty',
        child_process: 'empty',
    }
};
