var course = require('../controllers/course.ctrl'),
    passport = require('passport');

module.exports = function(app) {
    
    app.route('/api/course')
        .get(course.list)
        .post();
    
    app.route('/api/course/:courseId')
        .get(course.detailSpecific)
        .post();
}