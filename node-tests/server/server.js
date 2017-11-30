const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res
    .status(200)
    .send([{
        name: 'Guus',
        age: 31
      }, {
        name: 'Mark',
        age: 40
      }, {
        name: 'Anselm',
        age: 33
      }]);
});

app.listen(3000, () => {
  console.log('server is up on port 3000');
});

module.exports.app = app;
