var http = require("http");
var fs = require("fs");
var server = http.createServer(function(request,response){
	var url = request.url;
	if(url == "/"){
		response.end("index.html not found");
	}
	else if(url.match(/Cricketers/) != null){
		getCricketers(request,response);
	}
	else if(url.match(/Hello/) != null){
		greet(request,response);
	}
/*	else if(url.match(/Hi/) != null){
		greetJSONP(request,response);
	}*/
	else if(url.match(/Cities/) != null){
		getCitiesListInJSON(request,response);
		//getCitiesList(request,response);
	}
	else if(url.match(/Timer/) != null){
		response.end(new Date() + "");
	}
	else if(url.match(/World/) != null){
		getInfo(request,response);
	}
	else if(url.match(/people/) != null){
		console.log("server is running");
		getPeople(request,response);
	}
	else if(url.match(/authenticate/)!=null){
		console.log("helrejhlrtgjh");
		getAuthentication(request,response);
	}
	else{
		var fileName = url.substring(1);
		if(fileName.indexOf("?") != -1)
			fileName = fileName.substring(0,fileName.indexOf("?"));
		sendFile(fileName,response);
	}
});
function sendFile(fileName,response){
	fs.readFile(fileName,function(err,data){
		if(err)
 			response.end("File " + fileName + " not found");
		else
			response.end(data);
	});
}
server.listen(8080);
console.log("Server is running and waiting for requests");

function getPeople(request,response){
	var data = {
		people : [
			{name:"Virat",age:26,country:"India"},
			{name:"Shikar Dawan",age:28,country:"India"},
			{name:"Rohit Sharma",age:28,country:"India"},
			{name:"De Villiers",age:34,country:"SA"},
			{name:"George Bailey",age:28,country:"Australia"}
		]
	};
	response.end(JSON.stringify(data));
}

function getAuthentication(request,response){
	console.log(request);
	var queryString = require("url")
					.parse(request.url,true)
					.query;
	var username = queryString.username;
	var password = queryString.password;
	console.log(username);
	if(username=="admin" && password=="admin"){
		console.log("print message");
		var output = { message : "Login Successful"};
		
	}
	else{
		var output = { message : "Login UnSuccessful"};
	}
	response.end(JSON.stringify(output));
}

function getCricketers(request,response){
	var data = {
		cricketerslist : [
			{name:"Virat",age:26,country:"India"},
			{name:"Shikar Dawan",age:28,country:"India"},
			{name:"Rohit Sharma",age:28,country:"India"},
			{name:"De Villiers",age:34,country:"SA"},
			{name:"George Bailey",age:28,country:"Australia"}
		]
	};
	response.end(JSON.stringify(data));
}
function greetJSONP(request,response){
	var queryString = require("url")
					.parse(request.url,true)
					.query;
	var callback = queryString.callback;
	if(callback == "ajsdglksajdfgaklsjdfhg"){
		var name = queryString.name;
		var obj = { message : "Hello " + name};
		var output = JSON.stringify(obj);
		output = callback + "(" + output + ")";
		response.end(output);	
	}
	else
		response.end("I'm confused");
}

function greet(request,response){
	response.setHeader("Access-Control-Allow-Origin",
	"*");
	var queryString = require("url")
					.parse(request.url,true)
					.query;
	var name = queryString.name;
	var output = { message : "Hello " + name};
	response.end(JSON.stringify(output));
}

function getCitiesListInJSON(request,response){
	var data = {
		cities : [
		 {name:"Chennai"},{name:"Pune"},{name:"Houston"},
		 {name:"Cochin"},{name:"Bangalore"},{name:"Mumbai"}
	   ]
	};
	response.end(JSON.stringify(data));
}

function getCitiesList(request,response){
	var cities = ["Pune","Chennai","London","Cochin","Mumbai","Shimla","Houston","New York"];
	response.end(JSON.stringify(cities));
}
function getInfo(request,response){
	var queryString = require("url")
					.parse(request.url,true)
					.query;
	var country = queryString.country;
	var output = {capital:"Not available in DB"};
	if(country == "India")
		output = {capital:"New Delhi"};
	else if(country == "USA")
		output = {capital:"Washington DC"};
	else if(country == "UK")
		output = {capital:"London"};
	response.end(JSON.stringify(output));	
}