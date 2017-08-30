require ('./world.js')
//require ('./hello.css')
require ('css-loader!./hello.css')
function hello(str){
    console.log(str)
}
hello();
//css需要安装 css-loader style-loader,并且指定给它
