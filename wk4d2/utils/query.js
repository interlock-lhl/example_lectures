const pg = require('pg');


// var client = new pg.Client({
//   user: 'jamessapara',
//   password: '',
//   port: 5432,
//   host: 'localhost', // 127.0.0.1
//   database: 'quizes',
//   ssl: false // SSL/TLS
// });

// "1'; DELETE FROM surveys WHERE 1=1; --"

// URI style
var client = new pg.Client('postgres://jamessapara:@localhost:5432/quizes');

client.connect(function(err) {
  if (err) return console.log(err);

  // node query.js SELECT * FROM surveys WHERE name = 'Week 1\'; SELECT * FROM submissions; --'
  // client.query(`SELECT * FROM surveys WHERE name = '${process.argv[2]}'`, (err, results) => {
  // console.log(process.argv[2]);

  // client.query('SELECT * FROM surveys WHERE name = $1::text', [process.argv[2]], (err, results) => {
  //   if (err) return console.log(err);
  //
  //   console.log(results.rows);
  // });

  // client.query("INSERT INTO surveys (name) VALUES ('Week 4') RETURNING id", (err, results) => {
  //   if (err) return console.log(err);
  //
  //   console.log(results.rows);
  // });

  // client.query("UPDATE surveys SET name='Week 4 Bonus' WHERE id=4", (err, result) => {
  //   if (err) return console.log(err);
  //   console.log(result);
  // });

  client.query("DELETE FROM surveys WHERE id=$1::integer AND name=$2::text",[4,'Cats'], (err, result) => {
    if (err) return console.log(err);
    console.log(result);
  });
});
