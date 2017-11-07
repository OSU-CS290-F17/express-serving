var express = require('express');
var app = express();

app.get('/', function (req, res, next) {
  var content = "<html>";
  content += "<body>";
  content += "<h1>Welcome to our page</h1>";
  content += "</body>";
  content += "</html>";

  res.status(200).send(content);
  // res.status(200);
  // res.send(content);
});

app.get('/cats', function (req, res, next) {
  var content = "<html>";
  content += "<body>";
  content += "<h1>Welcome to our Cats page</h1>";
  content += "</body>";
  content += "</html>";

  res.status(200).send(content);
});

app.get('*', function (req, res, next) {
  res.status(404).send("Requested page not found");
});

app.post('*', function (req, res, next) {
  res.status(405).send("POSTs not allowed");
});

app.listen(8000, function () {
  console.log("== Server listening on port 8000");
});
