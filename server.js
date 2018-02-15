//server.js

const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

//new express app
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
//express configurations
app.set('view engine', 'hbs');

//middleware

//sample middleware - logging
app.use((req, res, next) => {
  const now = new Date().toString();

  var log = `${now}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
      console.log('Unable to append to server.log');
    }
  });
  next();
});
//example middleware without next
// app.use((req, res, next) => {
//   res.render('./maintenance.hbs');
// });
//serve the public directory
app.use(express.static(__dirname + '/public'));

//sample hbs helpers
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});
hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  res.render('./home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Go Away.'
  });
});

app.get('/about', (req, res) => {
  res.render('./about.hbs', {
    pageTitle: 'About Page'
  });
});

app.get('/bad', (req, res) => {
  res.send({errorMessage:'error handling request'});
});

//heroku dynamic port binding
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
