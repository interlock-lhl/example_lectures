
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('surveys').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('surveys').insert({id: 1, name: 'Week 1'}),
        knex('surveys').insert({id: 2, name: 'Week 2'}),
        knex('surveys').insert({id: 3, name: 'Week 3'})
      ]);
    });
};
