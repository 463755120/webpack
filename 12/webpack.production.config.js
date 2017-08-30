//webpack的插件
var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    // entry: './src/app.js',
    entry: {
        app:__dirname+'app/index.jsx',
        // 将 第三方依赖（node_modules中的） 单独打包 dependencies 发布需要的依赖（package.json）
        vendor: Object.keys(pkg.dependencies)
    },
    output: {
        path: __dirname + "/dist",
        filename: 'js/[name].bundle.js',
    },
    module: {
        //处理资源文件
        loaders: [{
                test: /\.js$/,
                loader: 'babel-loader',
                include: __dirname + './src/',
                //可以用正则也可以用绝对路径
                exclude: /("\.\/node_modules")/,
                //参数
                options: {
                    'presets': ['env']
                }
            },
            //配置cssloader,和自动加载前缀
            {
                test: /\.css$/,
                exclude: /("\.\/node_modules")/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [require('postcss-import')(),
                                    require('autoprefixer')({
                                        browsers: ['last 5 versions']
                                    })
                                ]
                            }
                        }
                    }
                ]
            },
            //html模板的处理
            {
                test: /\.html$/,
                exclude: /("\.\/node_modules")/,
                loader: 'html-loader'
            },
            //图片的处理
            {
                test: /\.(png|jpg|gif|svg|)$/i,
                exclude: /("\.\/node_modules")/,
                loader: 'file-loader',
                options: {
                    name: './src/image/[name]-[hash:5].[ext]',
                }
            },
            // {
            //     test:/\.(png|jpg|gif|svg|)$/i,
            //     loaders: [
            //         'file-loader?&name=assets/[name]-[hash:5].[ext]',
            //         'image-webpack-loader'
            //       ]
            // }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            inject: 'body',
        }),
        // webpack 内置的 banner-plugin
        new webpack.BannerPlugin("Copyright by www.jd100.com."),
        // 定义为生产环境，编译 代码 时压缩到最小
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                //supresses warnings, usually from module minification
                warnings: false
            }
        }),

        // 分离CSS和JS文件
        new ExtractTextPlugin('/css/[name].[chunkhash:8].css'),

        // 提供公共代码
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '/js/[name].[chunkhash:8].js'
        }),

        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        })
    ],

}