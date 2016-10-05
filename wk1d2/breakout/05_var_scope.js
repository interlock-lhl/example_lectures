var counter = 10;

function increaseCounter() {
  counter++;
}

for (var i = 0; i < 100; i += 10) {
  increaseCounter();
}

function report(count) {
  // var counter;
  var taco = 1000;
  let cat = true;
  const rats = "awesome!";
  console.log("The final result is: ", counter);
}

console.log(counter);
report(counter);
console.log(taco);
