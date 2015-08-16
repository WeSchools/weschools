var mongoose = require('mongoose');

// 调查
var TopicSchema = new mongoose.Schema({
    topicId: Number,
    Note: String,
    creatorType: Number,    // 1-Teacher, 2 -Student. Introduce this as a teacher may have same Id as a student.
    creatorId: Number,
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Topic', TopicSchema);
