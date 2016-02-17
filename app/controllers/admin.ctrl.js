var Admin = require('mongoose').model('Admin'),
    passport = require('passport');

exports.login = function(req, res) {
    res.send('Login for admins. Will be updated later.');
}