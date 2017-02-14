var dns = require('dns');

dns.lookup('www.baidu.com',function(err,address,family){
	console.log('ip address', address);

	dns.reverse(address, function(err, hostname){
		if(err)
			console.error(err);
		console.log('host name is ',hostname);
	});
});
