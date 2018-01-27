var path = require('path')

function fullUrl(url) {
    return path.resolve(__dirname, url)
}

module.exports = {
    fullUrl
}