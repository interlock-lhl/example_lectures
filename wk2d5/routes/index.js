var express = require('express');
var router = express.Router();
var tasks = require('../lib/tasks');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tasks', tasks: tasks.all() });
});

router.get('/new', function(req, res, next) {
  res.render('new', { title: 'New Task'} );
});

router.post('/new', function(req, res, next) {
  tasks.insert({name: req.body.name, completed: false});
  res.redirect('/');
});

router.get('/edit/:index', function(req, res, next) {
  res.render('edit', { title: 'Edit Task', task: tasks.get(req.params.index)});
});

router.post('/edit/:index', function(req, res, next) {
  task = tasks.get(req.params.index);
  task.name = req.body.name;
  tasks.update(req.params.index, task);
  res.redirect('/');
});

router.get('/delete/:index', function(req, res, next) {
  tasks.delete(req.params.index);
  res.redirect('/');
});

router.get('/toggle_completed/:index', function(req, res, next) {
  var task = tasks.get(req.params.index);
  task.completed = !task.completed;
  tasks.update(req.params.index, task);
  res.redirect('/');
});

module.exports = router;
