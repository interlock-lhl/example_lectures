const db = require('./db');

module.exports = {
  findAll: function(cb) {
    db.connect( (err, client) => {
      if (err) return cb(err);

      // execute a query on our database
      client.query('SELECT * FROM albums', function (err, albums) {
        if (err) return cb(err);

        cb(null, albums.rows);

        // disconnect the client
        client.end(function (err) {
          if (err) throw err;
        });
      });
    });

  }
  // insert: function(data, cb) {
  //   connect( (err, client) => {
  //     if (err) return cb(err);
  //
  //     // execute a query on our database
  //     client.query(`INSERT INTO album (name) VALUES ($1::text) RETURNING *`, [data.name], function (err, album) {
  //       if (err) return cb(err);
  //
  //       // TODO check if insert success
  //       cb(null, album.rows[0]);
  //
  //       // disconnect the client
  //       client.end(function (err) {
  //         if (err) throw err;
  //       });
  //     });
  //   });
  // }
}
