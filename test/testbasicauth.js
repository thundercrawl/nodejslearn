var basicAUTH = require("../com/od/auth/basic")

var basic = new basicAUTH('admin', 'passowrd', 'http://localhost/mail/admin.nsf')
basic.basicHeader();