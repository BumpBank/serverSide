var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', ensureAuthenticated, function (req, res, next) {
  res.send(require('../html.js'))
})

function ensureAuthenticated (req, res, next) {
  if (req.isAuthenticated()) { return next() }
  res.redirect('/api/unauthorized')
}

module.exports = router
