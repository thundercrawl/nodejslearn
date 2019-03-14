var http = require('http')


module.exports = {

    searchREST: function(url) {
        return new Promise((resolve, reject) => {
            http.get(url, (res) => {
                if (res.statusCode == '200')
                    resolve("reach to " + url + " successfully")
                else {
                    let err = {}
                    err.message = "failed to reach " + url;
                    err.statusCode = res.statusCode;
                    reject(err)
                }
            })
        })
    }

}