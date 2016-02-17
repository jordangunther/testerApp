var Teacher = require('mongoose').model('Teacher'),
    passport = require('passport');

exports.login = function(req, res) {
    
}

exports.list = function(req, res) {
    Teacher.find().then(function(data) {
        if(data.length) {
            res.send(teachers);
        } else {
            res.send('No teachers present in this school.');
        }
    });
}

exports.detailSpecific = function(req, res) {
    var teacherId = req.params.teacherId;
    Teacher.find({teacherId: teacherId}).then(function(data){
        if(data.length) {
            res.send(data);
        } else {
            res.send('No Teacher with that id at this school.');
        }
    });
}