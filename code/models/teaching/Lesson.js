var mongoose = require('mongoose');

// Actual lesson
var LessonSchema = new mongoose.Schema({
    lessonId: Number,
    courseSemesterId: Number,
    teacherId: Number,  // in most case, this is same as teacherId in courseSemester.
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Lesson', LessonSchema);
