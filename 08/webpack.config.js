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
            }
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