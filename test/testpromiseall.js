var searchSite = require("odsearch")
Promise.race([searchSite.SearchDQL.DQLREST("http://www.baidu.com", "string"), searchSite.SearchDQL.DQLREST("http://www.bing.com", "string")]).then((...values) => {
    console.log("promise all:" + values)

})