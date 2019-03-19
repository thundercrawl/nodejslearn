var http = require('http')
var BasicAuth = require('./com/od/auth/basic')
class searchDQL {
    constructor(url, protocal) {
        this.url = url;
        this.protocal = protocal;
    }

}
module.exports = {

    DQLREST: function(url, dqlstr, basicAuth) {

        let options = {
            host: basicAuth.host,
            port: 80,
            method: "GET",
            path: url,
            auth: basicAuth.username + ':' + basicAuth.password
        };
        console.log(options)
        return new Promise((resolve, reject) => {
            http.get(options, (res) => {
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