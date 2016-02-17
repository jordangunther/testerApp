var certificates = require('../controllers/certificate.ctrl'),
    passport = require('passport');

module.exports = function(app) {
    
    app.route('/api/cert/:courseId')
        .get(certificates.detailSpecific)
        .post();
}