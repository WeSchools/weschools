var mongoose = require('mongoose');

var StudentContactSchema = new mongoose.Schema({
    studentContactId: number,
    studentUserId: number,
    contactUserId: number,
    relationTypeId: number,
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('StudentContact', StudentContactSchema);