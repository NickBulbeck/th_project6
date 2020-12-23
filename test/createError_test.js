const expect = require('chai').expect;

describe('The error-handler: not found',function() {
    const createError = require('../js/createError.js').createError;
    it('should produce an Error object',function() {
        expect(createError(404)).to.be.an('error');
    })
    it('should produce a 404 status',function() {
        expect(createError(404).status).to.equal(404);
    });
    it('should produce a basic "Not Found" message',function() {
        expect(createError(404).message).to.equal("Not Found");
    });
})

describe('The error-handler: generic',function() {
    const createError = require('../js/createError.js').createError;
    
})