var http = require("http");
var fs = require("fs");
var server = http.createServer(function(request,response){
	var url = request.url;
	if(url == "/"){
		response.end("index.html not fjquery-2.1.1.min.jsound");
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

