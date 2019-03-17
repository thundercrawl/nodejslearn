var http = require('http');
var port = 8080;
var fs = require("fs");
var count = 0;
// Get content from file
 var contents = fs.readFileSync("./testserver/result.json");
var jsonfile = JSON.parse(contents)
//console.log(jsonfile)
http.createServer(function (request, response) {
    var name = require('url').parse(request.url, true).query.name;
    console.log('query name:'+name)
  response.writeHead(200, {'Content-Type': 'json/plain'});
  response.end(JSON.stringify(jsonfile))
}).listen(port);

console.log('Server running at http://127.0.0.1:'+port);