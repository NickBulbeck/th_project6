const expect = require('chai').expect;

describe('Sense-check', function() {
  it('Should run "npm test"', function() {
    expect(true).to.be.true;
    expect(false).to.be.false;
  })
})

// For testing async code, see https://mochajs.org/#asynchronous-code