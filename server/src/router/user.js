const Router = require('koa-router')
const Koa = require('koa')
const mongoose = require('mongoose')
const UserModel = require('../../models/user')

const app = new Koa()
const user = new Router()


user.get('/login', async (ctx, next) => {
    let {name, pwd} = ctx.request.body
    UserModel.findOne({name: name})
        .then((err, res) => {
            if(err) {
                console.log(err)
            }else {
                console.log(res)
            }
        })
})

user.post('/register', async (ctx, next) => {
    let userInfo = new UserModel(ctx.request.body)
    userInfo.save((err, res) => {
        if (err) {
            console.log('error:' + err)
        } else {
            console.log('res:' + res)
        }
    })
    ctx.body = {
        status: '0',
        msg: '注册成功'
    }
})

module.exports = user