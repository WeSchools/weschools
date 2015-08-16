var mongoose = require('mongoose');

// 用于记录学校所属学区
var RegionSchema = new mongoose.Schema({
    regionId: int,
    name: String,
    note: String,
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Region', RegionSchema);
