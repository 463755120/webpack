//webpack的插件
var htmlWebpackPlugin = require('html-webpack-plugin');
//var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin'); 
module.exports = {
    // entry:['./src/script/main.js','./src/script/a.js'],
    entry:{
        main:"./src/script/main.js",
        a:'./src/script/a.js'
    },
    output:{
         path: __dirname + "/dist",
         filename:'js/[name]-[chunkhash].bundle.js',
    },
    plugins:[
        new htmlWebpackPlugin({
            //生成dist目录下的index.html
            template:'index.html',
            filename:'index-[hash].html',
            inject:'head'
        })
    ]

}