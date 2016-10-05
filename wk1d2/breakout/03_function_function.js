var add = function(x) {
  var y = 10;
  return function(z) {
    return x + y + z;
  }
}

console.log(typeof add);
var first = add(5);
console.log(typeof first);

var second = first(15);
console.log(second);
