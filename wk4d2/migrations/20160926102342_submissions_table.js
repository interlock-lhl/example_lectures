
exports.up = function(knex, Promise) {
  return knex.schema.createTable('submissions', (table) => {
    table.increments();
    table.integer('survey_id').unsigned();
    // table.foreign('survey_id').references('surveys.id');
    table.text('github_username');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('submissions');
};
