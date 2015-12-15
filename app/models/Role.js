var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var roleSchema = new Schema({
    roleId: {type: String},
    name: {type: String},
    siteId: {type: String},
    canView: {type: Boolean},
    canEdit: {type: Boolean},
    canPublish: {type: Boolean},
    canRemove: {type: Boolean},
    created: {type: Date}
});

module.exports = mongoose.model('Role', roleSchema);
