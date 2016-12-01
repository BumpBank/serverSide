var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var bcrypt = require('bcrypt')

// var getUserByUsername = require('./db/db').getUserByUsername
var getAllUsers = require('./db/db').getAllUsers

module.exports = function setup () {
  var strategy = new LocalStrategy(function (username, password, done) {
    var user = ''
    getAllUsers()
    .then(function (users) {
      user = users.find((user) => {
        bcrypt.compare(password, user.password, function (err, res) {
          if (res === true) {
            return done(null, user)
          } else {
            return done(null)
          }
        })
      })
    })
  })

  passport.use(strategy)

  // how do I go from a given user to unique piece of info I can store in the cookie.
  passport.serializeUser(function (user, done) {
    done(null, user.id)
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
// find(function (user) {
//   return user.username === username && user.password === password
// })
