// global vars
var field1_name = "login";
var field2_name = "password"

window.onload = function()
{
	createInputFields();
	createButton("Login");
}

function createInputFields()
{
	document.write("<br>");
	var body = document.getElementsByTagName("body")[0];
	var input1 = document.createElement("input"); //input element, text
	input1.type = "text"; 
	input1.setAttribute("value","login");
	input1.setAttribute("id", "text1");
	body.appendChild(input1);
	document.write("<br>");

	document.write("<br>");
	var input2 = document.createElement("input"); //input element, text
	input2.type = "password"; 
	input2.setAttribute("name","password");
	input2.setAttribute("value","password");
	input2.setAttribute("id", "text2");
	body.appendChild(input2);
	document.write("<br>");
}


function createButton(button_name)
{
	var body = document.getElementsByTagName("body")[0];
	var divLogin = document.createElement("div");
	body.appendChild(divLogin);
	document.write("<br>");
	if (button_name === "Login")
	{
		var buttonL = document.createElement("button");
		document.write("<br>");
		buttonL.innerHTML = button_name;
		buttonL.setAttribute("id", "buttonL");
		divLogin.appendChild(buttonL);
		buttonL.addEventListener ("click", clickHandlerLogin);
	}
	else if(button_name === "calculator")
	{
		var buttonC = document.createElement("button");
		buttonC.innerHTML = button_name;
		buttonC.setAttribute("id", "buttonC");
		body.appendChild(buttonC);
		buttonC.addEventListener ("click", clickHandlerCalc);
	} 

	else if(button_name === "add")
	{
		var buttonAdd = document.createElement("button");
		buttonAdd.innerHTML = button_name;
		buttonAdd.setAttribute("id", "buttonAdd");
		body.appendChild(buttonAdd);
		buttonAdd.addEventListener("click", clickHandlerAdd);
	}
}


function clickHandlerLogin()
{
	//console.log("bye")
	input1 = document.getElementById("text1");
	input2 = document.getElementById("text2");

	console.log(input1.value);
	console.log(input2.value);
	if (input1.value != "login" && input2.value != "password" && input1.value === input2.value && input1.value === "admin")
	{
		createButton("calculator");
		createBodyStyle();
		createHeaders();
		createList();
	}
	else if(input1.value != "login" && input2.value != "password")
	{
		alert("Incorrect login or password, Try Again!");
	}
}

function createBodyStyle()
{
	document.getElementsByTagName("body")[0].style.fontSize = "20px";
    document.getElementsByTagName("body")[0].style.color = "#C71585";
    document.getElementsByTagName("body")[0].style.backgroundColor = "#F5F5F5";  
    document.getElementsByTagName("body")[0].style.margin = "50px";
}


function createHeaders()
{
	console.log("createHeaders");
	var body = document.getElementsByTagName("body")[0];
	
    document.getElementById("buttonL").style.display = "none";//block
    document.getElementById("text1").style.display = "none";
    document.getElementById("text2").style.display = "none";
   

     var h1 = document.createElement ("h1");
     h1.innerHTML = "MY DOG COCO";
     h1.setAttribute("id", "h1");
	 body.appendChild (h1);
	 document.getElementById("h1").style.color = "#C71585";
     document.getElementById("h1").style.backgroundColor = "silver";
     document.getElementById("h1").style.textDecoration = "none";
     document.getElementById("h1").style.textTransform = "uppercase";
     document.getElementById("h1").style.borderStyle = "dashed";
     document.getElementById("h1").style.borderWidth = "3px";
     document.getElementById("h1").style.borderLeftWidth = "3px";
     document.getElementById("h1").style.borderRightWidth = "3px";
	 document.getElementById("h1").style.color =  "#C71585";
	 var hr1 = document.createElement("hr");
	 document.body.appendChild(hr1);
	 hr1.setAttribute("id", "hr1");

	 createImage();

	 var h2 = document.createElement ("h2");
     h2.innerHTML = "DETAILS ABOUT ME";
     h2.setAttribute("id", "h2");
	 body.appendChild (h2);
	 document.getElementById("h2").style.color = "#C71585";
     document.getElementById("h2").style.backgroundColor = "silver";
     document.getElementById("h2").style.textDecoration = "none";
     document.getElementById("h2").style.textTransform = "uppercase";
     document.getElementById("h2").style.borderStyle = "dashed";
     document.getElementById("h2").style.borderWidth = "3px";
     document.getElementById("h2").style.borderLeftWidth = "3px";
     document.getElementById("h2").style.borderRightWidth = "3px";
	 document.getElementById("h2").style.color =  "#C71585";
	 var hr2 = document.createElement("hr");
	 hr2.setAttribute("id", "hr2");
	 document.body.appendChild(hr2);
}

