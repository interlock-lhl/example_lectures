const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Music Music Music');
});

// Albums GET /albums

// Albums POST /albums/:id

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
