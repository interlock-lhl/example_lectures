var name = "Ronald McDonald";

function sayName(name, isDr) {
  function doctor() {
    return "Dr. " + name;
  }

  if (isDr === true) {
    console.log(doctor());
  } else {
    console.log(name);
  }
}

sayName(name);
sayName('Don');
sayName('David', true);
// doctor();
sayName('James',[]);
sayName('Monica', 5 > 3);
