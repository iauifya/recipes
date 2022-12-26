const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
})

// module.exports = {
//   devServer: {
//     proxy: 'http://localhost:3000/'
//   }
// }

let proxyObj={};
proxyObj['/']={
  ws:false,
  target:'http://localhost:3000',//后端地址
  changeOrigin:true,
  pathRewrite:{
    '^/':''
  }
};
module.exports={
  lintOnSave: false,
  devServer:{
    host:'localhost',
    port:8080,
    proxy:proxyObj
  }
};