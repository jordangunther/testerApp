var Student = require('mongoose').model('Student'),
    passport = require('passport');

exports.login = function() {

}

exports.list = function(req, res) {
     Student.find({}).then(function(student){
         res.send(student);
     });
//   Student.create({
//           studentId: 0,
//           studentFirstName: 'Jordan',
//           studentLastName: 'Gunther',
//           studentDOB: 'Tue Jan 19 2016 18:40:27 GMT-0700 (MST)',
//           assignedPassword: 'JorGun',
//           teacher: {
//               teacherId: 0,
//               teacherName: 'Stephen Taylor'
//           },
//           courses: [{
//               courseId: 0,
//               courseName: 'History of FFVII',
//               tests: [{
//                   testId: 0,
//                   testName: 'The Rise of Sephiroth',
//                   completed: false,
//                   grade: 0,
//                   pass: false,
//                   answers: [],
//                   dateTaken: '',
//                   timeTaken: 0,
//                   certificateId: 0
//               }]
//           }],
//           school: {
//               schoolId: 0,
//               schoolName: 'Cool School'
//           }
//       }).then(function(response){
//           res.send(response);
//       })
}

exports.detailSpecific = function(req, res) {
    var studentId = req.params.studentId;
    Student.find({studentId: studentId}).then(function(data){
        if(data.length){
            res.send(data);
        } else {
            res.send('No student with that id present in this school.');
        }
    });
}

exports.detailSpecificScores = function(req, res) {
    var studentId = req.params.studentId;
    Student.find({studentId: studentId}).then(function(data) {
        if(!data.length) {
            res.send('No student with that id present in this school.');
        } else {
            var dataToSend = [];
            data[0].courses.forEach(function(course, index) {
                var totalScore = 0;
                var i = 1;
                var avgScore = 0;
                course.tests.forEach(function(test) {
                    if(test.grade) {
                        i++;
                        avgScore += test.grade;
                    }
                });
                avgScore = totalScore / i;
                dataToSend[index] = {
                     courseId: course.courseId, 
                     courseName: course.courseName, 
                     grade: avgScore
                };
            });
            res.send(dataToSend);
        }
    });
}

exports.detailSpecificTest = function(req, res) {
    var studentId = req.params.studentId,
        testId = req.params.testId;
    Student.find({studentId: studentId}).then(function(data){
        if(!data.length) {
            res.send('No student with that id present in this school.');
        } else {
            var requestedTest
            data[0].courses.forEach(function(course){
                course.tests.forEach(function(test){
                    if(test.testId == testId) {
                        requestedTest = test;
                    }
                });
            });
            if(requestedTest){
                res.send({
                    testId: requestedTest.testId,
                    testName: requestedTest.testName,
                    completed: requestedTest.completed,
                    grade: requestedTest.grade,
                    pass: requestedTest.pass,
                    dateTaken: requestedTest.dateTaken,
                    timeTaken: requestedTest.timeTaken,
                    certificateId: requestedTest.certificateId
                });
            } else {
                res.send('No test with that id on this student\'s record.')
            }
        }
    })
}