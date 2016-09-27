const router = require('express').Router();

router.use('/api', require('./surveys'));
router.use('/api', require('./questions'));
router.use('/api', require('./question_options'));
router.use('/api', require('./submissions'));
router.use('/api', require('./submission_answers'));

module.exports = router;
