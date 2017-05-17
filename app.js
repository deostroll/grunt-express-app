const express = require('express');
const path = require('path');
var rootPath = __dirname;
var app = express();

app.use(express.static(path.join(rootPath, 'public')));

app.get('/hello', (req, res) => {
  res.send('hello world');
});

app.get('/echo', (req, res) => {
  res.end('echoooo');
});
module.exports = app;
