var mongoose = require('mongoose');

// Questions
var QuestionSchema = new mongoose.Schema({
    questionId: Number,
    lessonId: Number,   // null: not for particular lesson.
    topic: String,
    note: String,
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Question', QuestionSchema);
