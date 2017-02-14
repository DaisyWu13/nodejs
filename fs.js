var fs = require("fs");
var buffer = new Buffer(1024);
fs.open("a.txt", "r+", function(err, fd){
	if(err)
	{
		return console.error("file not exist: "+err);
	}

	console.log("start to truncate file");
	fs.ftruncate(fd, 5, function(err){
		if(err)
		{
			return console.log(err);
		}
		console.log("file truncate end");

	});
});