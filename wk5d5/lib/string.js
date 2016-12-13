q = "money!!!! ";

// We can add methods to the String prototype
// which adds this to all instances of string
String.prototype.makeItRain = function() {
  return this + "MAKE IT RAIN";
}


// Remember that time we tried to change
// the prototype of String... ya you can't do that directly

// console.log(a.map);
s = new String("Cats awesome");

// We can change the prototype of an instance of string though!
// Object.setPrototypeOf(s, null);

console.log(s.split(/\s/));

// console.log(typeof s);
// console.log(q.makeItRain());
// console.log(s.makeItRain());
