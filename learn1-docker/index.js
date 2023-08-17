import Koa from "koa"

const PORT_NUM = 3000;
const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'Hello Koa';
});

app.listen(PORT_NUM, () => console.log("launch the koa server listen to " + PORT_NUM));
