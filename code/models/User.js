var mongoose = require('mongoose');

// All users of the system, including students, teachers, contacts of students or any other kind of users.
var UserSchema = new mongoose.Schema({
    userId: Number,
    alias: String,  // unique
    phone: String,  // unique, one phone number, used for login
    email: String,  // unique, one email address, used for login
    password: String,   // hashed password (use SHA-256?)
    autonym: String,   // autonym in ID card
    socialId: String,   // Identity no
    socialIdType: Number,   // Identity card type
    note: String,
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);
