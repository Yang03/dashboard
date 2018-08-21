
import Koa from 'koa'
import Router from 'koa-router'
import {createServer} from './router/index'
const app = new Koa()

const router = new Router()

const port = 9000

createServer(app, router, [__dirname + "/controller/**"]);

app.listen(port, ()=>{
    console.log(`locahost:${port}`)
})