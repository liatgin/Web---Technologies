function OurRequest(data, commands)
{

	this.params = {};
	this.query = {};
	this.method = {};
	this.cookies = {};
	this.path = {};
	this.host = {};
	this.protocol = {};
	this.matchInd = -1;
	this.urlCommand;
	this.body = "";

	data = data.toString();
	//console.log(data);
	data = data.replace(/\r/g, "");
	
	var lines = data.split("\n"); // the http request
	
	
	var firstLine = lines[0].split(" ");
	this.method = firstLine[0]; //GET/POST/PUT/DELETE/OPTIONS/TRACE 
	var url = firstLine[1];
	this.protocol = firstLine[firstLine.length-1];
	url = url.substring(1); //take all url except for the first slash
	

	this.findCorrespondingCommand = function (command, commandsArr, startInd)
	{
		for (var i = startInd; i < commandsArr.length; i++)
		{

			var matchFound = true;
			var commandToComp = commandsArr[i].command;
			if (command.length >= commandToComp.length)
			{
							//compare command to commandToComp
			for (var j = 0; j < commandToComp.length; j++)
			{
				var p = command[j];
				var pComp = commandToComp[j];
				
				if ((pComp[0] != ':') && (pComp != '*') && (p != pComp))
				{
					matchFound = false;
					break;
				}
			}
			if (matchFound)
			{
				return i;
			}
			}

		}
		//no match was found
		return -1;
	}


	this.parseBody = function(i)
	{
		if (lines.length == i + 1)
		{
			this.body = null;
			return;
		}
		for (var j = i + 1; j < lines.length; j++)
		{
			
			this.body += lines[j];
		}
		

	}


	this.parseParams = function (paramsWithPath, commands)
	{
		var i = this.findCorrespondingCommand(paramsWithPath, commands, this.matchInd + 1);
		if (i == -1)
		{
			return;
		}
		this.matchInd = i;

		for (var j = 0; j < commands[i].command.length; j++)
		{
			var cur = commands[i].command;
			var partOfCommand = cur[j];
			//if part of command is of the form /:blabla/
			if (partOfCommand[0] == ':')
			{
				var varName = partOfCommand.substring(1);
				this.params[varName] = paramsWithPath[j];
			}
			//if the part of command is of the form /*
			if (partOfCommand == '*')
			{
				result = "";
				for (; j < paramsWithPath.length; j++)
				{
					result += paramsWithPath[j] + '/';
				}
				this.params['star'] = result.slice(0,result.length - 1);
				return;
			}
		}
	}
	

	var urlFirstSlashInd = url.indexOf('/');
	//there is only one '/'
	if (urlFirstSlashInd == -1)
	{
		var splitByQuote = url.split('?');
		if (splitByQuote.length > 1)
		{
			var indOfQuest = url.indexOf('?')
			this.path = '/' + url.substring(0, indOfQuest);
			this.query = splitByQuote[1];	
		}
		else
		{
			this.path = '/' + url;
		}
	}
	//there is more than one '/'
	else
	{
		this.path = '/' + url.substring(0, urlFirstSlashInd);
		var afterSlash = url.substring(urlFirstSlashInd + 1);
		//path part of request
		var urlByQuotationMark = afterSlash.split('?');
		var params = urlByQuotationMark[0].split('/');
		this.urlCommand = [this.path.slice(1)].concat(params)
		this.parseParams(this.urlCommand, commands);
		if (urlByQuotationMark.length != 1)
		{	
			this.query = urlByQuotationMark[1];
		}
	}

	for(var i = 1; i < lines.length; i++ )
	{
		if (lines[i] == "")
		{
			this.parseBody(i);
			break;
		}
		var currLine = lines[i].split(':');
		if (currLine[0] == "Host")
		{
			if (currLine[1].indexOf(':') == -1) //Host: www.tutorialspoint.com	
			{
				this.host = currLine[1];//host="www.tutorialspoint.com"
			}
			else
			{
				var indOfColon =  currLine[1].indexOf(':'); //Host: "example.com:3000"
				this.host = currLine[1].substring(0, indOfColon); //Host: "example.com:3000"
			}
		}		

		if (currLine[0] == "Cookies")
		{
			this.cookies =  currLine[1];
		}
	}

	
	
	this.get = function(field)
	{
		for(var i = 1; i < lines.length; i++)
		{
			var currLine = lines[i].split(':');
			if(currLine[0] == field)
			{
				return currLine[1];
			}
		}
		return;
	}

	this.param = function(field)
	{
		 return this.params[field];
	}

	this.is = function(field)
	{
		var contTypeStr = "Content-Type";
		for(var i = 1; i < lines.length; i++)
		{
			var currLine = lines[i].split(':');
			if(currLine[0].toUpperCase() == contTypeStr.toUpperCase())
			{
				var contType = currLine[1];
				var splitedContType = contType.split('/');
				if (field.toUpperCase() == contType.toUpperCase() || field.toUpperCase() == splitedContType[1].toUpperCase() || field.toUpperCase() == splitedContType[0].toUpperCase() +"/*")
				{
					return true;
				}
				return false
			}
		}
	}

}