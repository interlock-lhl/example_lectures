
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('question_options').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('question_options').insert({id: 1, question_id: 1, answer: 'Yes', is_correct: true}),
        knex('question_options').insert({id: 2, question_id: 1, answer: 'No', is_correct: false}),
        knex('question_options').insert({id: 3, question_id: 2, answer: 'No', is_correct: true}),
        knex('question_options').insert({id: 4, question_id: 2, answer: 'Yes', is_correct: false}),
        knex('question_options').insert({id: 5, question_id: 3, answer: 'No', is_correct: true}),
        knex('question_options').insert({id: 6, question_id: 3, answer: 'Yes', is_correct: false}),

        knex('question_options').insert({id: 7, question_id: 4, answer: 'No', is_correct: false}),
        knex('question_options').insert({id: 8, question_id: 4, answer: 'Yes', is_correct: true}),
        knex('question_options').insert({id: 9, question_id: 5, answer: 'process', is_correct: false}),
        knex('question_options').insert({id: 10, question_id: 5, answer: 'window', is_correct: false}),
        knex('question_options').insert({id: 11, question_id: 5, answer: 'this', is_correct: true}),
        knex('question_options').insert({id: 12, question_id: 6, answer: 'No', is_correct: false}),
        knex('question_options').insert({id: 13, question_id: 6, answer: 'Yes', is_correct: true}),
        
        knex('question_options').insert({id: 14, question_id: 7, answer: 'window', is_correct: true}),
        knex('question_options').insert({id: 15, question_id: 7, answer: 'navigator', is_correct: false}),
        knex('question_options').insert({id: 16, question_id: 7, answer: 'document', is_correct: false}),
        knex('question_options').insert({id: 17, question_id: 8, answer: 'you want to use callbacks', is_correct: false}),
        knex('question_options').insert({id: 18, question_id: 8, answer: 'the request you are making may take some time', is_correct: true}),
        knex('question_options').insert({id: 19, question_id: 9, answer: 'you want to use callbacks', is_correct: true}),
        knex('question_options').insert({id: 20, question_id: 9, answer: 'you want to use callbacks', is_correct: false})
      ]);
    });
};
