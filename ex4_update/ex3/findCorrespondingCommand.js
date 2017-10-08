//helper function for the next function
function findCorrespondingCommand(command, commandsArr, startInd)
{
	
	for (var i = startInd; i < commandsArr.length; i++)
	{
		var matchFound = true;
		
		var commandToComp = commandsArr[i];
		//compare command to commandToComp
		for (var j = 0; j < command.length; j++)
		{
			var p = command[j];
			var pComp = commandToComp[j];
			
			if ((p[0] != ':') && (pComp[0] != ':') && (p != pComp))
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
	//no match was found
	return -1;
	
	
}