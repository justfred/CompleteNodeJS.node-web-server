//server.js

const express = require('express');
const hbs = require('hbs');

//new express app
var app = express();

//express configurations
app.set('view engine', 'hbs');

//middleware
//serve the public directory
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('./home.hbs', {
    pageTitle: 'Home Page',
    currentYear: new Date().getFullYear(),
    welcomeMessage: 'Go Away.'
  });
});

app.get('/about', (req, res) => {
  res.render('./about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});

app.get('/bad', (req, res) => {
  res.send({errorMessage:'error handling request'});
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
