var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var bcrypt = require('bcrypt')

// var getUserByUsername = require('./db/db').getUserByUsername
var getAllUsers = require('./db/db').getAllUsers
const getUserByUsername = require('./db/db').getUserByUsername


module.exports = function setup () {
  var strategy = new LocalStrategy(function (username, password, done) {
    var user
    getUserByUsername(username)
    .then(function(user){
      bcrypt.compare(password, user[0].password, function(err, res){
        if (res === true) {
          return done(null, user)
        } else {
           done(null)
        }
      })
    })
    .catch((err) => done(err, user))
  })


  passport.use(strategy)

  // how do I go from a given user to unique piece of info I can store in the cookie.
  passport.serializeUser(function (user, done) {
    done(null, user[0].id)
  })

  // how do I find a user given the piece of information stored in the cookie
  passport.deserializeUser(function (id, done) {
    getAllUsers()
    .then((users) => {
      done(null, users.find(function (user) {
        return user.id === id
      }))
    })
  })
}
