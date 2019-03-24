exports.reply = async (ctx, next) => {
  const message = ctx.weixin;
  if (message.MsgType === "text") {
    let content = message.Content;
    let reply = "oh,你说的" + content + "太复杂了，无法解析";
    if (content === "1") {
      reply = "游戏";
    } else if (content === "2") {
      reply = "电影";
    } else if (content === "3") {
      reply = "动漫";
    }

    ctx.body = reply;
  }
  next();
};
