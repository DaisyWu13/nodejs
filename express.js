var express =require('express');
var app= express();

app.get('/', function(req,res){
	//res.send("hello world");
	res.sendFile(__dirname+"/"+"index.html");
});


app.get('/proc_get',function(req,res){
	json={
		name:req.query.name,
		pwd:req.query.pwd
	};
	res.end(JSON.stringify(json));
});

var server= app.listen(8888,function(){
	var host= server.address().address;
	var port= server.address().port;

	console.log('应用访问地址: http://%s:%s', host, port);
});