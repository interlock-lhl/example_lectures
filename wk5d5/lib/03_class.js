'use strict';

class Robot {
  // Takes place of our Robot constructor function now, same behaviour has before
  constructor(name) {
    this.name = name;
  }

  // It adds a property with definedProperty on the prototype
  // Mostly so it is not enumerable
  makeItRain() {
    return "Making it rain";
  }
}

// Works the same as using a constructor Function
var robot = new Robot('C3PO');

// We can extend an existing Class to get it's behaviour
// just any additional behaviour we want to additional
// super is special and calls the same method of the parent
// we extended from
class Player extends Robot {
  constructor(name, lives) {
    super(name);
    this.lives = lives;
  }

  gameOver() {
    return false;
  }
}
