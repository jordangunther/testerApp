var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SchoolSchema = new Schema({
    schoolId: Number,
    schoolName: String,
    schoolLocation: String,
    schoolDescription: String,
    teachers: [{
        teacherId: Number,
        teacherName: String
    }],
    courses: [{
        courseId: Number,
        courseName: String
    }],
    students: Array,
    admins: [{
        adminId: Number,
        adminName: String
    }]
});

mongoose.model('School', SchoolSchema);