
import * as Koa from 'koa'
const app = new Koa()
const port = 8080

app.use(async ctx => {
    ctx.body = "It not works!\n"
})

app.listen(port,()=>{
    console.log(`locahost:${port}`)
})