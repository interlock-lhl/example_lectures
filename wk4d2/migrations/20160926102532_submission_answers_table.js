
exports.up = function(knex, Promise) {
  return knex.schema.createTable('submission_answers', (table) => {
    table.increments();
    table.integer('submission_id').unsigned();
    // table.foreign('submission_id').references('submissions.id');
    table.integer('question_option_id').unsigned();
    // table.foreign('question_option_id').references('question_options.id');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('submission_answers');
};
