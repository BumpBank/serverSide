const express = require('express');
const router = express.Router()
const getAllUsers = require('../db/db').getAllUsers
const addUser = require('../db/db').addUser

/* GET users listing. */
router.get('/', function(req, res) {
  getAllUsers()
  .then((users) => {
    res.json({users})
  })
  .catch((err) => {
    console.log(err)
  })
});

router.post('/', function(req, res) {
  addUser(req)
  .then((req) => res.json(req))
})

module.exports = router;
