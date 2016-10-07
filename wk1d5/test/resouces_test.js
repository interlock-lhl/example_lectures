var expect = require('chai').expect;
var resources = require('../resources');

describe('Resources', function() {

  describe('defaults', function() {

    it('has a default gold of 100', function() {
      expect(resources.getGold()).to.equal(100);
    });

    it('has a default food of 80', function() {
      expect(resources.getFood()).to.equal(80);
    });

    it('has a default cat of 1', function() {
      expect(resources.getCat()).to.equal(1);
    });

  });

  describe('gold', function() {
    it('changes value', function() {
      resources.changeGold(10);
      expect(resources.getGold()).to.equal(110);
    });

  });

  describe('food', function() {
    it('changes value', function() {
      resources.changeFood(10);
      expect(resources.getFood()).to.equal(90);
    });
  });

  describe('cats', function() {
    it('changes value', function() {
      resources.changeCat(1);
      expect(resources.getCat()).to.equal(2);
    });
  })
});
