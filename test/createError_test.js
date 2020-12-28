const expect = require('chai').expect;

describe('The error-handler: not found',function() {
    const create404 = require('../js/createError.js').create404;
    it('should produce an Error object',function() {
        expect(create404()).to.be.an('error');
    })
    it('should produce a 404 status',function() {
        expect(create404().status).to.equal(404);
    });
    it('should produce a basic "Not Found" message',function() {
        expect(create404().message).to.equal("Not found");
    });
})

describe('The error-handler: generic',function() {
    const createError = require('../js/createError.js').createError;
    it('should produce an Error object', function() {
        expect(createError()).to.be.an('error');
    })
    it('should produce a numeric status',function() {
        expect(createError(501).status).to.equal(501);
    })
    it('should default the status to 500',function() {
        expect(createError().status).to.equal(500);
    })
    it('should produce an "Evil has befallen" message',function() {
        expect(createError().message).to.equal("Evil is afoot, and bother has ensued.")
    })
})