var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userSchema = new Schema({
    userId: {type: String},
    email: {type: String},
    password: {type: String},
    firstName: {type: String},
    lastName: {type: String},
    picture: {type: String},
    role: {type: String},
    language: {type: String},
    siteId: {type: String},
    token: {type: String},
    isActive: {type: Boolean},
    siteAdmin: {type: Boolean},
    created: {type: Date}
});

module.exports = mongoose.model('User', userSchema);
