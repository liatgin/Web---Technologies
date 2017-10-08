ex4
Details
Activity
LAST WEEK
A
Avi Hendler edited an item
Fri 11:09 PM
Javascript
mainBinary.js
A
Avi Hendler edited an item
Fri 11:09 PM
HTML
binary.html
A
Avi Hendler edited an item
Fri 11:09 PM
Javascript
OurResponse.js
A
Avi Hendler edited an item
Fri 11:09 PM
Javascript
ourRequest.js
A
Avi Hendler edited an item
Fri 11:09 PM
Javascript
main.js
A
Avi Hendler edited an item
Fri 11:09 PM
Javascript
hujiwebserver.js
L
You uploaded an item
Fri 3:50 PM
Javascript
main.js
L
You removed an item from
Fri 3:50 PM
Google Drive Folder
ex4
Javascript
main.js
L
You uploaded 2 items
Fri 3:49 PM
Javascript
mainBinary.js
HTML
binary.html
L
You removed 2 items from
Fri 3:49 PM
Google Drive Folder
www
HTML
binary.html
Javascript
mainBinary.js
L
You edited an item
Fri 3:48 PM
Javascript
main.js
L
You edited an item
Fri 3:48 PM
Javascript
mainBinary.js
L
You edited an item
Fri 3:48 PM
HTML
binary.html
A
Avi Hendler edited an item
Jan 16
Javascript
mainBinary.js
A
Avi Hendler uploaded 2 items
Jan 16
Javascript
mainBinary.js
HTML
binary.html
A
Avi Hendler uploaded 4 items
Jan 16
Javascript
OurResponse.js
Javascript
main.js
Javascript
hujiwebserver.js
Javascript
ourRequest.js
A
Avi Hendler created and shared an item in
Jan 16
Google Drive Folder
ex4
Google Drive Folder
www
L
Can edit
You
A
Avi Hendler created and shared an item in
Jan 16
Google Drive Folder
internet
Google Drive Folder
ex4
L
Can edit
You
No recorded activity before January 16, 2017
All selections cleared

New Team Drive

//var XMLHttpRequest  = require("xmlhttprequest").XMLHttpRequest;

window.onload = function ()
{
	var button0 = document.getElementById("button0");
	var button1 = document.getElementById("button1");
	var buttonReset = document.getElementById("buttonReset");
	var buttonContinue = document.getElementById("buttonContinue");

	// sending a massage to "/gamble/0" POST using AJAX
	button0.addEventListener("click", function()
							{
							 httpRequest1 = new XMLHttpRequest();
					 		 httpRequest1.open('POST', 'http://localhost:8081/gamble/0', true);
					 		 httpRequest1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
					 		 httpRequest1.responseType = 'text';
					 		 httpRequest1.onload = function () 
					 		 {
							 	button0.style.display = "none";
							 	button1.style.display = "none";
							 	var text = document.getElementById("textBox");
							 	//console.log(httpRequest1.responseText);
							 	text.innerText = httpRequest1.responseText;
							 }; 

					 		 httpRequest1.send(null);

							});

	button1.addEventListener("click", function()	
							{
							 httpRequest2 = new XMLHttpRequest();
					 		 httpRequest2.open('POST', 'http://localhost:8081/gamble/1', true);
					 		 httpRequest2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
					 		 httpRequest2.responseType = 'text';
					 		 httpRequest2.onreadystatechange  = function () 
					 		 {
							 	button0.style.display = "none";
							 	button1.style.display = "none";
							 	var text = document.getElementById("textBox");
							 	//console.log(httpRequest2.responseText);
							 	text.innerText = httpRequest2.responseText;
							 };
					 		 
					 		 httpRequest2.send(null);
					 		 
							});
	buttonReset.addEventListener("click", function()
								{
									httpRequest3 = new XMLHttpRequest();
							 		httpRequest3.open('DELETE', 'http://localhost:8081/gamble/reset', true);
							 		httpRequest3.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
							 		httpRequest3.responseType = 'text';
							 		httpRequest3.onreadystatechange  = function () 
							 		{
									 	button0.style.display = "none";
									 	button1.style.display = "none";
									 	var text = document.getElementById("textBox");
									 	//console.log(httpRequest3.responseText);
									 	text.innerText = httpRequest3.responseText;
									};
							 		
							 		httpRequest3.send(null);
								});


	buttonContinue.addEventListener("click", function()
							{
								button0.style.display = "initial";
							    button1.style.display = "initial";
							});
}







