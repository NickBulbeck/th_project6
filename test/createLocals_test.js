const expect = require('chai').expect;

describe('createLocals',function() {
    const createLocals = require('../js/createLocals.js').createLocals;
    it('should return an object', function() {
        expect(createLocals()).to.be.an('object');
    })
})