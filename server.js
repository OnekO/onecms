'use strict';

/**
 * Module dependencies.
 */
var express = require('express'),
    fs = require('fs'),
    mongoose = require('mongoose');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Initializing system variables
var config = require('./config/config');
var db     = mongoose.connect(config.db);

//Bootstrap models
var models_path = __dirname + '/app/models';
var walk = function(path) {
    fs.readdirSync(path).forEach(function(file) {
        var newPath = path + '/' + file;
        var stat = fs.statSync(newPath);
        if (stat.isFile()) {
            if (/(.*)\.(js|coffee)/.test(file)) {
                require(newPath);
            }
        } else if (stat.isDirectory()) {
            walk(newPath);
        }
    });
};
walk(models_path);

var app = express();
mongoose.connection.on('connected', function() {
    console.log('connected');
    // Express/Mongo session storage
    var session = require('express-session');
    var MongoStore = require('connect-mongo')({session: session});
    app.use(session({
        secret: config.sessionSecret,
        store: new MongoStore({
            db: db.connection.db,
            collection: config.sessionCollection
        })
    }));
});

//express settings
require('./config/express')(app, db);

//Bootstrap routes
require('./config/routes')(app);

//Start the app by listening on <port>
var port = config.port;
app.listen(port);
console.log('Express app started on port ' + port);

//expose app
exports = module.exports = app;
