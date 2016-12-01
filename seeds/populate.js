
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('bank').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('bank').insert({id: 1, username: 'chris', password: '$2a$10$1XOvJlbHCHttUKIgHnZhCer3fwRrV6nch8pHqrJQoiCP0IApQJN1C', pin: 1234, balance: 100.10, accountNumber: '123456-1234567-00' })
      ])
    })
}
