var name = "Ronald McDonald";

function sayName(name, isDr) {
  function doctor() {
    return "Dr. " + name;
  }

  if (isDr) {
    console.log(doctor());
  } else {
    console.log(name);
  }
}
