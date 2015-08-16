var mongoose = require('mongoose');

// 学科, 例如:数学,语文
var SubjectSchema = new mongoose.Schema({
    subjectId: Number,
    name: String,       
    note: String,
    parentSubjectId: Number,
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Subject', SubjectSchema);
