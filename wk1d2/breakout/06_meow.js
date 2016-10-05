function buildHouse(materials, labour, ownerCallback) {
  console.log("Building with some stuff:", materials);
  console.log("Pay this lazy chumps:", labour);
  
  function calculate() {
    return materials.length * labour.length * 52000;
  }
  ownerCallback(calculate);
}

buildHouse(["wood","rocks","dirt"], ["Don","David","Monica","James"], function(price) {
  console.log("Total Price $", price());
});
