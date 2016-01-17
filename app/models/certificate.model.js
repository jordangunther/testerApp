var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CertificateSchema = new Schema({
    courseId: Number,
    testId: Number,
    fileReference: String,
    issuedTo: Array
});

mongoose.model('Certificate', CertificateSchema);