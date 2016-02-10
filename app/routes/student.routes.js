var student = require('../controllers/student.ctrl'),
    passport = require('passport');

module.exports = function(app) {
    
    app.route('/api/student/')
        .get(student.list)
        .post();
    
    app.route('/api/student/:studentId')
        .get(student.detailSpecific)
        .post();
    
    app.route('/api/student/:studentId/scores')
        .get(student.detailSpecificScores)
        .post();
    
    app.route('/api/student/:studentId/:testId')
        .get(student.detailSpecificTest)
        .post();
    
}