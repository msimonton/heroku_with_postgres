
exports.up = function(knex, Promise) {
  return knex.schema.createTable('types_of_pets', (table)=> {
    table.increments();
    table.string('name');
    table.timestamps();

  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('types_of_pets')

};
