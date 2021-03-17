const expect = require('chai').expect;
const content = require('../data/content.json').content;

describe('setDontPanic',function () {
  const setDontPanic = require('../js/cookies').setDontPanic;
    it('should set the dontPanic property to "true"', function() {
        setDontPanic();
        expect(content.layout.dontPanic).to.be.true;
    })
})

describe('unsetDontPanic',function () {
  const unsetDontPanic = require('../js/cookies').unsetDontPanic;
    it('should set the dontPanic property to "false"', function() {
        unsetDontPanic();
        expect(content.layout.dontPanic).to.be.false;
    })
})