var school = require('../controllers/school.ctrl'),
    passport = require('passport');

module.exports = function(app) {
    
    app.route('/api/school/')
        .get(school.list)
        .post();
    
}