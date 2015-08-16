var mongoose = require('mongoose');

// 课堂出勤
var LessionAttendanceSchema = new mongoose.Schema({
    lessionAttendanceId: Number,
    lessonId: Number,
    studentId: Number,
    status: Number,  // 0-unkown, 1-present, 2-absence.
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('LessionAttendance', LessionAttendanceSchema);
