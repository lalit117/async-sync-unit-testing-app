
var db = require('./db.js');

module.exports.handleSignUp = (email, passwd) => {
    // check if email exist
    // save the user to the database
    db.saveUser({
        email: email,
        passwd: passwd
    })
    // send the welcome email
}

