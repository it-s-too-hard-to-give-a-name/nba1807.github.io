<<<<<<< HEAD
=======
<<<<<<< HEAD
const express = require("express");
const app = express();
const https = require("https");

const os = require("os");
=======
>>>>>>> 00ae4cec85d4bc56efbf0c4d4045de24ae3736d8
// 1.初始项目：npm init -y
// 2.安装依赖：cnpm i -S express body-parser

const express = require("express"); // 一个nodejs的后端框架，类似的还有koa
const app = express();

// 获取本机的ip地址，如果是在线上，那么这个地址就是服务器ip
const os = require("os");
///////////////////获取本机ip///////////////////////
<<<<<<< HEAD
=======
>>>>>>> b7e17cb48e5f4712d6f4e8956e17796f433a40dc
>>>>>>> 00ae4cec85d4bc56efbf0c4d4045de24ae3736d8
function getIPAdress(os) {
  var interfaces = os.networkInterfaces();
  for (var devName in interfaces) {
    var iface = interfaces[devName];
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (
        alias.family === "IPv4" &&
        alias.address !== "127.0.0.1" &&
        !alias.internal
      ) {
        return alias.address;
      }
    }
  }
}
const IPv4 = getIPAdress(os);
<<<<<<< HEAD
=======
<<<<<<< HEAD
app.listen(8088, () =>
  console.log("服务：http://localhost:8088；本机ip" + IPv4)
);

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
=======
>>>>>>> 00ae4cec85d4bc56efbf0c4d4045de24ae3736d8
app.listen(3003, () =>
  console.log("服务：http://localhost:3003；本机ip" + IPv4)
); // 启动服务 3003是端口号

const bodyParser = require("body-parser"); // 使用中间件可以获取到post-body里的数据
app.use(bodyParser.urlencoded({ extended: true })); // 表单请求
app.use(bodyParser.json()); // json请求--post

// 请求https协议的第三方接口
const https = require("https");

// 解决跨域可以自己设置，可以使用中间件cors
// const cors = require('cors') app.use(cors())
app.all("*", function(req, res, next) {
  // 设置跨域白名单 可以使用cors模块，这里没使用
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "X-Requested-With");
  // res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  // res.header("X-Powered-By", ' 3.2.1');
  // res.header("Content-Type", "application/json;charset=utf-8");
  // next();
  res.header("Access-Control-Allow-Origin", "*"); // 这里的*表示不拦截，可以响应所有地址的请求
<<<<<<< HEAD
=======
>>>>>>> b7e17cb48e5f4712d6f4e8956e17796f433a40dc
>>>>>>> 00ae4cec85d4bc56efbf0c4d4045de24ae3736d8
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  if (req.method === "OPTIONS") {
<<<<<<< HEAD
=======
<<<<<<< HEAD
    res.sendStatus(200);
  } else {
=======
>>>>>>> 00ae4cec85d4bc56efbf0c4d4045de24ae3736d8
    // res.send(200)
    res.sendStatus(200);
  } else {
    // 必须有next方法，才能跳出这个方法到下一个请求里去
<<<<<<< HEAD
=======
>>>>>>> b7e17cb48e5f4712d6f4e8956e17796f433a40dc
>>>>>>> 00ae4cec85d4bc56efbf0c4d4045de24ae3736d8
    next();
  }
});

<<<<<<< HEAD
// 在get里获取请求参数用req.query，在post里获取参数用req.body

=======
<<<<<<< HEAD
=======
// 在get里获取请求参数用req.query，在post里获取参数用req.body

>>>>>>> b7e17cb48e5f4712d6f4e8956e17796f433a40dc
>>>>>>> 00ae4cec85d4bc56efbf0c4d4045de24ae3736d8
// app.get是拦截到get请求
app.get("*", (req, res, next) => {
  switch (req.path) {
    case "/":
      res.json({ IPv4 });
    default:
      next();
  }
});

<<<<<<< HEAD
// post请求需要额外的处理
app.post("*", (req, res) => {
  // req.path请求的地址
  const data = require("./json/index.json");
=======
<<<<<<< HEAD
// 请求最新消息
app.get("/zhihu", (req, respoens) => {
  var page = req.query.page ? req.query.page : 4;
  https
    .get("https://news-at.zhihu.com/api/" + page + "/news/latest", res => {
      res.on("data", d => {
=======
// post请求需要额外的处理
app.post("*", (req, res) => {
  // req.path请求的地址
  const data = require("./json/qq.json");
>>>>>>> 00ae4cec85d4bc56efbf0c4d4045de24ae3736d8
  switch (req.path) {
    case "/login":
      // Object.keys(req.body).length ? res.json(data) : res.json(req.body);

<<<<<<< HEAD
      if (req.body.username && req.body.password) {
=======
      if (req.body.phone && req.body.yzm) {
>>>>>>> 00ae4cec85d4bc56efbf0c4d4045de24ae3736d8
        res.json(data);
      } else {
        res.json({
          type: "err"
        });
      }

      break;
    default:
      res.json("404");
  }
});
<<<<<<< HEAD

app.get("/zhihu", (req, respoens) => {
  // console.log(req.query.page)
  // var page = req.query.page ? req.query.page : 4;
  https
    .get("https://news-at.zhihu.com/api/4/news/latest", res => {
=======
// 请求最新消息
app.get("/zhihu", (req, respoens) => {
  // console.log(req.query.page)
  var page = req.query.page ? req.query.page : 4;
  https.get("https://news-at.zhihu.com/api/" + page + "/news/latest", res => {
>>>>>>> 00ae4cec85d4bc56efbf0c4d4045de24ae3736d8
      //console.log('状态码:', res.statusCode);
      //console.log('请求头:', res.headers);

      res.on("data", d => {
        // process.stdout.write(d);// 打印到控制台
        // console.log(typeof process.stdout.write(d))
<<<<<<< HEAD
=======
>>>>>>> b7e17cb48e5f4712d6f4e8956e17796f433a40dc
>>>>>>> 00ae4cec85d4bc56efbf0c4d4045de24ae3736d8
        let data = d.toString("utf-8");
        respoens.json(JSON.parse(data));
      });
    })
    .on("error", e => {
      console.error("错误：", e);
    });
});

<<<<<<< HEAD
// 根据消息的id获取消息的详情内容
=======
<<<<<<< HEAD
// 根据消息的id获取消息的详细信息
>>>>>>> 00ae4cec85d4bc56efbf0c4d4045de24ae3736d8
const iconv = require("iconv-lite");
app.get("/ditail", (req, respoens) => {
  https.get("https://news-at.zhihu.com/api/4/news/" + req.query.id, res => {
    var chunks = [];
    res
      .on("data", d => {
        chunks.push(d);
      })
      .on("end", function() {
        chunks = Buffer.concat(chunks);
<<<<<<< HEAD
        // 对二进制进行解码
        var body = iconv.decode(chunks, "utf-8");
        //   console.log(body);
=======
        var body = iconv.decode(chunks, "utf-8");
>>>>>>> 00ae4cec85d4bc56efbf0c4d4045de24ae3736d8
        respoens.end(body);
      })
      .on("error", e => {
        console.error("错误：", e);
      });
  });
});
<<<<<<< HEAD

// 安装一个全局热更新插件
// cnpm install -g hotnode
// 使用在package.json里script写：hotnode index.js
=======
=======
>>>>>>> b7e17cb48e5f4712d6f4e8956e17796f433a40dc
>>>>>>> 00ae4cec85d4bc56efbf0c4d4045de24ae3736d8
