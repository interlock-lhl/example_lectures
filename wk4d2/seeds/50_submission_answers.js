const _ = require('underscore')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('submission_answers').del()
    .then(function () {
      let sub_id = 0;
      return Promise.all([
        // Inserts seed entries

        knex('submission_answers').insert({submission_id: ++sub_id, question_option_id: _.sample([1,2])}),
        knex('submission_answers').insert({submission_id: sub_id, question_option_id: _.sample([3,4])}),
        knex('submission_answers').insert({submission_id: sub_id, question_option_id: _.sample([5,6])}),

        knex('submission_answers').insert({submission_id: ++sub_id, question_option_id: _.sample([7,8])}),
        knex('submission_answers').insert({submission_id: sub_id, question_option_id: _.sample([9,10,11])}),
        knex('submission_answers').insert({submission_id: sub_id, question_option_id: _.sample([12,13])}),

        knex('submission_answers').insert({submission_id: ++sub_id, question_option_id: _.sample([14,15,16])}),
        knex('submission_answers').insert({submission_id: sub_id, question_option_id: _.sample([17,18])}),
        knex('submission_answers').insert({submission_id: sub_id, question_option_id: _.sample([19,20])}),

        knex('submission_answers').insert({submission_id: ++sub_id, question_option_id: _.sample([1,2])}),
        knex('submission_answers').insert({submission_id: sub_id, question_option_id: _.sample([3,4])}),
        knex('submission_answers').insert({submission_id: sub_id, question_option_id: _.sample([5,6])}),

        knex('submission_answers').insert({submission_id: ++sub_id, question_option_id: _.sample([7,8])}),
        knex('submission_answers').insert({submission_id: sub_id, question_option_id: _.sample([9,10,11])}),
        knex('submission_answers').insert({submission_id: sub_id, question_option_id: _.sample([12,13])}),

        knex('submission_answers').insert({submission_id: ++sub_id, question_option_id: _.sample([14,15,16])}),
        knex('submission_answers').insert({submission_id: sub_id, question_option_id: _.sample([17,18])}),
        knex('submission_answers').insert({submission_id: sub_id, question_option_id: _.sample([19,20])}),

        knex('submission_answers').insert({submission_id: ++sub_id, question_option_id: _.sample([1,2])}),
        knex('submission_answers').insert({submission_id: sub_id, question_option_id: _.sample([3,4])}),
        knex('submission_answers').insert({submission_id: sub_id, question_option_id: _.sample([5,6])}),

        knex('submission_answers').insert({submission_id: ++sub_id, question_option_id: _.sample([7,8])}),
        knex('submission_answers').insert({submission_id: sub_id, question_option_id: _.sample([9,10,11])}),
        knex('submission_answers').insert({submission_id: sub_id, question_option_id: _.sample([12,13])}),

        knex('submission_answers').insert({submission_id: ++sub_id, question_option_id: _.sample([14,15,16])}),
        knex('submission_answers').insert({submission_id: sub_id, question_option_id: _.sample([17,18])}),
        knex('submission_answers').insert({submission_id: sub_id, question_option_id: _.sample([19,20])}),

        knex('submission_answers').insert({submission_id: ++sub_id, question_option_id: _.sample([1,2])}),
        knex('submission_answers').insert({submission_id: sub_id, question_option_id: _.sample([3,4])}),
        knex('submission_answers').insert({submission_id: sub_id, question_option_id: _.sample([5,6])}),

        knex('submission_answers').insert({submission_id: ++sub_id, question_option_id: _.sample([7,8])}),
        knex('submission_answers').insert({submission_id: sub_id, question_option_id: _.sample([9,10,11])}),
        knex('submission_answers').insert({submission_id: sub_id, question_option_id: _.sample([12,13])}),

        knex('submission_answers').insert({submission_id: ++sub_id, question_option_id: _.sample([14,15,16])}),
        knex('submission_answers').insert({submission_id: sub_id, question_option_id: _.sample([17,18])}),
        knex('submission_answers').insert({submission_id: sub_id, question_option_id: _.sample([19,20])}),
      ]);
    });
};
