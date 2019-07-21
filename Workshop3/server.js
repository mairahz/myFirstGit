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

app.post('/api/login', function(req, res){
    if (!req.body){
        return res.endStatus(400);
    }

    var customer = {};
    customer.email = req.body.email;
    customer.upwd = req.body.upwd;
    if (req.body.email == "abc@com.au" && req.body.upwd == "123"){
        customer.valid == true;
    } else {
        customer.valid = false;
    }
    res.send(customer);
});