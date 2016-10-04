// console.log(process.argv.slice(2));

var numbers = process.argv.slice(2);

console.log(numbers);

var total = 0;

console.log(total);

// i++ => i += 1 => i = i + 1
for(var i = 0; i < numbers.length; i++) {
  console.log("index:", i);
  console.log("value:", numbers[i]);

  var number = Number(numbers[i]);
  debugger;
  if ( isNaN(number) === false) {
    total += number;
  }
}
console.log('total:', total);
