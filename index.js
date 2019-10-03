var express = require('express');
var app = express();
var mongoose = require('mongoose');
var apiRoutes = require("./api-routes");
var bodyParser = require('body-parser');
var rpg_model  = require('./RPGModel')
var port = process.env.PORT || 8080;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/rpg_api', { useNewUrlParser: true});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
 }));
app.use('/', apiRoutes);


var db = mongoose.connection;
if(!db)
    console.log("Error connecting db")
else
    console.log(db.name+"Db connected successfully")

 
app.get('/', (req, res) => res.send('first page'));
app.listen(port, function () {
    console.log("Running RestHub on   port " + port);
})
