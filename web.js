var express = require('express');
var fs = require('fs');

//var homepage = fs.readFileSync('index.html');
//var buf = new Buffer(homepage);
//var file_text = buf.toString('utf8');
var prova = 'Hello you stupid world';

App.get('/', function(request, response) {
  response.send('Hello stupid world');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
