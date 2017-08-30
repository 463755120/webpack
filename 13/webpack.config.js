
var htmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin'); 
module.exports = {
    entry:'./src/app',
    output:{
         path: __dirname + "/dist",
         filename:'js/[name].bundle.js',
    },
    module:{
        loaders:[
            {
                test:'/\.js$/',
                loader:'babel-loader',
                exclude:/("\.\/node_modules")/,
                include:/("\.\/src")/,
                options:{'presets': ['env']}
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                    {loader:'postcss-loader',
                     options:{plugins:function(){
                        return [require('postcss-import')(),require('autoprefixer')({browsers:['last 5 versions']})]
                    }}}
                ]
            },
            {
                test:/\.html$/,
                loader:'html-loader'
            },
            // {
            //     test:/\.(png|jpg|gif|svg|)$/i,
            //     loader:'url-loader',
            //     options:{
            //         name:'./src/assets/[name]-[hash:5].[ext]',
            //     }
            // },
            {
                test:/\.(png|jpg|gif|svg|)$/i,
                loaders: [
                    'file-loader?&name=assets/[name]-[hash:5].[ext]',
                    'image-webpack-loader'
                  ]
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            filename:'index.html',
            template:'index.ejs',
            inject:'body',
            title:'webpack!!',
            inlineSource: '.(js|css)$'
        }),
        new HtmlWebpackInlineSourcePlugin()
    ]

}