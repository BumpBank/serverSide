const express = require('express')
const router = express.Router()
const getAllUsers = require('../db/db').getAllUsers
const addUser = require('../db/db').addUser

/* GET users listing. */
router.get('/', function (req, res) {
  getAllUsers()
  .then((users) => {
    res.json(users)
  })
  .catch((err) => {
    console.log(err)
  })
})

router.post('/', function (req, res) {
  console.log(req.body)
  addUser(req.body)
  .then((data) => res.json(data))
  .catch((err) => {
    console.log(err)
  })
})

module.exports = router
