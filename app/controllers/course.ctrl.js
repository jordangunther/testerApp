var Course = require('mongoose').model('Course'),
    passport = require('passport');

exports.list = function(req, res) {
    Course.find().then(function(data){
        if(data.length){
            res.send(data);
        } else {
            res.send('There are literally no courses for this school.');
        }
    });
}

exports.detailSpecific = function(req, res) {
    var courseId = req.params.courseId;
    Course.find({courseId: courseId}).then(function(data){
        if(data.length) {
            res.send(data);
        } else {
            res.send('There is no course with this id at this school');
        }
    });
}