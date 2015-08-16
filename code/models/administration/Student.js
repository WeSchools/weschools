var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
    studentId: number,
    studentNo: String,
    userId: number,
    majors: Array,
    note: String,
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Student', StudentSchema);
