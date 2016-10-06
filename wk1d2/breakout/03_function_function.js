function add(x) {
  var y = 10;
  return function(z) {
    return x + y + z;
  }
}
