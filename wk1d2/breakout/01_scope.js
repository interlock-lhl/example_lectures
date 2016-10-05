// What will the output be?
// How many different scopes are in this program?
// What if you change the inner x to another name?

var x = 0;

// point A
console.log('A: ', x);

function a(y) {

  // point B
  console.log('B: ', x)

  x++;
  // function b(x) {
  //   console.log('IN B:', x);
  //   x++;
  //   console.log('OUT B:', x);
  // }
  // b(x);
  // point C
  console.log('C: ', x)
}

// point D
console.log('D: ', x);

a(x);

// point E
console.log('E: ', x);
