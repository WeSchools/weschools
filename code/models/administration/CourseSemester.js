var mongoose = require('mongoose');

var CourseSemesterSchema = new mongoose.Schema({
    courseSemesterId: Number,
    courseId: Number,
    sequence: Number,
    teacherId: Number,
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('CourseSemester', CourseSemesterSchema);
