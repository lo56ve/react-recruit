const Router = require('koa-router')
const Koa = require('koa')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const UserModel = require('../../models/user')
const util = require('../util')

const app = new Koa()
const user = new Router()

user.post('/register', async (ctx, next) => {
    let {name, pwd, position} = ctx.request.body
    pwd = util.textMd5(pwd)
    let userName = await UserModel.find({name: name})
    if (userName.length === 0) {
        let userInfo = new UserModel({name, pwd, position})
        await userInfo.save((err, res) => {
            if (err) {
                ctx.body = {status: '0', msg: '系统出错，稍后重试'}
            }
        })
        ctx.session[name] = {name, position}
        util.setCookie(ctx, {name, position})
        const token = jwt.sign({name, position}, util.secret, {expiresIn: 30*60})
        ctx.body = {status: '1', msg: '注册成功', token}
    } else {
        ctx.body = {status: '0', msg: '用户名已存在'}
    }
})

user.post('/login', async (ctx, next) => {
    let {name, pwd} = ctx.request.body
    if (ctx.session[name]) {
        ctx.body = {status: '0', msg: '用户已登录'}
        return
    }
    let user = await UserModel.findOne({name: name})
    if (user === null) {
        ctx.body = {status: '0', msg: '用户不存在'}
    } else {
        if (util.textMd5(pwd) === user.pwd) {
            let intro = user.position === 'seeker' ? (user.intro && user.intro.length > 0 && user.jobWant && user.jobWant.length > 0) : (user.demand && user.demand.length > 0 && user.jobpay && user.jobpay.length > 0 && user.company && user.company.length > 0 && user.jobInvite && user.jobInvite.length > 0)
            let userinfo = {name, position: user.position}
            // 设置保持登录的session
            ctx.session[name] = userinfo
            // 设置cookie
            util.setCookie(ctx, userinfo)
            // 生成token，有效期半小时
            const token = jwt.sign(userinfo, util.secret, {expiresIn: 30*60})
            ctx.body = intro ? {status: '1', msg: '登录成功', hasintro: true, position: user.position, token} : {status: '1', msg: '登录成功', hasintro: false, token}
        } else {
            ctx.body = {status: '0', msg: '用户密码不正确'}
        }
    }
})


user.post('/setPersonInfo', async (ctx, next) => {
    // 获取token
    const token = ctx.header.authorization || ''
    if (token) {
        const userinfo = util.verify(token.split(' ')[1], util.secret)
        let user = await UserModel.findOne({name: userinfo.name})
        let updateParam = {}
        if (userinfo.position === 'boss') {
            let { jobInvite, company, jobpay, demand } = ctx.request.body
            updateParam = { jobInvite, company, jobpay, demand }
        } else {
            let { jobWant, intro } = ctx.request.body
            updateParam = { jobWant, intro }
        }
        try {
            let res = await UserModel.findOneAndUpdate({name: userinfo.name}, updateParam)
            if (res) {
                ctx.body = {status: '1', msg: '信息保存成功'}
            }
        } catch (err) {
            ctx.body = {status: '0', msg: '系统出错，稍后重试'}
        }
    } else {
        // 如果服务器检测没有登录，清除cookie重新登录
        ctx.cookies.set('user', '', {signed: false, maxAge: 0})
        ctx.cookies.set('session-id', '', {signed: false, maxAge: 0})
        ctx.body = {status: '0', msg: '账号登录已失效，请重新登录'}
    }
})

module.exports = user