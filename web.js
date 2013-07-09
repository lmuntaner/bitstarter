var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
/*
fs.readFileSync('index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var file_text = data;
});
*/

var file_text = new Buffer(fs.readFileSync('index.html'));

app.get('/', function(request, response) {
  response.send(file_text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
