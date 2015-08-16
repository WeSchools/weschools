var mongoose = require('mongoose');

var CourseSchema = new mongoose.Schema({
    courseId: Number,
    year: Number,       //ѧ��
    note: String,
    subjectId: Number,
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', CourseSchema);
