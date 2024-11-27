var fs = require('fs');
var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res){
	var parts = url.parse(req.url)
	console.log('url/path:', req.url, parts.pathname);
	var contents = "Нет такой страницы";
	if (req.url == "/") {
		contents = fs.readFileSync(__dirname + "/products.html");
	} else {
		try {
			contents = fs.readFileSync(__dirname + parts.pathname);
		} catch (e) {
			console.log("Не удалось прочитать файл:", parts.pathname);
		}
	}
	res.end(contents);
}).listen(8080);
