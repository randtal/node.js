//require module
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  //Prints to the window
  res.end('Hello World!');
  //listen to this port
}).listen(8080);
