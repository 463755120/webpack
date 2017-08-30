require ('./world.js')
//require ('./hello.css')
require ('style-loader!css-loader!./hello.css')
function hello(str){
    console.log(str)
}
hello("hello world");
//css需要安装 css-loader style-loader,并且指定给它
//--watch --progress 看到打包过程 --display-modules 用了哪些打包模块
