const express = require('express');
const app = express();

const port = 3000;

app.set('view engine', 'ejs');

// a new request

// look at path and see if it exists in ./public
// if it exists, read that file and return its contents. End the request
// if not, call next and carry on
app.use(express.static('public'));

// our fairly pointless middleware that adds a header `x-claimed` to each request
// but then continues on with `next()`
app.use(function(req, res, next) {
  if (req.method === 'GET') {
    res.set('X-Claimed','James was here');
  } else {
    res.set('X-Claimed', 'Don was here');
  }
  next();
});

app.get('/', function (req, res) {
  res.set('X-Best-Homepage-ever', 'true');
  res.render('home', {
    pageTitle: 'Welcome!',
    pageHeading: 'Welcome to the homepage'
  });
});

// sneak peek at params and query
app.post('/cats/:id', (req, res) => {
  res.send({a: req.query, b: req.params});
});


app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
  // console.log('Example app listening on port ' + port +'!');
});
