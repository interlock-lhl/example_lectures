const router = require('express').Router();

// Our SPA home page
router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;
