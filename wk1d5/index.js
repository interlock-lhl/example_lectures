// The building all these poor works are in
var building = {
  // Resources the building has
  resources: {
    gold: 100,
    // update the gold value
    changeGold: function(value) {
      this.gold += value;
    },

    food: 80,
    // Update the food value
    changeFood: function(value) {
      this.food += value;
    }

  },

  // how many turns have we taken
  turns: 0,
  didTurn: function() {
    this.turns++;
  },

  // worker limit and container
  workerLimit: 5,
  workers: [],

  // train a worker if we can afford it
  trainWorker: function() {
    var worker = workerFactory(); // are next potential employee!
    if (this.resources.gold - worker.cost < 0) return null;
    if (this.resources.food - worker.food < 0) return null;

    // retire a worker
    if (this.workers.length >= this.workerLimit) {
      this.workers = this.workers.slice(1);
    }

    // onboarding costs
    this.resources.changeGold(-worker.cost);
    this.resources.changeFood(-worker.food);

    return this.workers.push(worker);
  },

  // get all our works mining gold
  produceGold: function() {
    this.resources.changeGold(this.workers.reduce(function(total, worker) {
      if (worker.energy > 5) {
        worker.changeEnergy(-5);
        return total + 1;
      }
      return total;
    }, 0));
  },

  // get all our workers harvesting food
  produceFood: function() {
    this.resources.changeFood(this.workers.reduce(function(total, worker) {
      if (worker.energy > 2) {
        worker.changeEnergy(-2);
        return total + 1;
      }
      return total;
    }, 0));
  },

  // print a nice summary
  summary: function() {
    console.log(`Workers: ${this.workers.length} Gold: ${this.resources.gold} Food: ${this.resources.food}`)
  }
};

// creates a worker with some default values
var workerFactory = function() {
  return {
    energy: 100, // mo energy, mo production
    changeEnergy: function(value) {
      this.energy += value;
    },
    working: false,
    cost: 10,
    food: 4
  }
};

// simulate playing the game a bit
building.summary();
building.trainWorker();

building.summary();
building.produceGold();
building.summary();
building.produceFood();
building.summary();

building.trainWorker();
building.trainWorker();
building.trainWorker();
building.trainWorker();

building.summary();
building.produceGold();
building.summary();
building.produceFood();
building.summary();
