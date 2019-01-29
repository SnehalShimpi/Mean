var express = require('express');
var app = express();
//var Handlebars = require('handlebars');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config/config');



var products = require('./controllers/products');

var db;
app.use(bodyparser.json());
app.use(express.static('public'));



app.set('port',config.port);

//database connection
mongoose.connect(config.mongo.url, function(err, database){
    if(err) {
    console.log(err);
    process.exit(1);
    }
    
    db = database;
    console.log("database connection done, baby!");
    
    });
    

app.listen(app.get('port'), function(){
    console.log('Express Server Listing on port ::: 8080');
    });


app.all('/*',function(req,res,next){

res.header("Allow-Control-Allow-Order","*");
res.header("Allow-Control-Allow-Methods","GET, PUT, POST, DELETE, OPTIONS");
res.header("Allow-Control-Allow-Headers","Content-type,X-Acces-Token,X-Key");

if(req.method == 'OPTIONS') {
res.status(200).end();
}
else{
next();
}

});

//app.all('/myapi/*',[require('./middlewares/validateRequest')]);
app.use('/',require('./routes'));


app.use(function(req,res,next){
    res.status(404).json({status:"Page Not Found,Sorry Buddy..."}).end();
    });

