function Robot(name, noise) {
  this.name = name;
  this.noise = noise || 'Buzzz';
}

// function assigned to the prototype means one copy for all
// instances.
// this is set to the context of the instance, we can
// our properties are unique for each one
Robot.prototype.makeNoise = function(noise) {
  console.log(noise || this.noise);
}

var robot = new Robot("R2D2", "Beep BOOP");

console.log(robot instanceof Robot);

console.log(robot.makeNoise("MAROW"));
