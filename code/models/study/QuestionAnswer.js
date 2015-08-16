var mongoose = require('mongoose');

// Answers to QuestionAnswer
var QuestionAnswerSchema = new mongoose.Schema({
    questionAnswerId: Number,
    content: String,
    questionId: Number,
    toQuestionAnswerId: Number, // not null if reply to an answer. This allow to organize the answers in thread.
    rateUp: Number,
    rateDown: Number,
    markAsAnswer: Number,
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('QuestionAnswer', QuestionAnswerSchema);
