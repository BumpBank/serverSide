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
      if(user[0].username == username && user[0].password == password) {
      console.log(user);
      return done(null, user)
      }
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


// getAllUsers()
// .then(function(users) {
//   console.log(users);
//   var result = users.find(function (user) {
//     console.log(user);
//     if( user.username == username && user.password == password){
//       return done(null, result)
//     }
//     return done(null, result)
//   })
// })
// })

// getAllUsers()
// .then(function (users) {
//   user = users.find((user) => {
//     bcrypt.compare(password, user.password, function (err, res) {
//       if (res === true) {
//         return done(null, user)
//       } else {
//          done(null)
//       }
//     })
//   })
