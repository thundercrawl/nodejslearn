var http = require('http')
var url = "http://www.baidu.com"

var search = function() {

    this.searchREST = function(url) {
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


async function showOff(phone) {
    return new Promise(
        (resolve, reject) => {
            var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

            resolve(message);
        }
    );
};
var searchSite = new search()
console.log("search baidu")
searchSite.searchREST("http://www.baidu.com").then((value) => {
    console.log(value)
})
console.log("search google")
searchSite.searchREST("http://www.google.com").then((value) => {
    console.log(value)
})
console.log("search bing")
searchSite.searchREST("http://www.bing.com").then((value) => {
    console.log(value)
})

searchSite.searchREST("http://localhost/mail/admin.nsf").then((value) => {
        console.log(value)
    }).catch((err) => {
        console.log("catch Exception:" + err.message)
        console.log("status code:" + err.statusCode)
    })
    /*
    var reachFun = function(resolve, reject) {

        http.get(url, (res) => {
            if (res.statusCode == '200')
                resolve("reach to " + url + " successfully")
            else
                reject("failed to reach " + url)
        })
    }

    var GetBaiduData = new Promise(reachFun)

    GetBaiduData.then((value) => {
        console.log(value)


    }).catch(function(err) {
        console.log("Error happen:" + err)

    });
    console.log("baidu")
    url = "http://www.google.com";
    var GetGoogleData = new Promise(reachFun);

    GetGoogleData.then((value) => {
        console.log(value)


    }).catch(function(err) {
        console.log("Error happen:" + err)

    }).finally(() => {
        console.log("Finally release some resources")
    });
    console.log("google")*/