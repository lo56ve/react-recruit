const Router = require('koa-router')
const Koa = require('koa')

const app = new Koa()
const user = new Router()

user.get('/login', async (ctx, next) => {
    ctx.body = 'hello koa!'
})

user.get('/register', async (ctx, next) => {
    
})

module.exports = user