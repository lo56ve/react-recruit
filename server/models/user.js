// 用户的模式schema和数据库模型model
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {type: String, require: true},
    pwd: {type: String, require: true},
    headUrl: String,        //头像
    position: {type: String, require: true},    //用户身份
    jobWant: String,        //求职者岗位
    intro: String,          //求职者个人简介
    jobInvite: String,      //boss招聘岗位
    company: String,        //boss公司
    jobpay: String,         //boss提供的薪资
    demand: String,         //boss职位要求
    create_at: {type: Date, default: Date.now}
})

const User = module.exports = mongoose.model('User', userSchema)