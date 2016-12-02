const Knex = require('knex')
const knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']

const knex = Knex(knexConfig)

const getAllUsers = () => {
  console.log('Im in the function')
  return knex('bank')
}

const getUserByUsername = (name) => knex('bank').where('username', name)

const addUser = (user) => knex('bank').insert(user)

const transaction = (sender, receiver, amount) => knex.raw(`select balance from bank where username=${sender};
select balance from bank where username=${receiver};
update bank set balance=balance-${amount} where username=${sender};
update bank set balance=balance+${amount} where username=${receiver};`)

module.exports = {
  getAllUsers,
  getUserByUsername,
  addUser,
  transaction
}
