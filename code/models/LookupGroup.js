var mongoose = require('mongoose');

var LookupGroupSchema = new mongoose.Schema({
    lookupGroupId: number,
    name: String,
    note: String,
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('LookupGroup', LookupGroupSchema);
