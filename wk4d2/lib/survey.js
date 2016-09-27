module.exports = {
  // cb(err, results array)
  all: function(client, cb) {
    client.query("SELECT * FROM surveys", (err, results) => {
      if (err) return cb(err);
      cb(null, results.rows);
    });
  },
  findById: function(client, id, cb) {
    // todo ensure id is valid number, return validation error
    client.query("SELECT * FROM surveys WHERE id = $1::integer", [id], (err, results) => {
      if (err) return cb(err);
      // optionally throw our own error if not found
      if (results.rows.length == 0) {
        return cb({message: 'Not Found', statusCode: 404});
      }
      cb(null, results.rows[0]);
    });
  }
}
