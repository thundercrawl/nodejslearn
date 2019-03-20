var odsearchDQL = require("odsearch")
var BasicAuth = require("./com/od/auth/basic")
var searchSTR = "order_no > 146751 and order_no <= 150111";
var basicObj = new odsearchDQL.BasicAuth('admin', 'passw0rd', 'localhost');

odsearchDQL.SearchDQL.DQLREST("http://localhost/api/search/db/4825829000348aa2?q=xtodugu", searchSTR, basicObj).then((value) => {
    console.log(value)
    let resultJSON = JSON.parse(value)
    console.log(resultJSON.result.map(iter => iter.value))
}).catch((err) => {
    console.log(err)
})