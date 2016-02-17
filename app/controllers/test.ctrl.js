var Test = require('mongoose').model('Test'),
    Student = require('mongoose').model('Student'),
    passport = require('passport');

exports.list = function(req, res) {
    Test.find().then(function(data){
        if(data.length) {
            res.send(data);
        } else {
            res.send('There isn\'t a single test in this school.')
        }
    });
}

exports.detailSpecific = function(req, res) {
    var testId = req.params.testId;
    Test.find({testId: testId}).then(function(data) {
        if(data.length) {
            res.send(data);
        } else {
            res.send('There is no test with this id at this school.')
        }
    });
}

exports.detailSpecificStudent = function(req, res) {
    var testId = req.params.testId;
    var studentId = req.params.studentId;
    Student.find({studentId: studentId}).then(function(data) {
        
    });   
}

exports.detailSpecificQuestion = function(req, res) {
    var testId = req.params.testId,
        studentId = req.params.studentId,
        questionId = req.params.questionId
}