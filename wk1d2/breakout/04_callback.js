/**
 * @param {string} pet type of pet (cat/dog/rat/etc)
 * @param {function} cb fabulous pet name
 */
function petFabulator(pet, cb) {
  console.log("Start of petFabulator");
  if (pet === "cat") {
    cb("taco " + pet, pet, 1);
  } else if (pet === "dog") {
    cb("weiner " + pet, pet, 3);
  } else if (pet === "rat") {
    cb("fancy " + pet, pet, 2);
  } else {
    cb("boring " + pet, pet, 4);
  }
  console.log("End of petFabulator");
}

function showFabulousPet(newPet, pet_param, rank) {
  console.log("Pet was:", pet);
  console.log("Your pet is:", newPet, "From:", pet_param, "Rank:", rank);
}

petFabulator('pig', showFabulousPet);
// petFabulator('pig', console.log);
// petFabulator('rat', function(fancyName, name, rank) {
//   console.log("!!!!!!!!!!!!!!!!!!!!!!!");
//   console.log(fancyName);
//   console.log("!!!!!!!!!!!!!!!!!!!!!!!");
// });
