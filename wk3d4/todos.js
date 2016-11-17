const data = {
  todos: require('./default_todos.json')
};

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
}

module.exports = {
  // return all todo items
  all: function(cb) {
    connect((err, db) => {
      // var todos = db.collection('todos');
      db.collection('todos').find().toArray( cb );
    });
  },

  // return oen todo items by id
  findById: function(id, cb) {
    connect((err, db) => {
      // var todos = db.collection('todos');
      db.collection('todos').findOne({_id: ObjectId(id)}, cb);
    });
  },

  // add a new todo item
  create: function(todo, cb) {
    connect((err, db) => {
      // var todos = db.collection('todos');
      db.collection('todos').insert(todo, cb);
    });
  },

  // remove todo item by id
  destroy: function(id, cb) {
    connect((err, db) => {
      // var todos = db.collection('todos');
      db.collection('todos').remove({_id: ObjectId(id)}, cb);
    });
  }
}
