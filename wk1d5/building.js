var workerFactory = require('./workers');
var resources = require('./resources.js');
var turns = require('./turns');
var c = require('colout');

// The building all these poor works are in
var building = {

  // worker limit and container
  workerLimit: 5,
  workers: [],

  // train a worker if we can afford it
  trainWorker: function() {
    workerFactory(this);
  },

  // get all our works mining gold
  produceGold: function() {
    turns.didTurn();
    resources.changeGold(this.workers.reduce(function(total, worker) {
      if (worker.energy > 5) {
        worker.changeEnergy(-5);
        return total + 1;
      }
      return total;
    }, 0));
  },

  // get all our workers harvesting food
  produceFood: function() {
    turns.didTurn();
    resources.changeFood(this.workers.reduce(function(total, worker) {
      if (worker.energy > 2) {
        worker.changeEnergy(-2);
        return total + 1;
      }
      return total;
    }, 0));
  },

  // print a nice summary
  summary: function() {
    c.red(`[${turns.getTurns()}]`, ' ');
    c.cyan(`Workers: ${this.workers.length}`, ' ');
    c.yellow(`Gold: ${resources.getGold()}`, ' ');
    c.green(`Food: ${resources.food}`).endl();
  }
};

module.exports = building;
