var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AdminSchema = new Schema({
    adminId: Number,
    adminName: String,
    customPasswordHash: String,
    registrationDate: Date,
    school: {
        schoolId: Number,
        schoolName: String
    },
    courses: [{
        courseId: Number,
        courseName: String
    }]
});

mongoose.model('Admin', AdminSchema);