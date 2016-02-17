var School = require('mongoose').model('School'),
    passport = require('passport');

exports.list = function(req, res) {
    School.find().then(function(data){
        if(data.length) {
            res.send(data);
        } else {
            res.send('No school found with this id.');
        }
    })
}
