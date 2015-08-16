var mongoose = require('mongoose');

// TestScores
var TestScoreSchema = new mongoose.Schema({
    TestScoreId: Number,
    testId: Number,
    studentId: Number,
    score: Number,
    note: String,
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('TestScore', TestScoreSchema);
