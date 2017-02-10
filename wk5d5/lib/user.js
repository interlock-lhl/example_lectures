const userProtoType = {
  fullName: function() {
    return this.first + " " + this.last;
  }
};

function createUser(first, last) {
  var user = {
    first: first,
    last: last
  };
  Object.setPrototypeOf(user, userProtoType);
  return user;
}

var james = createUser("James", "S");
var joel = createUser("Joel", 'S');

console.log(james.fullName());
console.log(james.fullName === joel.fullName);
