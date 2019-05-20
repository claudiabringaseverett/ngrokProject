var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Twilio users!');
});

app.listen(3000, function () {
  console.log('Example app on port 3000!');
});