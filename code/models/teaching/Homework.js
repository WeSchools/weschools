var mongoose = require('mongoose');

// Homework assigned by teacher for lesson
var HomeworkSchema = new mongoose.Schema({
    homeworkId: Number,
    lessonId: Number,
    topic: String,
    note: String,
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Homework', HomeworkSchema);
