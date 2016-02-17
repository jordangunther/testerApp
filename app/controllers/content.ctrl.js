var Content = require('mongoose').model('Content'),
    passport = require('passport');

exports.detailSpecific = function(req, res) {
    var courseId = req.params.courseId;
    Content.find({courseId: courseId}).then(function(data){
        if(data.length) {
            res.send(data);
        } else {
            res.send('There is no content for this course at this school.');
        }
    });
}