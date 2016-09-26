
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('questions').insert({id: 1, survey_id: 1, question: 'For loops are better than while loops?'}),
        knex('questions').insert({id: 2, survey_id: 1, question: 'You should declare all variables with var?'}),
        knex('questions').insert({id: 3, survey_id: 1, question: 'return is the best way to make friends?'}),

        knex('questions').insert({id: 4, survey_id: 2, question: 'callbacks are like passing notes to other functions?'}),
        knex('questions').insert({id: 5, survey_id: 2, question: 'object context for functions binds to what?'}),
        knex('questions').insert({id: 6, survey_id: 2, question: 'YAML is awesome?'}),

        knex('questions').insert({id: 7, survey_id: 3, question: 'what is the "global" object in the browser?'}),
        knex('questions').insert({id: 8, survey_id: 3, question: 'async is useful when...'}),
        knex('questions').insert({id: 9, survey_id: 3, question: 'rowValue1'}),


      ]);
    });
};
