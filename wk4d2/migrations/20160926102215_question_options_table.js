
exports.up = function(knex, Promise) {
  return knex.schema.createTable('question_options', (table) => {
    table.increments();
    table.integer('question_id').unsigned();
    // table.foreign('question_id').references('questions.id');
    table.text('answer');
    table.boolean('is_correct');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('question_options');
};
