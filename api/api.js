var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var User = require('./models/user.js')
var jwt = require('./services/jwt.js')
var app = express();
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.header('Access-control-Allow-Headers','Content-Type,Authorization');

  next();
})

app.post('/register',function (req, res) {

  var user = req.body;

  var newUser = new User.model({
    email:user.name,
    password: user.password
  })

  var payload = {
    iss:req.hostname,
    sub: req.user_id
  }

  var token = jwt.encode(payload,'shh...')
  newUser.save(function (err) {
    res.status(200).send({
      user:newUser.toJSON,
      token:token
    });
  })
  console.log(req.body);
})

mongoose.connect('mongodb://ruchi:hello21@ds153657.mlab.com:53657/jwt')

console.log(jwt.encode('hi','secret'));

/*var server =app.listen(3000, function () {
  console.log("api listening on", server.address().port);
})*/

