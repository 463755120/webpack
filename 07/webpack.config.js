//webpack的插件
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // entry:['./src/script/main.js','./src/script/a.js'],
    entry:{
        main:"./src/script/main.js",
        a:'./src/script/a.js',
        b:'./src/script/b.js',
        c:'./src/script/c.js'
    },
    output:{
         path: __dirname + "/dist",
         filename:'js/[name]-[chunkhash].bundle.js',
         publicPath:'http://www.jd100.com/'
    },
    plugins:[
        new htmlWebpackPlugin({
            //生成dist目录下的index.html
            template:'index.html',
            filename:'index-[hash].html',
            inject:'head',
            //上线压缩，删除注释和空格
            minify:{
                removeComments:true,
                collapseInlineTagWhitespace:true
            },
            chunks:['main']
            //excludeChunks:['b','a']  除了这些chunk不加载。
        }),
        new htmlWebpackPlugin({
            template:'index.html',
            filename:'a-[hash].html',
            inject:'head',
            chunks:['main','a']
        }),
        new htmlWebpackPlugin({
            template:'index.html',
            filename:'b-[hash].html',
            inject:'head',
            chunks:['main','b']
        }),
        new htmlWebpackPlugin({
            template:'index.html',
            filename:'c-[hash].html',
            inject:'head',
            chunks:['main','c']
        }),
    ]

}