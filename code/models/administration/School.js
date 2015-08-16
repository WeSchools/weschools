var mongoose = require('mongoose');

var SchoolSchema = new mongoose.Schema({
    schoolId: Number,
    name: String,
    numberOfClass: Number,
    numberOfTeacher: Number,
    regionId: Number,
    goal: String,       //办学目标
    character: String,  //办学特色
    strategy: String,   //教育理念
    principle: String,  //办学方针
    awards: String,     //学校荣誉
    headMaster: String, //校长介绍
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('School', SchoolSchema);
