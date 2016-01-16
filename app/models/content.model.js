var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ContentSchema = new Schema({
    courseId: Number,
    courseName: String,
    filepath: String,
    teacherId: Number,
    teacherName: String,
    uploadedDate: Date
});

mongoose.model('Content', ContentSchema);