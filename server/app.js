const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const mongoose = require('mongoose')

const router = require('./src/router/index')
const config = require('./config')

const app = new Koa()

// 连接数据库
mongoose.connect(config.mongodb)

// 使用ctx.body解析中间件
app.use(bodyParser())

// 配置静态资源路径
app.use(static(
    path.join(__dirname, './static')
))

// 加载路由中间件
app.use(router.routes())
   .use(router.allowedMethods())

// 启用服务器并监听端口
app.listen(3030, () => {
    console.log(`server is starting at port 3030`)
})