var admin = require('../controllers/admin.ctrl'),
    passport = require('passport');

module.exports = function(app) {
    
    app.route('/api/admin/')
        .get()
        .post(admin.login);
}