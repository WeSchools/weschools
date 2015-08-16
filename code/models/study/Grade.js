var mongoose = require('mongoose');

// Grades
var GradeSchema = new mongoose.Schema({
    gradeId: Number,
    lessonId: Number,   // null: not for particular lesson.
    studentId: Number,
    gradeTypeId: Number, // unit, mid-semester, semester, yearly, etc
    gradeLevelId: Number,   // 优秀, 良好, etc.
    comment: String,
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Grade', GradeSchema);
