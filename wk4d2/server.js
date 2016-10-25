const express = require('express');
const bodyParser = require('body-parser')

const artist = require('./lib/artist');
const album = require('./lib/album');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Music Music Music');
});

// Albums GET /artists

app.get('/artists', (req, res) => {
  artist.findAll((err, artists) => {
    if (err) return res.send(err);

    res.json(artists);
  });
});

app.get('/artists/new', (req, res) => {
  res.render('artists/new');
});

// Albums POST /artists

app.get('/albums', (req, res) => {
  album.findAll((err, albums) => {
    if (err) return res.send(err);

    res.json(albums);
  });
});

app.post('/artists', (req, res) => {
  var data = req.body;
  artist.insert(data, (err, artists) => {
    if (err) return res.send(err);

    res.json(artists);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
