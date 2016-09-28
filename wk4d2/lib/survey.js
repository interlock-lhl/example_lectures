const knex = require('./db');

module.exports = {
  // cb(err, results array)
  // returns promise
  all: function() {
    // knex.select('*').from('surveys').toCallback( (err, results) => {
    // knex('surveys').select('*').asCallback( (err, results) => {
    //   console.log(err);
    //   if (err) return cb(err);
    //   cb(null, results);
    // });

    return knex('surveys').select('*');
  },
  findById: function(id, cb) {
    knex('surveys').select('*').where('id', id).asCallback( (err, results) => {
      console.log(err);
      if (err) return cb(err);
      cb(null, results);
    });
  }
}
