var express = require('express');
var app = express();
var path = require('path');

//app.use(express.static('public'));
app.use('/public/pokedex.css', function(req,res){
  res.sendFile(path.resolve('public/pokedex.css'))
});

app.use('/public/bundle.js', function(req,res){
  res.sendFile(path.resolve('public/bundle.js'))
});

app.get('/pokedex', function (req, res) {
  res.sendFile(path.resolve('index.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
