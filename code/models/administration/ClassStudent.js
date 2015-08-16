var mongoose = require('mongoose');

// 学生所在班级信息。
var ClassSchema = new mongoose.Schema({
    classId: Number,
    studentId: Number,
    fromDate: Date, // include
    toDate: Date,   // inlcude
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Class', ClassSchema);
