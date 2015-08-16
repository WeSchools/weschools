var mongoose = require('mongoose');

// Answers to homework
var HomeworkAnswerSchema = new mongoose.Schema({
    homeworkAnswerId: Number,
    lessonId: Number,
    studentId: Number,
    answer: String,     // need to refine
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('HomeworkAnswer', HomeworkAnswerSchema);
