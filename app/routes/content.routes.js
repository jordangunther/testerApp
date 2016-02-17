var content = require('../controllers/content.ctrl'),
    passport = require('passport');

module.exports = function(app) {
    
    app.route('/api/content/:courseId')
        .get(content.detailSpecific)
        .post();
}