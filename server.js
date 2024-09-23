const express = require("express");
const app = express();

const { createProxyMiddleware } = require("http-proxy-middleware");

app.use(express.static('./public/')); //引入代理项目

app.use(
  "/", // "/api"
  createProxyMiddleware({ 
    target: "http://192.168.1.205", 
    changeOrigin: true,
 })
);

app.listen(3001, () => console.log("代理服务器启动成功!"));

// 自己配置代理服务器
// npm i 
// nodemon server 启动代理服务