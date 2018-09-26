
const utils = require('./utils');
const expect = require('expect');

// it should ..that is BDD ..that's the principle mocha was built
it('should add two numbers', function(){
    var res = utils.add(33, 11);
    expect(res).toBe(44).toBeA('number');
}); 

// in case if your tests take more than two seconds mocha is going to assume 
// that is not what u want and its going to fail
//to make mocha aware about async function, we need to pass done
it('should add two numbers async', function(done) {
    utils.asyncAdd(2, 4, function(res){
        expect(res).toBe(6);
        done();
    });
});

