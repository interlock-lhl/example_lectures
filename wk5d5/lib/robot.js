// An object with properties
// var robot = {
//   name: 'R2D2',
//   makeSound: function() {
//     console.log("BEEP BEEP BOOP");
//   }
// };

// Manually creating an object, the first param is the prototype
// var robot = Object.create({name: 'R2D2'});
// console.log(robot.toString());

// A function constructor for a Robot
function Robot(name) {
  this.name = name;
  // We could add our methods here, but by assigning a method to a context
  // we are duplicating the same method for every instance.
  // this.makeNoise = function() {
  //   console.log("BEEP BOOP SDFADSF");
  // }
}

// __proto__ is the prototype of our prototype
console.log(Robot.prototype.__proto__ === Object.prototype);
console.log(Object.getPrototypeOf(Robot.prototype) === Object.prototype);
// console.log(Robot.prototype);

var robot = new Robot('R2D2');
var c3pio = new Robot('C3PIO');

// console.log(robot);
// console.log(c3pio);

// robot.makeNoise();

// robot.toString = function() {
//   return "CATS";
// }

// Function's prototype is where toString method comes from
console.log(Function.prototype.toString);
console.log(Function.prototype.__proto__);
//
// console.log("toString:", robot.toString());
//

// set this way, makeItRain is enumerable
Object.prototype.makeItRain = true;

for(var key in robot) {
  // Only show properties set on the objext context and not its prototypes...
  if (robot.hasOwnProperty(key)) {
    console.log("robot key:", key);
  } else {
    console.log("not my key:", key);
  }
}
//
// console.log(Object.keys(robot));

// robot.makeSound();
