// Module to store tasks in memory
var tasks = [];

module.exports = {
  insert: function(task) {
    tasks.push(task);
  },
  delete: function(index) {
    index = parseInt(index);
    tasks.splice(index, 1);
  },
  update: function(index, task) {
    index = parseInt(index);
    tasks[index] = task;
  },
  get: function(index) {
    index = parseInt(index);
    return tasks[index];
  },
  all: function() {
    return tasks;
  }
}
