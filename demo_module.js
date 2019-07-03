//require module(s)
var http = require('http');
var dt = require('./myfirstmodule');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  //Prints to the window
  res.write("The date and time currently: " + dt.myDateTime());
  res.end();
  //listen to this port
}).listen(8080);
