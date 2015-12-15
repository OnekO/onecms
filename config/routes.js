var async = require('async');

module.exports = function(app) {

    //Home route
    var index = require('../app/controllers/index');
    app.get('/', index.render);

    require('../app/routes/users.js')(app);
    require('../app/routes/api/users.js')(app);
};

