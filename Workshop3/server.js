var express = require('express');  //used for routing
var app = express();
var http = require('http').Server(app); //used to provide http functionality
var path = require('path');
var bodyParser = require('body-parser');

require('./routes/accountroute.js')(app,path);
require('./routes/loginroute.js')(app,path);

app.use(bodyParser.json());
app.use(express.static(__dirname + '/www'));

let server = http.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("My First Nodejs Server!");
    console.log("Server listening on: " + host + " port: " + port);
});

app.post('/login/api/login', function(req, res){
    if (!req.body){
        return res.endStatus(400);
    }

    var customer = {};
    var valid;
    customer.email = req.body.email;
    customer.upwd = req.body.upwd;
    if(req.body.email == 'chimmy@com.au' && req.body.upwd == 'chim'){
        valid = '{"ok":true}';
    }  else if(req.body.email == 'tata@com.au' && req.body.upwd == 'tata'){
        valid = '{"ok":true}';
    } else if(req.body.email == 'mang@com.au' && req.body.upwd == 'mang'){
        valid = '{"ok":true}';
    } else {
        valid = '{"ok":false, "errors":{}}';
    }
    valid = JSON.stringify(valid)
    res.send(valid);
});