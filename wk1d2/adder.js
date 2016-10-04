// var total;

console.log("TOTAL:", total);

var total = sum(process.argv.slice(2));

console.log(total);

function sum(numbers) {
  var total = 0;

  for(var number of numbers) {
    var numberParsed = Number(number);

    if ( isNaN(numberParsed) === false) {
      total += numberParsed;
    } else {
      console.log("Stop giving me junk: ", number)
    }
  }
  return total;
}
