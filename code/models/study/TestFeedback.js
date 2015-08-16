var mongoose = require('mongoose');

// TestFeedbacks
var TestFeedbackSchema = new mongoose.Schema({
    TestFeedbackId: Number,
    testId: Number,
    studentId: Number,
    feedback: String,
    toTestFeedbackId: Number,   // reply thread
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('TestFeedback', TestFeedbackSchema);
