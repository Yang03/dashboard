
import Koa from 'koa'
import Router from 'koa-router'
import {createServer} from './router/index'
const app = new Koa()

const router = new Router()

const port = 9003

createServer(app, router, [__dirname + "/controller/**"]);
//autoLoadService([__dirname + "/service/**"])
app.listen(port, ()=>{
    console.log(`locahost:${port}`)
})