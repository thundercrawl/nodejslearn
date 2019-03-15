var http = require('http')

class searchDQL {
    constructor(url, protocal) {
        this.url = url;
        this.protocal = protocal;
    }

}
module.exports = {

    DQLREST: function(url, dqlstr) {
        return new Promise((resolve, reject) => {
            http.get(url, (res) => {
                if (res.statusCode == '200') {
                    res.setEncoding('utf8');
                    res.on('data', function(data) {
                        resolve(data)
                    });
                    console.log(url + " reached")
                } else {
                    let err = {}
                    err.message = "failed to reach " + url;
                    err.statusCode = res.statusCode;
                    reject(err)
                }
            })
        })
    },
    DQLGRPC: function(url, dqlstr) {

    }

}