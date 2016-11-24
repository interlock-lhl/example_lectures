const data = {
  todos: require('./default_todos.json')
};

<<<<<<< HEAD
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

// Connection URL
// const uri = 'mongodb://localhost:27017/todos';
const uri = process.env.MONGODB || 'mongodb://localhost:27017/todos';
// Use connect method to connect to the Server

function connect(cb) {
  MongoClient.connect(uri, function(err, db) {
    // assert.equal(null, err);
    // TODO handle error?
    console.log("Connected correctly to server");

    cb(null, db);
  });
=======
function largestId() {
  return data.todos.reduce( (c, i) => {
    if (i._id > c) {
      return i._id;
    }
    return c;
  }, -1) + 1;
>>>>>>> master
}

module.exports = {
  // return all todo items
  all: function(cb) {
<<<<<<< HEAD
    connect((err, db) => {
      // var todos = db.collection('todos');
      db.collection('todos').find().toArray( cb );
    });
=======
    cb(null, data.todos);
>>>>>>> master
  },

  // return oen todo items by id
  findById: function(id, cb) {
<<<<<<< HEAD
    connect((err, db) => {
      // var todos = db.collection('todos');
      db.collection('todos').findOne({_id: ObjectId(id)}, cb);
    });
=======
    cb(null, data.todos.find( (item) => item._id == id));
>>>>>>> master
  },

  // add a new todo item
  create: function(todo, cb) {
<<<<<<< HEAD
    connect((err, db) => {
      // var todos = db.collection('todos');
      db.collection('todos').insert(todo, cb);
    });
=======
    todo._id = largestId();
    data.todos.push(todo);
    cb(null);
>>>>>>> master
  },

  // remove todo item by id
  destroy: function(id, cb) {
<<<<<<< HEAD
    connect((err, db) => {
      // var todos = db.collection('todos');
      db.collection('todos').remove({_id: ObjectId(id)}, cb);
    });
=======
    data.todos = data.todos.filter( (item) => item._id != id);
    cb(null);
>>>>>>> master
  }
}
