var odsearchDQL = require("odsearch")
var searchSTR = "order_no > 146751 and order_no <= 150111";
odsearchDQL.SearchDQL.DQLREST("http://127.0.0.1:5500/testserver/result.json", searchSTR).then((value) => {
    let resultJSON = JSON.parse(value)
    console.log(resultJSON.result.map(iter => iter.value))
})