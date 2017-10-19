const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');


const UserSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },

  email: { type: String, required: true, match: [/.+\@.+\..+/, "Please Enter a valid Email"]},
  specialty: { type: String, required: true},
  case: { type: Schema.Types.ObjectId, ref: "dCase" }
  date: { type: Date, default: Date.now },
});

UserSchema.pre('save', function(next) {
    var user = this;
    // only hash the password if it has been modified (or is new)
    if (!this.isModified('password') || this.brandNew) {
    // generate a salt
    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);
        // hash the password using our new salt
        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
  } else {
    return next();
  }
});
UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

const User = mongoose.model("Users", UserSchema, "users");
module.exports = User;
