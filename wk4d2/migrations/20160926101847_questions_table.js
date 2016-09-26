
exports.up = function(knex, Promise) {
  return knex.schema.createTable('questions', (table) => {
    table.increments();
    table.integer('survey_id').unsigned();
    // table.foreign('survey_id').references('surveys.id');
    table.text('question');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('questions');
};
