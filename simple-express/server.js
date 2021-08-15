const express = require("express");

// 利用 express 建立了一個 express application
let app = express();

//app.use使用一個「中間件」
//handler
//順序很重要
app.use((request, response, next) => {
  let current = new Date();
  console.log(`有人來囉！ at ${current.toISOString()}`);
  next();
});

app.use((request, response, next) => {
  console.log("second middle ware");
  next();
});

// HTTP Method: get, post, put, patch, delete
//router路由
app.get("/", function (request, response, next) {
  response.send("Hello");
});

app.get("/about", function (requset, response, next) {
  response.send("About");
});
//404，放所有路由的最下面
app.use((requset, response, next) => {
  response.status(404).json({ message: "Not Found" });
});

app.listen(3000, function () {
  console.log("我們的 web server 啟動了～");
});
