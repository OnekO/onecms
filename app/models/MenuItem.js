var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var menuItemSchema = new Schema({
    menuItemId: {type: String},
    name: {type: String},
    cssClass: {type: String},
    type: {type: String},
    url: {type: Boolean},
    pageId: {type: String},
    priority: {type: String},
    isNested: {type: String},
    siteId: {type: String},
    modifiedBy: {type: String},
    modifiedOn: {type: Date}
});

module.exports = mongoose.model('MenuItem', menuItemSchema);
