//server.js

const express = require('express');

//new express app
var app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello Express!<h1> \
  <a href="/about">about</a> \
  <a href="/bad">bad</a>');
  // res.send('{"foo":"bar"}');
});

app.get('/about', (req, res) => {
  res.send('about page');
});

app.get('/bad', (req, res) => {
  res.send({errorMessage:'error handling request'});
});

app.listen(3000);
