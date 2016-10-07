var resources = require('./resources');
var turns = require('./turns');

var COST = 10;
var FOOD = 4;

module.exports = function(building) {
  if (resources.getGold() - COST < 0) return null;
  if (resources.food - FOOD < 0) return null;

  // retire a worker
  debugger;
  if (building.workers.length >= building.workerLimit) {
    building.workers = building.workers.slice(1);
  }

  // onboarding costs
  turns.didTurn();
  resources.changeGold(-COST);
  resources.changeFood(-FOOD);

  return building.workers.push({
    energy: 100, // mo energy, mo production
    changeEnergy: function(value) {
      this.energy += value;
    },
    // working: false,
    cost: COST,
    food: FOOD
  });
};
