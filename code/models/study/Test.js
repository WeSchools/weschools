var mongoose = require('mongoose');

// Tests
var TestSchema = new mongoose.Schema({
    testId: Number,
    lessonId: Number,   // null: not for particular lesson.
    topic: String,
    testTypeId: Number, // unit, mid-semester, semester, yearly, etc
    note: String,
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Test', TestSchema);
