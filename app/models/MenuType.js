var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var menuTypeSchema = new Schema({
    menuTypeId: {type: String},
    friendlyId: {type: String},
    name: {type: String},
    siteId: {type: String},
    modifiedBy: {type: String},
    modifiedOn: {type: Date}
});

module.exports = mongoose.model('MenuType', menuTypeSchema);
