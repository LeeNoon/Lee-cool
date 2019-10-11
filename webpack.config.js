const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')//导入在内存中自动生成的index页面的插件
const htmlPlugin = new HtmlWebPackPlugin({
    template:path.join(__dirname,'./src/index.html'),
    filename:'index.html'
})
//向外暴露一个大包的配置对象；因为webpack是基于node构建的，所以webpack支持所有的node API和语法
module.exports={
    mode: 'development',
    plugins:[
        htmlPlugin
    ],
    module:{
        rules:[
            {test:/\.js|.jsx$/,use:'babel-loader',exclude:/node_modules/},
        ]
    }
    //在webpack4.x中，有一个很大的特性，就是约定大于配置；约定默认的打包入口路径是src->index.js
};