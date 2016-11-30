
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bank').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('bank').insert({id: 1, username: 'ron', password: 'ronwins', pin: 1234, balance: 100.10, accountNumber: '123456-1234567-00', }),
        knex('bank').insert({id: 2, username: 'larry', password: 'larrywins', pin: 4321, balance: 200.20, accountNumber: '234567-1234567-01', }),
        knex('bank').insert({id: 3, username: 'jim', password: 'jimwins', pin: 5678, balance: 300.30, accountNumber: '345678-1234567-02', })
      ]);
    });
};
