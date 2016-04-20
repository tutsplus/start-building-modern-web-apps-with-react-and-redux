var express = require('express');
var bodyParser = require('body-parser');

var data = {};

express()
  .use(express.static(__dirname + '/public'))
  .use(bodyParser.json())
  .get('/api/data', (req, res) => res.json(data))
  .post('/api/data', (req, res) => res.json(data = req.body))
  .get('*', (req, res) => res.sendFile(__dirname + '/public/index.html'))
  .listen(3333);
