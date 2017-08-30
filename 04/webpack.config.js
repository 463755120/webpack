
module.exports = {
    entry:'./src/script/main.js',
    //版本不同，语法不一样。这里是绝对路径
    output:{
         path: __dirname + "/dist",
         filename:'js/[name].bundle.js',
    }

}