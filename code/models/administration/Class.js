var mongoose = require('mongoose');

// 班级编号, 一个班级编号从一年级开始使用,直到这个编号标识的班级结束。
var ClassSchema = new mongoose.Schema({
    startYear: Number,
    sequence: Number,   // 几班
    name: String,   // Calculated from name_template if no input from user.
    name_template: String, // for example: {startYear}年{sequence}班, or {current_year - startYear + 1}年{sequence}班
    note: String,
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Class', ClassSchema);