function createImage()
{
	var src = "cocoE.png";
	var width = 300;
	var height = 300;
	var alt = "Coco"
	var img = document.createElement ("img");
	img.src = src;
	img.width = width;
	img.height = height;
	img.alt = alt;
    img.setAttribute("id", "img");
    document.body.appendChild(img);
}

function createList()
{
	var ul = document.createElement ("ul");
    ul.setAttribute("id","ul");
    document.body.appendChild(ul);
    //style stuff//bold text///////////////
    st1 = document.createElement("STRONG");
    st2 = document.createElement("STRONG");
    st3 = document.createElement("STRONG");
    st4 = document.createElement("STRONG");
    ///////////////////////////////////////
    t1 = document.createTextNode("Full Name: ");
    t2 = document.createTextNode("ID: ");
    t3 = document.createTextNode("Something interesting: ");
    t4 = document.createTextNode("Favorite link: ");
   
    var li1 = document.createElement('li');
    st1.appendChild(t1);
    li1.appendChild(st1);
    ul.appendChild(li1);
    li1.innerHTML= li1.innerHTML + "Liat Ginosar";
    
    var li2 = document.createElement('li');
    st2.appendChild(t2);
    li2.appendChild(st2);
    ul.appendChild(li2);
    var id_str = "305470924";
    id_str = id_str.italics();
    li2.innerHTML= li2.innerHTML + id_str;

    var li3 = document.createElement('li');
    st3.appendChild(t3);
    li3.appendChild(st3);
    ul.appendChild(li3);
    li3.innerHTML= li3.innerHTML + "I love pugs mine named COCO";

    // link to google
    var newA = document.createElement('a');
    var li4 = document.createElement('li');
  	newA.setAttribute('href', "http://www.google.com");
  	var google_str = "GOOGLE";
  	google_str = google_str.italics();
  	newA.innerHTML = google_str;
  	st4.appendChild(t4);
  	li4.appendChild(st4);
  	li4.appendChild(newA);
  	ul.appendChild(li4);
}


function clickHandlerCalc()
{
	hideScreens();
	createButton("add");
	new Calc();
}

function clickHandlerAdd()
{
	  new Calc();
}


