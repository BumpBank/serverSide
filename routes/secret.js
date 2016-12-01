var express = require('express')
var router = express.Router()


/* GET users listing. */
router.get('/', ensureAuthenticated, function (req, res, next) {
  var user = JSON.stringify(req.user)
  res.send(require('../html.js')(user))
})

function ensureAuthenticated (req, res, next) {
  if (req.isAuthenticated()) { return next() }
  res.redirect('/api/unauthorized')
}

module.exports = router
