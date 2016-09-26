const faker = require('faker');
const async = require('async');
const _ = require('underscore');

const users = [
  faker.internet.userName(),
  faker.internet.userName(),
  faker.internet.userName(),
  faker.internet.userName(),
  faker.internet.userName(),
  faker.internet.userName(),
  faker.internet.userName(),
  faker.internet.userName(),
  faker.internet.userName()
];

function randomUser() {
  return _.sample(users);
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('submissions').del()
    .then(function() {
      let id = 0;
      return Promise.all([
        knex('submissions').insert({id: ++id, survey_id: 1, github_username: randomUser()}),
        knex('submissions').insert({id: ++id, survey_id: 2, github_username: randomUser()}),
        knex('submissions').insert({id: ++id, survey_id: 3, github_username: randomUser()}),

        knex('submissions').insert({id: ++id, survey_id: 1, github_username: randomUser()}),
        knex('submissions').insert({id: ++id, survey_id: 2, github_username: randomUser()}),
        knex('submissions').insert({id: ++id, survey_id: 3, github_username: randomUser()}),

        knex('submissions').insert({id: ++id, survey_id: 1, github_username: randomUser()}),
        knex('submissions').insert({id: ++id, survey_id: 2, github_username: randomUser()}),
        knex('submissions').insert({id: ++id, survey_id: 3, github_username: randomUser()}),

        knex('submissions').insert({id: ++id, survey_id: 1, github_username: randomUser()}),
        knex('submissions').insert({id: ++id, survey_id: 2, github_username: randomUser()}),
        knex('submissions').insert({id: ++id, survey_id: 3, github_username: randomUser()}),
      ]);

    });
};
