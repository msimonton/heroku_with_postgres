
exports.up = function(knex, Promise) {
  rreturn knex.schema.table('types_of_pets', (table) =>  {
    table.dropColum('created_at');
    table.dropColumn('updated_at');

};

exports.down = function(knex, Promise) {
  return knex.schema.table('types_of_pets', function (table)  {
    table.timestamps();
  })

};
