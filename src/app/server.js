var express = require('express');
   var bodyParser = require('body-parser');
   var mysql = require('mysql');
   var app = express();

    app.use(bodyParser.json({limit: '50mb'}));
    app.use(express.static('public'));

  var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'weather'
   });
   connection.connect();

    app.post('/', function(req, res, next) {
    var cope = req.body;
    console.log('request received:', req.body);
   var query = connection.query('insert into data set ?', cope, function (err,result) {
    if (err) {
        console.error(err);
        return res.send(err);
    } else {
        return res.send('Ok');
    }
    });
    //res.send('received the data.');
    });
    app.listen(3000);