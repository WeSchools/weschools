var mongoose = require('mongoose');

// answer of participant
var QuestionSchema = new mongoose.Schema({
    questionId: Number,
    options: Array,
    answer: String,
    userType: Number,    // 1-Teacher, 2 -Student. Introduce this as a teacher may have same Id as a student.
    userId: Number,
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Question', QuestionSchema);
