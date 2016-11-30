const Knex = require('knex')
const knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']

const knex = Knex(knexConfig)

const getAllUsers = () => knex('users')

const getUserByUsername = (name) => knex('users').where('username', name)

module.exports = {
  getAllUsers,
  getUserByUsername
}