function Calc()
{
	this.divCalc = document.createElement("div");
	this.divCalc.setAttribute("class", "calculator");
	document.body.appendChild(this.divCalc);

	this.form = document.createElement("form");
	this.form.setAttribute("name", "Calc");
	this.divCalc.appendChild(this.form);

	this.table = document.createElement("table");
	this.table.setAttribute("border", 4);
	this.form.appendChild(this.table);

	this.tr1 = document.createElement("tr");
	this.form.appendChild(this.tr1);
	this.td1 = document.createElement("td");
	this.tr1.appendChild(this.td1);
	this.solution = document.createElement("input");
	this.td1.appendChild(this.solution);
	this.solution.setAttribute("type" , "textfield");
	this.solution.setAttribute("name" , "ans");
	this.solution.setAttribute("value" , "");
	this.solution.setAttribute("id", "solution");
	this.solution.setAttribute("size" , "16");
	document.write("<br>");

	this.tr2 = document.createElement("tr");
	this.td2 = document.createElement("td");

	this.input1 = document.createElement("input");
	this.input1.setAttribute("type", "button");
	this.input1.setAttribute("name", "one");
	this.input1.setAttribute("value" ,"  1  ");
	this.td2.appendChild(this.input1);
	//console.log(Calc.ans);
	this.input1.addEventListener("click", function(){document.getElementById("solution").value += '1'});

	this.input2 = document.createElement("input");
	this.input2.setAttribute("type", "button");
	this.input2.setAttribute("name", "two");
	this.input2.setAttribute("value" ,"  2  ");
	this.td2.appendChild(this.input2);
	this.input2.addEventListener("click", function(){document.getElementById("solution").value += '2'});

	this.input3 = document.createElement("input");
	this.input3.setAttribute("type", "button");
	this.input3.setAttribute("name", "three");
	this.input3.setAttribute("value" ,"  3  ");
	this.td2.appendChild(this.input3);
	this.input3.addEventListener("click", function(){document.getElementById("solution").value += '3'});

	this.input4 = document.createElement("input");
	this.input4.setAttribute("type", "button");
	this.input4.setAttribute("name", "plus");
	this.input4.setAttribute("value" ,"  +  ");
	this.td2.appendChild(this.input4);
	this.input4.addEventListener("click", function(){document.getElementById("solution").value += '+'});
	this.br1 = document.createElement("BR");
	this.td2.appendChild(this.br1);

	this.input5 = document.createElement("input");
	this.input5.setAttribute("type", "button");
	this.input5.setAttribute("name", "four");
	this.input5.setAttribute("value" ,"  4  ");
	this.td2.appendChild(this.input5);
	this.input5.addEventListener("click", function(){document.getElementById("solution").value += '4'});

	this.input6 = document.createElement("input");
	this.input6.setAttribute("type", "button");
	this.input6.setAttribute("name", "five");
	this.input6.setAttribute("value" ,"  5  ");
	this.td2.appendChild(this.input6);
	this.input6.addEventListener("click", function(){document.getElementById("solution").value += '5'});

	this.input7 = document.createElement("input");
	this.input7.setAttribute("type", "button");
	this.input7.setAttribute("name", "six");
	this.input7.setAttribute("value" ,"  6  ");
	this.td2.appendChild(this.input7);
	this.input7.addEventListener("click", function(){document.getElementById("solution").value += '6'});

	this.input8 = document.createElement("input");
	this.input8.setAttribute("type", "button");
	this.input8.setAttribute("name", "minus");
	this.input8.setAttribute("value" ,"  -  ");
	this.td2.appendChild(this.input8);
	this.input8.addEventListener("click", function(){document.getElementById("solution").value += '-'});
	this.br2 = document.createElement("BR");
	this.td2.appendChild(this.br2);

	this.input9 = document.createElement("input");
	this.input9.setAttribute("type", "button");
	this.input9.setAttribute("name", "seven");
	this.input9.setAttribute("value" ,"  7  ");
	this.td2.appendChild(this.input9);
	this.input9.addEventListener("click", function(){document.getElementById("solution").value += '7'});

	this.input10 = document.createElement("input");
	this.input10.setAttribute("type", "button");
	this.input10.setAttribute("name", "eight");
	this.input10.setAttribute("value" ,"  8  ");
	this.td2.appendChild(this.input10);
	this.input10.addEventListener("click", function(){document.getElementById("solution").value += '8'});

	this.input11 = document.createElement("input");
	this.input11.setAttribute("type", "button");
	this.input11.setAttribute("name", "nine");
	this.input11.setAttribute("value" ,"  9  ");
	this.td2.appendChild(this.input11);
	this.input11.addEventListener("click", function(){document.getElementById("solution").value += '9'});

	this.input12 = document.createElement("input");
	this.input12.setAttribute("type", "button");
	this.input12.setAttribute("name", "times");
	this.input12.setAttribute("value" ,"  X  ");
	this.td2.appendChild(this.input12);
	this.input12.addEventListener("click", function(){document.getElementById("solution").value += '*'});
	this.br3 = document.createElement("BR");
	this.td2.appendChild(this.br3);

	this.input13 = document.createElement("input");
	this.input13.setAttribute("type", "button");
	this.input13.setAttribute("name", "clear");
	this.input13.setAttribute("value" ,"  c  ");
	this.td2.appendChild(this.input13);
	this.input13.addEventListener("click", function(){document.getElementById("solution").value = ''});

	this.input14 = document.createElement("input");
	this.input14.setAttribute("type", "button");
	this.input14.setAttribute("name", "zero");
	this.input14.setAttribute("value" ,"  0  ");
	this.td2.appendChild(this.input14);
	this.input14.addEventListener("click", function(){document.getElementById("solution").value += '0'});

	this.input15 = document.createElement("input");
	this.input15.setAttribute("type", "button");
	this.input15.setAttribute("name", "doIt");
	this.input15.setAttribute("value" ,"  =  ");
	this.td2.appendChild(this.input15);
	this.input15.addEventListener("click", function(){document.getElementById("solution").value = eval(document.getElementById("solution").value)});

	this.input16 = document.createElement("input");
	this.input16.setAttribute("type", "button");
	this.input16.setAttribute("name", "div");
	this.input16.setAttribute("value" ,"  /  ");
	this.td2.appendChild(this.input16);
	this.input16.addEventListener("click", function(){document.getElementById("solution").value += '/'});
	this.br4 = document.createElement("BR");
	this.td2.appendChild(this.br4);

	this.tr2.appendChild(this.td2);
	this.form.appendChild(this.tr2);
}

// hide screens 1 and 2
function hideScreens()
{
	document.getElementById("h1").style.display = "none";//block
    document.getElementById("h2").style.display = "none";
    document.getElementById("hr1").style.display = "none";
    document.getElementById("hr2").style.display = "none";
    document.getElementById("img").style.display = "none";
    document.getElementById("ul").style.display = "none";
}