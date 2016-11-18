import Koa from 'koa';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import json from 'koa-json';
import convert from 'koa-convert';
import router from './routes';

const app = new Koa();

app.use(bodyParser());

app.use(convert(json()));

app.use(convert(logger()));

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3100, () => console.log('Koa server is listening...'));
