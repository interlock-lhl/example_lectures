// Module to store tasks in memory
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const collection_name = 'todo';
var mongo_uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/todos'

var tasks = [];

module.exports = {
  // return a mongodb instance
  db: function(cb) {
    MongoClient.connect(mongo_uri, cb);
  },

  insert: function(task, cb) {
    this.db(function(err, db) {
      if (err) return cb(err);
      db.collection(collection_name).insert(task, cb);
    });
  },

  delete: function(id, cb) {
    this.db(function(err, db) {
      db.collection(collection_name).deleteOne({id: new mongodb.ObjectId(id)}, cb);
    });
  },

  update: function(id, task, cb) {
    this.db(function(err, db) {
      if (err) return cb(err);
      db.collection(collection_name).updateOne({_id: new mongodb.ObjectId(id)}, { $set: task }, function(err) {
        if (err) return cb(err);
        cb(null);
      })
    });
  },

  get: function(id, cb) {
    this.db(function(err, db) {
      if (err) return cb(err);
      db.collection(collection_name).findOne({_id: new mongodb.ObjectId(id)}, function(err, data) {
        if (err) return cb(err);
        if (data === null) return cb(new Error('Not Found'));
        cb(null, data);
      })
    });
  },
  all: function(cb) {
    this.db(function(err, db) {
      db.collection(collection_name).find().toArray(function(err, data) {
        if (err) return cb(err);
        console.log(data);
        cb(null, data);
      })
    });
  }
}
