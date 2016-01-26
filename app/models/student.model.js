var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StudentSchema = new Schema({
    studentId: Number,
    studentFirstName: String,
    studentLastName: String,
    studentDOB: String,
    assignedPassword: String,
    teacher: {
        teacherId: Number,
        teacherName: String
    },
    courses: [{
        courseId: Number,
        courseName: String,
        tests: [{
            testId: Number,
            testName: String,
            completed: Boolean,
            grade: Number,
            pass: Boolean,
            answers: Array,
            dateTaken: Date,
            timeTaken: Number,
            certificateId: Number
        }]
    }],
    school: {
        schoolId: Number,
        schoolName: String
    }
});

mongoose.model('Student', StudentSchema);