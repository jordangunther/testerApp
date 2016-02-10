var passport = require('passport');

module.exports = function(app) {

    app.route('/api/avalanche')
        .get(function(req, res){ res.send('Hello World!') })
        .post();
}
