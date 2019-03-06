http = require("http")

http.get({
    hostname: 'localhost',
    port: 80,
    path: '/',
    agent: false // create a new agent just for this one request
}, (res) => {
    // Do stuff with response
    console.log("access server:" + res.socket._host)
    console.log("status code:" + res.statusCode)

    // Buffer the body entirely for processing as a whole.
    var bodyChunks = [];
    res.on('data', function(chunk) {
        // You can process streamed parts here...
        bodyChunks.push(chunk);
    }).on('end', function() {
        var body = Buffer.concat(bodyChunks);
        console.log('BODY: ' + body);
        // ...and/or process the entire body here.
    })

});