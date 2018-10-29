/**
 * Created by mac1 on 2018/10/29.
 */
const Koa = require('koa');
const app = new Koa();
app.use(async ctx => {
  ctx.body =  "Hello World!";
});
app.listen(3000);