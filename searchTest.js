var odsearchDQL = require("odsearch")
var BasicAuth = require("./com/od/auth/basic")
var searchSTR = "order_no > 146751 and order_no <= 150111";
var basicObj = new odsearchDQL.BasicAuth('admin', 'passw0rd', 'localhost');

odsearchDQL.SearchDQL.DQLREST("http://localhost/api/search/db/4825829000348aa2?q=xtodugu", searchSTR, basicObj).then((value) => {
    console.log(value)
    let resultJSON = JSON.parse(value)
    console.log(resultJSON.body.docs.map(iter => iter.id))
}).catch((err) => {
    console.log(err)
})
var url_status = "http://localhost/api/search/dblist?status=realtime";
odsearchDQL.SearchDQL.DQLREST(url_status, searchSTR, basicObj).then((value) => {
    console.log(value)
    let resultJSON = JSON.parse(value)
    resultJSON.dblist.map(iter => odsearchDQL.ODConsumer.ODEventConsumer('/' + iter))

}).catch((err) => {
    console.log(err)
})