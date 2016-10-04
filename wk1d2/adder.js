// console.log(process.argv.slice(2));

// var numbs = process.argv.slice(2);

// console.log(numbs);

// var total = 0;

// console.log(total);

function sum(numbers) {
  var total = 0;
  // i++ => i += 1 => i = i + 1
  // numbers.forEach(function(a,b,c) {
  //   console.log('a:', a, 'b:', b, 'c:', c);
  // });
  // var i = 0;
  // for(var number of numbers) {
  //   console.log(number);
  //   // i += 1;
  // }
  // for(var number in numbers) {
  //   console.log(number);
  // }
  for(var number of numbers) {
    // console.log("index:", i);
    // console.log("value:", numbers[i]);

    var numberParsed = Number(number);
    // debugger;
    if ( isNaN(numberParsed) === false) {
      total += numberParsed;
    } else {
      console.log("Stop giving me junk: ", number)
    }
  }
  return total;
}

//var total = mapToShoppingCart(data.computeStuff(session.now).json_the_gin);
var total = sum(process.argv.slice(2));
console.log("TOTAL:", total);
// sum([5,6]);
// console.log("SECOND TOTAL:", total);
