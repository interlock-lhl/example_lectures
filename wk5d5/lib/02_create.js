'use strict';
const users = [];

function User(first, last) {
  this.first = first;
  this.last = last;
  users.push(this);
}

User.findByName = function(name) {
  // users.filter( ... );
}

User.prototype.fullName = function() {
  return this.first + " " + this.last;
}

User.prototype.isAdmin = function() {
  return false;
}

function Admin(first, last) {
  User.call(this, first, last);
}

Admin.prototype.isAdmin = function() {
  return true;
}

Object.setPrototypeOf(Admin.prototype, Object.create({}, User.prototype));

var james = new User("James", "S");
var joel = new Admin("Joel", 'S');

console.log(james.isAdmin());
console.log(joel.isAdmin());
// console.log(joel.fullName());
// console.log(joel.fullName === james.fullName);
//
// console.log(Object.getOwnPropertyNames(james));

// console.log(james.constructor === User);
