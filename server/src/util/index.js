const crypto = require('crypto')
const md5 = crypto.createHash('md5')

// 设置cookie
exports.setCookie = function (ctx, param) {
    let paramStr = ''
    for (item in param) {
        paramStr += paramStr.length === 0 ? `${item}=${param[item]}` : `&${item}=${param[item]}`
    }
    ctx.cookies.set(
        'user',
        paramStr,
        {
            domain: 'localhost',    // 写cookie所在的域名
            path: '/',              // 写cookie所在的路径，设置为'/'可在所有页面访问到
            maxAge: 1000*60*30,     // cookie有效时长
            httpOnly: false,        // 是否只用http请求
            overwrite: false        // 是否允许重写
        }
    )
}

// md5加密
exports.textMd5 = function(text) {
    md5.update(text)
    return md5.digest('hex')
}
