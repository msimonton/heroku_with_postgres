
exports.up = function(knex, Promise) {
  return knex.schema.table('types_of_pets', (table) => {
    table.integer('price_in_cents')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('types_of_pets', (table) =>  {
    table.dropColum('price_in_cents')
  })

};
