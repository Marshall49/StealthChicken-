const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;
var bcryptNode = require('bcrypt-nodejs');


const PhysicianSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  email: { type: String, required: true },
  specialty: { type: String, required: true}
  // date: { type: Date, default: Date.now }
});

PhysicianSchema.pre('save', function(next) {
    var physician = this;
    // only hash the password if it has been modified (or is new)
    if (!physician.isModified('password')) return next();
    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);
        // hash the password using our new salt
        bcrypt.hash(physician.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            physician.password = hash;
            next();
        });
    });
});
PhysicianSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

const Physician = mongoose.model("Physician", PhysicianSchema);
module.exports = Physician;
