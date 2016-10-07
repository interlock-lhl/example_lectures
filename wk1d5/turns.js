var turns = 0;

function didTurn() {
  turns++;
}

function getTurns() {
  return turns;
}

module.exports = {
  didTurn: didTurn,
  getTurns: getTurns
};
