var mongoose = require('mongoose');

// µ÷²é
var QuestionSchema = new mongoose.Schema({
    questionId: Number,
    title: String,
    optional: Boolean,  // true if require to answer
    multiple: Boolean,  // true if ask user to make multiple select. the question doesn't need to have multiple answers.
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Question', QuestionSchema);
