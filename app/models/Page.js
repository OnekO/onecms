var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var pageSchema = new Schema({
    pageId: {type: String},
    friendlyId: {type: String},
    name: {type: String},
    description: {type: String},
    keywords: {type: Boolean},
    tags: {type: Boolean},
    content: {type: Boolean},
    draft: {type: Boolean},
    callout: {type: String},
    beginDate: {type: Date},
    endDate: {type: Date},
    location: {type: String},
    latLong: {type: String},
    layout: {type: String},
    stylesheet: {type: String},
    isActive: {type: Boolean},
    Image: {type: String},
    IncludeOnly: {type: String},
    pageTypeId: {type: String},
    siteId: {type: String},
    modifiedBy: {type: String},
    modifiedOn: {type: Date},
    created: {type: Date}

});

module.exports = mongoose.model('Page', pageSchema);

