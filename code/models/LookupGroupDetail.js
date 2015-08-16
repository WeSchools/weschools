var mongoose = require('mongoose');

var LookupGroupDetailSchema = new mongoose.Schema({
    lookupGroupDetailId: number,
    lookupGroupId: number,
    key: String,
    value: String,
    note: String,
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('LookupGroupDetail', LookupGroupDetailSchema);