
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('types_of_pets').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('types_of_pets').insert({
          name:'dog',
          price_in_cents:50000
        }),

        knex('types_of_pets').insert({
          name: 'cat',
          price_in_cents:20000
        }),

        knex('types_of_pets').insert({
          name:'mini pig',
          price_in_cents:null
        })
      ]);
    });
};
