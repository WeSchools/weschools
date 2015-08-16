var mongoose = require('mongoose');

// 课堂
var TeachingPlanLessonSchema = new mongoose.Schema({
    teachingPlanLessonId: Number,
    teachingPlanId: Number,
    teacherId: Number,  // in most case, this is same as teacherId in courseSemester.
    note: String,
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('TeachingPlanLesson', TeachingPlanLessonSchema);
