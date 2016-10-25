const db = require('./db');

module.exports = {
  findAll: function(cb) {
    db.connect( (err, client) => {
      if (err) return cb(err);

      // execute a query on our database
      client.query('SELECT * FROM artists', function (err, artists) {
        if (err) return cb(err);

        cb(null, artists.rows);

        // disconnect the client
        client.end(function (err) {
          if (err) throw err;
        });
      });
    });

  },
  insert: function(data, cb) {
    db.connect( (err, client) => {
      if (err) return cb(err);

      // execute a query on our database
      client.query(`INSERT INTO artists (name) VALUES ($1::text) RETURNING *`, [data.name], function (err, artists) {
        if (err) return cb(err);

        // TODO check if insert success
        cb(null, artists.rows[0]);

        // disconnect the client
        client.end(function (err) {
          if (err) throw err;
        });
      });
    });
  }
}
