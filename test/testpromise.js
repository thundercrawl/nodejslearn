// Promise

const http = require('http');

var ready = false;
var GetBaiduData = new Promise(
    function(resolve, reject) {
        if (ready) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
)

GetBaiduData.then((value) => {
    console.log("value:" + value)
}).catch(function(error) {
    // oops, mom don't buy it
    console.log(error.message);
    // output: 'mom is not happy'
}).then((value) => {
    console.log("chain next validation" + value)
});