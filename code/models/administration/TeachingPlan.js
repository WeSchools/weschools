var mongoose = require('mongoose');

// 课堂
var TeachingPlanSchema = new mongoose.Schema({
    teachingPlanId: Number,
    courseSemesterId: Number,
    teacherId: Number,  // in most case, this is same as teacherId in courseSemester.
    note: String,
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('TeachingPlan', TeachingPlanSchema);
