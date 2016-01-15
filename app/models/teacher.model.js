var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TeacherSchema = new Schema({
    teacherId: Number,
    teacherName: String,
    initialPassword: String,
    customPasswordHash: String,
    registrationDate: Date,
    students: Array,
    school: {
        schoolId: Number,
        schoolName: String
    },
    courses: [{
        courseId: Number,
        courseName: String
    }]
});

mongoose.model('Teacher', TeacherSchema);