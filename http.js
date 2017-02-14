var http = require("http");
var url = require("url");
var querystring = require('querystring');
var util = require('util');

function onRequest(request, response){
console.log(request.url);
console.log(url.parse(request.url).pathname);
response.writeHead(200, {"Content-Type":"text/plain"});
response.write("hello world</br>");
response.write("this is my first nodejs example");
response.end();
}

http.createServer(function(req, res){
	var post = '';

	req.on('data', function(chunk){
		post+=chunk;
	});

	req.on('end', function(){
		post = querystring.parse(post);
		res.end(util.inspect(post));
	});
}).listen(8888);