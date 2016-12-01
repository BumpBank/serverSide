var express = require('express')
var passport = require('passport')
var router = express.Router()
var bcrypt = require('bcrypt');
const saltRounds = 10;

var addUser = require('../db/db').addUser

router.post( '/', (req, res) => {
  console.log(req.body);
  var password = req.body.password
  var user = req.body.username
  bcrypt.hash(password, saltRounds, function(err, hash) {
    var userobj = {username: user, password: hash}
    addUser(userobj)
    .then(() => res.redirect('/login'))

  })
})
  // var user = {username, password}



router.get('/', function (req, res) {
  res.render('signup')
})

module.exports = router
