var mongoose = require('mongoose');

// ѧ��, ����:��ѧ,����
var SubjectSchema = new mongoose.Schema({
    subjectId: Number,
    name: String,       
    note: String,
    parentSubjectId: Number,
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Subject', SubjectSchema);
