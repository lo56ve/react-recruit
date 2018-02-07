const Router = require('koa-router')
const Koa = require('koa')
const user = require('./user')
const article = require('./article')

const app = new Koa()
const router = new Router()

router.use('/user', user.routes())
      .use('/article', article.routes())

module.exports = router