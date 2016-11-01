// get all arguments
var numbers = process.argv.slice(2);
var sum = 0; // let/const
var number; // hoist

// inputs array of numbers to add
// outputs returns a number is that the sum
function add(numbers) {
  for(var i = 0; i < numbers.length ; i += 1) {
    number = Number(numbers[i]);
    debugger;
    if ( !Number.isNaN(number) ) {
      sum = sum + number;
    }
    // console.log(numbers[i]);
  }
  return sum;
}

debugger;
console.log(add(numbers));
// console.log(number);

// function add(numbers) {
//
// }




// var i = 0;
// while (i < numbers.length) {
//   console.log(numbers[i]);
//   i = i + 1;
// }
