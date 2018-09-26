
const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');
// app.__set__()
// app.__get__()


describe('App', ()=> {
    var db = {
        saveUser : expect.createSpy()
    };
    app.__set__('db', db);

    it('Should call the spy correctly', ()=>{
        var spy = expect.createSpy();
        spy('lalit', 24);  // spy called, if commented it will not get called

        //expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith('lalit',24);
    });

    it('should call saveUser with user object', ()=>{
        var email = 'abc@gmail.com';
        var passwd = '12345';

        app.handleSignUp(email, passwd);
        expect(db.saveUser).toHaveBeenCalledWith({email, passwd});
    });
});

