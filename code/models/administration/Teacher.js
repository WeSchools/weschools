var mongoose = require('mongoose');

var TeacherSchema = new mongoose.Schema({
    teacherId: Number,
    userId: Number,
    majorIds: Array,
    note: String,
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Teacher', TeacherSchema);
