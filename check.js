const Koa = require("koa");
const sha1 = require("sha1");
const wechat = require("./wechat-lib/middleware");
const { reply } = require("./wechat/reply");

const config = require("./config/config");

const app = new Koa();

app.use(wechat(config.wechat, reply));

app.listen(config.port);
console.log("list :" + 3006);
