var mongoose = require('mongoose');

// GradeFeedbacks
var GradeFeedbackSchema = new mongoose.Schema({
    gradeFeedbackId: Number,
    testId: Number,
    studentId: Number,
    feedback: String,
    toGradeFeedbackId: Number,   // reply thread
    creatorId: Number,  // Can be a teacher, student or a contact(parent or other guardian)
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('GradeFeedback', GradeFeedbackSchema);
