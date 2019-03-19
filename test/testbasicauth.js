var BasicAuth = require("../com/od/auth/basic")
var username = 'sujj';
var password = '123';
var basicode = Buffer.from(username + ':' + password).toString('base64')
console.log(basicode)
var basic = new BasicAuth('admin', 'passowrd', 'localhost')

console.log(basic.BasicHeader())
console.log(basic)