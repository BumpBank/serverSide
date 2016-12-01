const Knex = require('knex')
const knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']

const knex = Knex(knexConfig)

const getAllUsers = () => {
  console.log('Im in the function')
  return knex('bank')
}

const getUserByUsername = (name) => knex('bank').where('username', name)

const addUser = (user) => knex('bank').insert(user)

module.exports = {
  getAllUsers,
  getUserByUsername,
  addUser
}
