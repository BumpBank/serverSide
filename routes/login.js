var express = require('express')
var passport = require('passport')
var router = express.Router()

router.post('/',
  passport.authenticate('local', {
    successRedirect: '/secret',
    failureRedirect: '/login'
  })
)
router.get('/', function (req, res) {
  res.render('login')
})

module.exports = router
