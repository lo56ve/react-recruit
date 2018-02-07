const Router = require('koa-router')
const Koa = require('koa')

const app = new Koa()
const article = new Router()

article.get('/', async (ctx, next) => {
    ctx.body = '111'
})

module.exports = article