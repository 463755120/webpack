
module.exports = {
    // entry:['./src/script/main.js','./src/script/a.js'],
    entry:{
        main:"./src/script/main.js",
        a:'./src/script/a.js'
    },
    output:{
         path: __dirname + "/dist",
         filename:'js/[name].bundle.js',
    }

}