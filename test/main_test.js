var expect = require('chai').expect;

//Test Suite
//tests similar functions
//write a sanity check
describe('Mocha', function(){ //describe what you are checking in first string
    //Test spec (unit test) contains in it()
    it('should run our tests using npm', function(){
        expect(1 === 1).to.be.ok; //tests if value is truthy
    });
});