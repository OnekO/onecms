var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var pageTypeSchema = new Schema({
    pageTypeId: {type: String},
    friendlyId: {type: String},
    layout: {type: String},
    stylesheet: {type: String},
    isSecure: {type: Boolean},
    siteId: {type: String},
    modifiedBy: {type: String},
    modifiedOn: {type: Date}
});

module.exports = mongoose.model('PageType', pageTypeSchema);

