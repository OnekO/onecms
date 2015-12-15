var users = require('../../app/controllers/users');

module.exports = function (app) {
    app.route('/users').post(users.create).get(users.list);
    app.route('/users/:userId')
        .get(users.read)
        .put(users.update)
        .delete(users.delete);

    app.route('/users').post(users.create).get(users.list);

    app.param('userId', users.userByID);
};
