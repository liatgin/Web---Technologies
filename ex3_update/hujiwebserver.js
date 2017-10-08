const net = require('net');
var fs = require("fs")
var vm = require('vm')
var content = fs.readFileSync('./ourResponse.js');
vm.runInThisContext(content);
var content2 = fs.readFileSync('./ourRequest.js');
vm.runInThisContext(content2);

module.exports = 
{
    commands : [],

    use : function(c, mw)
    {
  		if(arguments.length == 1)
  		{
  			mw = c;
  			c = "";
  			this.commands.push({command: c, middleware:mw});
  			return this;
  		}
		else if (c[0] == '/')
        {
        	c = c.slice(1);
        }
         this.commands.push({command:c.split("/"), middleware:mw});
         return this;
    },
  	start : function(prt, callbackFunc)
  	{
		var that = this;
		try {
	    var server = net.createServer(function (c) 
	    {
	    	


	    //collecting the data using socket 'on' method 
		var txt = "";
		
		c.on('data', function(d)
		{
			txt = d.toString();

			var request =  new OurRequest(d, that.commands);
			var response = new OurResponse(request.protocol, c);


			tmout = setTimeout(function(){ 
				if (response.sendOrJson == false) 
				{
					response.statusCode = 404; 
					response.send(); 
				}  
			}
				
			
		, 25000); //25 seconds}
			// TODO: check if next knows the update upon request object
			var next = function()
			{
		  		request.parseParams(request.urlCommand, that.commands);

		  		if (request.matchInd == -1)
		  		{
		  			response.statusCode = 404;
		  			response.send();
		  		}
		  		else
	  			{
	  				that.commands[request.matchInd].middleware(request, response, next);
	  			}
			}
			if (request.matchInd == -1)
			{
		  		response.statusCode = 404;
		  		response.send();
			}
			else
			{
				that.commands[request.matchInd].middleware(request, response, next);
			}
			
		});
		

	 });   
	}
	 catch(err) {
	 	if (response != undefined)
	 	{
	 		response.statusCode = 500; //general error
	 		response.send();
	 	}
	 }
	server.on('error', function() 
	{
		callbackFunc("error - connection disconnected");
	});
	
	server.listen(prt, function() 
	{
		console.log('server bound'); //debugging
	});
   //you need to return a serverObj object that wraps the server variable which allow you to stop listening 
   	serverObj = {port : prt, stop : function(){server.close()}};//TODO
    return serverObj; 
    },
}