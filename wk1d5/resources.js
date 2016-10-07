var gold = 100;
var cats = 1;

var resources = {

  // update the gold value
  changeGold: function(value) {
    gold += value;
  },

  getGold: function() {
    return gold;
  },

  food: 80,
  // Update the food value
  changeFood: function(value) {
    this.food += value;
  },
  getFood: function() {
    return this.food;
  },
  changeCat: function(value) {
    cats += value;
  },
  getCat: function() {
    return cats;
  }
};

module.exports = resources;
