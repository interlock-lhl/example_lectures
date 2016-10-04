// console.log(process.argv.slice(2));

var numbs = process.argv.slice(2);

// console.log(numbs);

// var total = 0;

// console.log(total);

function sum(numbers) {
  var total = 0;
  // i++ => i += 1 => i = i + 1
  for(var i = 0; i < numbers.length; i++) {
    // console.log("index:", i);
    // console.log("value:", numbers[i]);

    var number = Number(numbers[i]);
    // debugger;
    if ( isNaN(number) === false) {
      total += number;
    }
  }
  return total;
}

var total = sum(numbs);
console.log("TOTAL:", total);
// sum([5,6]);
// console.log("SECOND TOTAL:", total);
