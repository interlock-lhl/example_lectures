const router = require('express').Router();
const pg = require('pg');
const survey = require('../lib/survey');

router.get('/surveys', function(req, res) {
  survey.all.then( (surveys) => {
    if (err) return res.send(err);

    // return some JSON
    res.set('Content-Type', 'application/json');
    res.send(JSON.stringify(surveys));
    // res.send(results.rows);
  }).error( (err) => {
    res.sendStatus(502).send(err);
  });

  // res.sendStatus(404);
});

router.get('/surveys/:id', function(req, res) {

  survey.findById( req.params.id, (err, survey) => {
    if (err) return res.send(err);

    // if (results.rows.length == 0) {
    //   return res.sendStatus(404);
    // }
    // return some JSON
    res.set('Content-Type', 'application/json');
    res.send(JSON.stringify(survey));
    // res.send(results.rows);
  });
});

router.post('/surveys', function(req, res) {
  req.pg_client.query(
    "INSERT INTO surveys (name, created_at, updated_at) VALUES ($1::text, $2::timestamp, $2::timestamp) RETURNING *;",
    [req.body.name, new Date()],
    (err, result) => {
      if (err) return res.send(err);
      res.send(result.rows[0]);
    }
  );
//   res.send(req.body);
});

module.exports = router;
