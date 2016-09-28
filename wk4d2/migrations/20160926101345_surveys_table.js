
exports.up = function(knex, Promise) {
  return knex.schema.createTable('surveys', (table) => {
    table.increments(); // primate key id
    table.string('name')
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('surveys');
};
