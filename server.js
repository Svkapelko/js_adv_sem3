var fs = require('fs');
var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res){
	console.log('url:', req.url);
	var contents = "Нет такой страницы";
	if (req.url == "/") {
		contents = fs.readFileSync(__dirname + "/add.html");
	} else {
		try {
			contents = fs.readFileSync(__dirname + req.url);
		} catch (e) {
			console.log("Не удалось прочитать файл:", req.url);
		}
	}
	res.end(contents);
}).listen(8080);
