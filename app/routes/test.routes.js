var test = require('../controllers/test.ctrl'),
    passport = require('passport');

module.exports = function(app) {
    
    app.route('/api/tests/')
        .get(test.list)
        .post();
    
    app.route('/api/tests/:testId')
        .get(test.detailSpecific)
        .post();
    
    app.route('/api/tests/:testId/:studentId')
        .get(test.detailSpecificStudent)
        .post();
    
    app.route('/api/tests/:testId/:studentId/:questionId')
        .get(test.detailSpecificQuestion)
        .post();
}