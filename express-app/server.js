
const express = require('express');

var app = express();

app.get('/', (req, res) =>{
    res.status(200).send('Hey client')
});

app.get('/route1', (req, res) =>{
    res.status(404).send({
        error : 'page not found'
    });
});

app.get('/route2', (req, res) =>{
    res.status(404).send({
        error : 'page not found',
        name : 'Todo API v1.0'
    });
});

app.get('/users', (req, res) =>{
    res.status(200).send({
        user : [
            {name : 'one', age : 1},
            {nmae : 'two', age : 2}
        ]
    });
});



app.listen(3000, ()=>{
    console.log('Server started listening on 3000');
});

module.exports.app = app;