const Router = require('koa-router')
const Koa = require('koa')
const mongoose = require('mongoose')
const UserModel = require('../../models/user')
const util = require('../util')

const app = new Koa()
const user = new Router()

user.post('/register', async (ctx, next) => {
    let {name, pwd, position} = ctx.request.body
    let userName = await UserModel.find({name: name})
    if (userName.length === 0) {
        let userInfo = new UserModel(ctx.request.body)
        await userInfo.save((err, res) => {
            if (err) {
                ctx.body = {status: '0', msg: '系统出错，稍后重试'}
            }
        })
        ctx.body = {status: '1', msg: '注册成功'}
        ctx.session.user = {name, position}
        util.setCookie(ctx, {name, position})
    } else {
        ctx.body = {status: '0', msg: '用户名已存在'}
    }
})

user.post('/login', async (ctx, next) => {
    if (ctx.session.user) {
        ctx.body = {status: '0', msg: '用户已登录'}
        return
    }
    let {name, pwd} = ctx.request.body
    let user = await UserModel.findOne({name: name})
    if (user.length === 0) {
        ctx.body = {status: '0', msg: '用户不存在'}
    } else {
        if (user.pwd === pwd) {
            ctx.body = {status: '1', msg: '登录成功'}
            // 设置保持登录的session
            ctx.session.user = {name, position: user.position}
            // 设置cookie
            util.setCookie(ctx, {name, position: user.position})
        } else {
            ctx.body = {status: '0', msg: '用户密码不正确'}
        }
    }
})

user.post('/setPersonInfo', async (ctx, next) => {
    if (ctx.session.user) {
        let user = UserModel.findOne({name: ctx.session.user.name})
        UserModel.findOneAndUpdate({name: ctx.session.user.name}, {...user, ...ctx.request.body}, (err, res) => {
            console.log(res)
        })
    } else {
        ctx.body = {status: '0', msg: '账号登录已失效，请重新登录'}
    }
})

module.exports = user