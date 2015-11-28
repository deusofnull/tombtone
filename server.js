var express = require('express');
var expresshbs = require('express-handlebars');

var app = express();

app.engine('handlebars', expresshbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



app.get('/', function(req,res){
  res.render("index", {
    name: "Home"
  });
});

app.get('/about', function(req,res){
  res.render("about", {
    name: "About"
  });
});

app.get('/groups', function(req,res){
  res.render("groups", {
    name: "Groups"
  });
});

app.get('/shows', function(req,res){
  res.render("shows", {
    name: "shows"
  });
});

app.get('/contact', function(req,res){
  res.render("contact", {
    name: "contact"
  });
});

app.use(express.static('styles'));
app.use('/media/images/', express.static('media/images/'));

var port = Number(process.env.PORT || 5000);
app.listen(port);
