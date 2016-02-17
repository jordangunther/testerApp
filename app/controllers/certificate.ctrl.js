var Certificate = require('mongoose').model('Certificate'),
    passport = require('passport');

exports.detailSpecific = function(req, res) {
    var courseId = req.params.courseId
    Certificate.find({courseId: courseId}).then(function(data){
        if(data.length) {
            res.send(data[0].issuedTo);
        } else {
            res.send('There is no certificate for this course id.');
        }
    }); 
}