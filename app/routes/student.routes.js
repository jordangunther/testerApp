var student = require('../controllers/student.ctrl'),
    passport = require('passport');

module.exports = function(app) {
    
    app.route('/student/')
        .get(student.list)
        .post();
}