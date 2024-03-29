const expect = require('chai').expect;
const content = require('../data/content.json').content;

describe('createLocals',function() {
    const createLocals = require('../js/createLocals.js').createLocals;
    it('should return an object', function() {
        expect(createLocals()).to.be.an('object');
    });
    it('should get the *layout* content',function() {
        expect(createLocals().name).to.equal("Nick Bulbeck");
        expect(createLocals().miniBio).to.be.a('string');
        expect(createLocals().miniBio).to.not.have.lengthOf(0);
    });
    it('should get the *index* content',function() {
        const indexValues = createLocals('index');
        expect(indexValues.name).to.equal("Nick Bulbeck");
        for (property in content.index) {
            expect(indexValues[property]).to.be.a('string');
        }
    });
    it('should get the *about* content',function() {
        const aboutValues = createLocals('about');
        expect(aboutValues.name).to.equal("Nick Bulbeck");
        for (property in content.about) {
            expect(aboutValues[property]).to.equal(content.about[property]);
        }
    });
    it('should get the *project* content',function() {
        const projectValues = createLocals('project');
        expect(projectValues.name).to.equal("Nick Bulbeck");
        for (property in content.projects) {
            expect(projectValues[property]).to.equal(content.project[property]);
        }
    });
    it('should get the *errors* content',function() {
        const errorsValues = createLocals('errors');
        expect(errorsValues.name).to.equal("Nick Bulbeck");
        for (property in content.errors) {
            expect(errorsValues[property]).to.equal(content.errors[property]);
        }
    });
    it('should not crash if passed a non-existent page',function() {
        expect(createLocals(null).name).to.equal("Nick Bulbeck");
    })
})