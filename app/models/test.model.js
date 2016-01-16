var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TestSchema = new Schema({
    testId: Number,
    testName: String,
    questions: [{
        questionContent: String,
        answerChoices: Array,
        correctAnswers: Array
    }],
    course: {
        courseId: Number,
        courseName: String
    }
});

mongoose.model('Tets', TestSchema);