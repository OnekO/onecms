var users = require('../../app/controllers/users');

module.exports = function (app) {
    app.route('/register').get(users.renderRegister);
    app.route('/login').get(users.renderLogin);
    app.get('/logout', users.logout);
};
