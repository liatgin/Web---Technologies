statCodeDict = {200:'OK', 301:'Moved Permanently', 302 : 'Found', 303:'See Other',404:'Not Found', 500:'Internal Server Error'};


function OurResponse(protocolType, sckt)
{
	var that = this;


	this.header = {};
	this.statusCode = 200;
	this.cookies = {};
	this.protocol = protocolType;
	this.socket = sckt;
	this.body = "";
	this.sendOrJson = false;


	
	this.set = function(field, value) 
	{
		
		//if both field and value were given insert them to header
		if (value != undefined)
		{
			this.header[field] = value;
		}
		
		else
		{
			for (var prop in field)
			{
				this.header[prop] = field[prop];
			}
		}
	}
	
	/*
	* set the statusCode
	*/
	this.status = function(code) {
		this.statusCode = code;
	}
	
	/* get the value of the field given as an argument
	*/
	this.get = function(field) {
		var field = field.toLowerCase();
		return this.header[field];
	}
	
	/*set a new cookie
	*/
	this.cookie = function(key, value) {
		this.cookies[key] = value;
		
	}
		
		
	/** send an http response to the client
	*/
	this.send = function(body) {
		this.sendOrJson = true;
		//send a message without a body in case it is empty
		if (arguments.length == 1)
		{
			//this.set("Content-Type", "text/html");
			this.set("Content-Length", body.length);
			this.body = body;
		}
		
		
		var statCodeString = statCodeDict[this.statusCode];
		
		if (statCodeString == undefined)
		{
			statCodeString = "otherStatus";
		}
		
		//start writing the html response string
		responseText = this.protocol + " " + this.statusCode.toString() + " " + statCodeString + "\n";
		for (var name in this.header)
		{
			responseText += name + ":" + this.header[name] + "\n";
		}
		
		for (var cookieName in this.cookies)
		{
			responseText += "Set-Cookie" + ":" + this.cookies[cookieName] + "\n";
		}
		
		responseText += "\n" + this.body;
		//console.log(responseText); //keep for debugging
		
		
		
		//write response to socket
		this.socket.end(responseText);
		
	}
	
	/** send response with body as a json string */
	this.json = function(body) {
		this.sendOrJson = true;
		//set the right headers for json text
		this.set("Content-Type", "application/json");
		this.set("Content-Length", body.length);
		this.body = JSON.stringify(body);
		//send response and close socket
		this.send();
		
		
	}
	
	setTimeout(function(){ 
		if (that.sendOrJson == false) 
		{
			that.statusCode = 404; 
			that.send();}  
		}
	, 10000); //10 seconds


	return this;
	

	
}