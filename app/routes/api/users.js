var users = require('../../../app/controllers/api/users');

module.exports = function (app) {
    app.route('/api/users').post(users.create).get(users.list);
    app.route('/api/users/:userId')
        .get(users.read)
        .put(users.update)
        .delete(users.delete);

    app.route('/api/users').post(users.create).get(users.list);

    app.param('userId', users.userByID);

    app.route('/api/register').post(users.register);

    /*app.route('/login').post(passport.authenticate('local', {
     successRedirect: '/',
     failureRedirect: '/login',
     failureFlash: true
     }));*/
};
