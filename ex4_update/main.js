var fs = require("fs");
//count how many zeros and ones are in the game until now
var gambling = {zeros:0, ones:0, winningStr : ""};
var myHTTPServer = require('./hujiwebserver');

//if user gambled on 0
myHTTPServer.use('/gamble/0', function(rq,rs){
	//preserve a copy of the gambling object
		
	gambling.zeros += 1;
	if (gambling.zeros < gambling.ones)
	{
		gambling.winningStr = "You Won!";
	}
	else if (gambling.zeros > gambling.ones)
	{
		gambling.winningStr = "You Lose!";
	}
	else
	{
		gambling.winningStr = "Tie!";
	}

	rs.json(gambling);	
	
	});

//if user gambled on 1
myHTTPServer.use('/gamble/1', function(rq,rs){
	//preserve a copy of the gambling object
	gambling.ones += 1;
	if (gambling.zeros > gambling.ones)
	{
		gambling.winningStr = "You Won!"
	}
	else if (gambling.zeros < gambling.ones)
	{
		gambling.winningStr = "You Lose!"
	}
	else
	{
		gambling.winningStr = "Tie!"
	}
	
	//console.log(gambling);
	rs.json(gambling);
});


//reset the gambles
myHTTPServer.use('/gamble/reset', function(rq,rs){
	//console.log("hi3")
	gambling.zeros = 0;
	gambling.ones = 0;
	//console.log(gambling);
	rs.json(gambling);
});

myHTTPServer.use('/www/*', function(rq,rs){
	
// First I want to read the file
	var pathname = 'www/' + rq.params.star;
	if (pathname.endsWith('.js'))
	{
		rs.set("Content-Type", "application/javascript");
	}
	else if (pathname.endsWith('.css'))
	{
		rs.set("Content-Type", "text/css");
	}
	else if (pathname.endsWith('.html'))
	{
		rs.set("Content-Type", "text/html");
	}
		
	
	var content = "";
	// First I want to read the file
	fs.readFile(pathname, 'utf8',function read(err, data) 
	{
		
		if (err) 
		{
			rs.protocol = 500;
			rs.send();
		}
		else {
			content = data;
			//console.log(content)
			rs.send(content);
		}
	});

	}).start(8081);