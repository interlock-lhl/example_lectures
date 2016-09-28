const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use(express.static('public'));

// defaults middle ware
app.use(function(req,res,next) {
  res.locals.title = 'Generic Title';
  next();
});

// connect to db
// app.use(function(req, res, next) {
//   req.pg_client = new pg.Client(process.env.POSTGRES_URI || {database: 'quizes'} );
//   req.pg_client.connect(function(err) {
//     if (err) {
//       return res.sendStatus(500);
//     }
//     next();
//   });
// });


app.use(require('./routes'));

app.get('/', function (req, res) {
  res.render('index', {title: 'QUIZ QUIZ'});
  // res.send('Hello World!');
});


app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
