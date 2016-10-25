const pg = require('pg');

const PG_URI = process.env.PG_URI || 'postgres://jamessapara:@localhost:5432/music';

module.exports.connect = function (cb) {
  const client = new pg.Client(PG_URI);

  // connect to our database
  client.connect(function (err) {
    if (err) return cb(err);

    cb(err, client);
  });
}
