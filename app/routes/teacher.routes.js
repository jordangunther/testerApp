var teacher = require('../controllers/teacher.ctrl'),
    passport = require('passport');

module.exports = function(app) {
    
    app.route('/api/teacher/')
        .get(teacher.list)
        .post();
    
    app.route('/api/teacher/:teacherId')
        .get(teacher.detailSpecific)
        .post();
}