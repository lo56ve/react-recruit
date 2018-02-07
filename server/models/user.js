// 用户的模式schema和数据库模型model
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {type: String, require: true},
    pwd: {type: String, require: true},
    headUrl: String,
    create_at: {type: Date, default: Date.now}
})

const User = module.exports = mongoose.model('User', userSchema)