var mongoose = require('mongoose');

// �༶���, һ���༶��Ŵ�һ�꼶��ʼʹ��,ֱ�������ű�ʶ�İ༶������
var ClassSchema = new mongoose.Schema({
    startYear: Number,
    sequence: Number,   // ����
    name: String,   // Calculated from name_template if no input from user.
    name_template: String, // for example: {startYear}��{sequence}��, or {current_year - startYear + 1}��{sequence}��
    note: String,
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Class', ClassSchema);
