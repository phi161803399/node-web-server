const express = require('express');
const path = require('path');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
// hbs.registerPartials(path.join(__dirname, 'views/partials'));
app.set('view engine', 'hbs');


// console.log(__dirname + '/public');
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'));
// console.log(path.join(__dirname, 'public'));


app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
      console.log('Unable to append to server.log.')
    }
  })
  next();
});

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

//if code below is commented out everything works fine if not page goes in maintenance mode
app.use((req, res, next) => {
  res.render('maintenance.hbs', {
    pageTitle: 'Maintenance page',
    maintenanceMessage: 'We\'ll be right back!'
  });
});

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => { //request, respons '/' local filesystem
  // res.send('<h1>Hello Express!</h1>');//responds when visiting url eg '/'
  // res.render
  // home.hbs
  res.render('home.hbs', {
    pageTitle: 'Home page',
    welcomeMessage: 'Welcome',
    name: 'Mark'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About page',
    name: 'Mark Huntjens'
  });
});



app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});// custom port for developing
