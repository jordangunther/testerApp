var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function () {
    var db = mongoose.connect(config.db);
    
    require('../models/admin.model');
    require('../models/certificate.model');
    require('../models/content.model');
    require('../models/course.model');
    require('../models/school.model');
    require('../models/student.model');
    require('../models/teacher.model');
    require('../models/test.model');
    
    return db;
};