var mongoose = require('mongoose');

// 
var OptionSchema = new mongoose.Schema({
    optionId: Number,
    title: String,
    followupQuestionIds: Array, // following up question based on the choice of the user
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Option', OptionSchema);
