var express = require('express'); 
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: '',
     database: 'weather'
});
connection.connect();

app.post('/data', function(req, res, next){
   var cope = req.body.params;
   var query = connection.query('insert into data set?', cope, function(err, result) {
     if (err) {
       console.error(err);
       return res.send(err);
     } else {
       return res.send('Ok');
     }
});
app.listen(8080);