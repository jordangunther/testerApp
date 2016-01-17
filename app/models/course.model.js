var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CourseSchema = new Schema({
    courseId: Number,
    courseName: String,
    teacher: {
        teacherId: Number,
        teacherName: String
    },
    students: Array,
    test: [{
        testId: Number,
        testName: String
    }],
    school: {
        schoolId: Number,
        schoolName: String
    }
});

mongoose.model('Course', CourseSchema);