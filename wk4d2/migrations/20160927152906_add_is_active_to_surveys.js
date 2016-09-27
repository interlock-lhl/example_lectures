
exports.up = function(knex, Promise) {
  return knex.schema.table('surveys', (table) => {
    table.boolean('is_active').defaultTo(true).notNullable().after('name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('surveys', (table) => {
    table.dropColumn('is_active');
  });
};
