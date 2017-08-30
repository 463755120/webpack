//webpack的插件
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./src/app.js',
    output:{
         path: __dirname + "/dist",
         filename:'js/[name].bundle.js',
    },
    module:{
        //处理资源文件
        loaders:[
            {
               test:/\.js$/,
               loader:'babel-loader',
               include:__dirname+'./src/',
               //可以用正则也可以用绝对路径
               exclude:/("\.\/node_modules")/,
               //参数
               options:{'presets': ['env']}
            },
            //配置cssloader,和自动加载前缀
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                    {loader:'postcss-loader',
                     options:{plugins:function(){
                        return [require('postcss-import')(),
                        require('autoprefixer')({browsers:['last 5 versions']
                        })]
                    }}}
                ]
            },
            //html模板的处理
            {
                test:/\.html$/,
                loader:'html-loader'
            },
            //图片的处理
            {
                test:/\.(png|jpg|gif|svg|)$/i,
                loader:'file-loader',
                options:{
                    name:'./src/image/[name]-[hash:5].[ext]',
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
    plugins:[
        new htmlWebpackPlugin({
            template:'index.html',
            filename:'index.html',
            inject:'body',
        })
    ]

}