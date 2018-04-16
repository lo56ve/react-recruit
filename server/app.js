const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const mongoose = require('mongoose')
const session = require('koa-session-minimal')
const jwtKoa= require('koa-jwt')
const jwt = require('jsonwebtoken')

const router = require('./src/router/index')
const config = require('./config')
const util = require('./src/util')

const app = new Koa()

// 连接数据库
mongoose.connect(config.mongodb)

// 使用ctx.body解析中间件
app.use(bodyParser())

// 使用token验证
app.use(jwtKoa({secret: util.secret}).unless({
    path: [/^\/user\/login/, /^\/user\/register/]
}))

// 使用session保持登录，保存到内存中
app.use(session({
    key: 'session-id',             // cookie中存储session-id时的键名，默认为koa:sess
    cookie: {                      // 写cookie相关的配置
        domain: 'localhost',       // 写cookie所在的域名
        path: '/',                 // 写cookie所在的路径
        maxAge: 1000*60*30,        // cookie有效时长,单位ms
        httpOnly: true,            // 是否只用于http请求获取
        overwrite: false           // 是否允许重写
    }
}))

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