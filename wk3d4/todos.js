const data = {
  todos: require('./default_todos.json')
};

function largestId() {
  return data.todos.reduce( (c, i) => {
    if (i._id > c) {
      return i._id;
    }
    return c;
  }, -1) + 1;
}

module.exports = {
  // return all todo items
  all: function(cb) {
    cb(null, data.todos);
  },

  // return oen todo items by id
  findById: function(id, cb) {
    cb(null, data.todos.find( (item) => item._id == id));
  },

  // add a new todo item
  create: function(todo, cb) {
    todo._id = largestId();
    data.todos.push(todo);
    cb(null);
  },

  // remove todo item by id
  destroy: function(id, cb) {
    data.todos = data.todos.filter( (item) => item._id != id);
    cb(null);
  }
}
