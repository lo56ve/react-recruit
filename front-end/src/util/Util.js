var path = require('path')

export function fullUrl(url) {
    return path.resolve(__dirname, url)
}

export function getCookie(param) {
    let cookieStr = document.cookie
    console.log(cookieStr)
    let cookieObj = {}
    if (cookieStr) {
        cookieStr = cookieStr.replace(`${param}=`, '')
        let cookieArr = cookieStr.split('&')
        cookieArr.forEach(item => {
            cookieObj[item.split('=')[0]] = item.split('=')[1]
        })
    }
    return cookieObj
}
