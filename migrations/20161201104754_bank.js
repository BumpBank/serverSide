
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('bank', function(table){
    table.increments('id')
    table.string('username')
    table.string('password')
    table.integer('pin')
    table.string('accountNumber')
    table.decimal('balance')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('bank')
};
