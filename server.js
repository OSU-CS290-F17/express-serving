var express = require('express');
var logger = require('./logger');
var app = express();

app.use(logger);

app.use(function (req, res, next) {
  var now = new Date();
  req.timeStamp = now.toString();
  next();
});

app.get('/', function (req, res, next) {
  var content = "<html>";
  content += "<body>";
  content += "<h1>Welcome to our page</h1>";
  content += "<p>Requested at: " + req.timeStamp + "</p>";
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

app.get('/photos/:userId/:photoId', function(req, res) {

  console.log("== Photo page requested, req.params:", req.params);

  var content = "<html>";
  content += "<body>";
  content += "<h1>Requested a photo page</h1>";
  content += "<p>Requested user: " + req.params.userId + "</p>";
  content += "<p>Requested photo: " + req.params.photoId + "</p>";
  content += "</body>";
  content += "</html>";

  res.status(200).send(content);

});

app.use(express.static('public'));

app.get('*', function (req, res, next) {
  res.status(404).send("Requested page not found");
});

app.post('*', function (req, res, next) {
  res.status(405).send("POSTs not allowed");
});

app.listen(8000, function () {
  console.log("== Server listening on port 8000");
});
