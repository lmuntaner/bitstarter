var express = require('express');
var fs = require('fs');

//var homepage = fs.readFileSync('index.html');
var buf = new Buffer(fs.readFileSync('index.html'));
var file_text = buf.toString('utf8');

App.get('/', function(request, response) {
  response.send(file_text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
