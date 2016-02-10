var Student = require('mongoose').model('Student'),
    passport = require('passport');

exports.login = function() {

}

exports.list = function(req, res) {
    // Student.find({}).then(function(student){
    //     res.send(student);
    // });
   Student.create({
           studentId: 0,
           studentFirstName: 'Jordan',
           studentLastName: 'Gunther',
           studentDOB: 'Tue Jan 19 2016 18:40:27 GMT-0700 (MST)',
           assignedPassword: 'JorGun',
           teacher: {
               teacherId: 0,
               teacherName: 'Stephen Taylor'
           },
           courses: [{
               courseId: 0,
               courseName: 'History of FFVII',
               tests: [{
                   testId: 0,
                   testName: 'The Rise of Sephiroth',
                   completed: false,
                   grade: 0,
                   pass: false,
                   answers: [],
                   dateTaken: '',
                   timeTaken: 0,
                   certificateId: 0
               }]
           }],
           school: {
               schoolId: 0,
               schoolName: 'Cool School'
           }
       }).then(function(response){
           res.send(response);
       })
}
