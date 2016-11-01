import Koa from 'koa';

const app = new Koa();

app.use((ctx, next) => ctx.body = 'Hello World');

app.listen(3001, () => console.log('Koa server is listening...'));