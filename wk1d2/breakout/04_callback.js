/**
 * @param {string} pet type of pet (cat/dog/rat/etc)
 * @param {function} cb  fabulous pet name
 */
function petFabulator(pet, cb) {
  console.log("Start of petFabulator");
  if (pet === "cat") {
    cb("taco " + pet);
  } else if (pet === "dog") {
    cb("weiner " + pet);
  } else if (pet === "rat") {
    cb("fancy " + pet);
  } else {
    cb("boring " + pet);
  }
  console.log("End of petFabulator");
}
