var express = require('express');
var router = express.Router();
var tasks = require('../lib/tasks');

/* GET home page. */
router.get('/', function(req, res, next) {
  tasks.all(function(err, tasks) {
    if (err) return res.render(err);
    res.render('index', { title: 'Tasks', tasks: tasks });
  });

});

router.get('/new', function(req, res, next) {
  res.render('new', { title: 'New Task'} );
});

router.post('/new', function(req, res, next) {
  tasks.insert({name: req.body.name, completed: false}, function(err) {
    if (err) return res.redirect('/new');
    res.redirect('/');
  });

});

router.get('/edit/:id', function(req, res, next) {
  tasks.get(req.params.id, function(err, task) {
    if (err) return res.send(err);
    res.render('edit', { title: 'Edit Task', task: task});
  })

});

router.post('/edit/:id', function(req, res, next) {
  tasks.update(req.params.id, req.body, function(err) {
    if (err) return res.send(err);
    res.redirect('/')
  });
});

router.get('/delete/:id', function(req, res, next) {
  tasks.delete(req.params.id, function(err) {
    if (err) return res.send(err);
    res.redirect('/');
  });
});

router.get('/toggle_completed/:id', function(req, res, next) {
  tasks.get(req.params.id, function(err, task) {
    if (err) return res.send(err);
    task.completed = !task.completed;
    tasks.update(req.params.id, task, function(err) {
      if (err) return res.send(err);
      res.redirect('/');
    });
  });


});

module.exports = router;
