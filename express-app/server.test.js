
const request = require('supertest');

var app = require('./server').app;
const expect = require('expect');

describe('Test web Server', ()=>{
// it('should retrun hello world response', (done)=>{
//     request(app)
//     .get('/')
//     .expect(200)
//     .expect('Hey client')
//     .end(done);
// });

// it('should return error response', (done)=>{
//     request(app)
//     .get('/route1')
//     .expect(404)
//     .expect({error:'page not found'})
//     .end(done);
// });

// it('should return error response object and check it has name property', (done)=>{
//     request(app)
//     .get('/route2')
//     .expect(404)
//     .expect((res)=>{
//         expect(res.body).toInclude({
//             name : 'Todo API v1.0'
//         })
//     })
//     .end(done);
// });

it('should return error response object and check it has name property', (done)=>{
    request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
        expect(res.body.user.length).toBe(2);
    })
    .expect((res)=>{
        expect(res.body.user).toInclude( {name:'one', age:1} );
    })
    .end(done);
});
});



