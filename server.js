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

app.use(express.static('styles'));
app.use('/media/images/', express.static('media/images/'));

var port = Number(process.env.PORT || 5000);
app.listen(port);
