var mongoose = require('mongoose');

// 调查呈现形式
var PresentationSchema = new mongoose.Schema({
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Presentation', PresentationSchema);
