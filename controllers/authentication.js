// const jwt = require('jwt-simple');
// const Physician  = require('../models/Physician');
// // const config = require('../config');
//
// function tokenForUser(physician) {
//   const timestamp = new Date().getTime();
//   return jwt.encode({sub: user.id, iat:timestamp}, config.secret); // jwt is convention, sub means "subject"
// }
//
// exports.signin = function(req, res, next) {
//   // User has already had their email and password auth'd
//   // We just need to give them a token
//   res.send({ token: tokenForUser(req.physician) });
// }
//
// exports.signup = function(req, res, next) {
//   const username = req.body.username;
//   const email = req.body.email;
//   const password = req.body.password;
//   const specialty = req.body.speciality;
//
//   if (!email || !password || !username) {
//     return res.status(422).send({ error: 'You must provide username, email and password'});
//   }
//
//   // See if a user with the given email exists
//   Physician.findOne({ email: email }, function(err, existingUser) {
//     if (err) { return next(err); }
//
//     // If a user with email does exist, return an error
//     if (existingUser) {
//       return res.status(422).send({ error: 'Email is in use' });
//     }
//
//     // If a user with email does NOT exist, create and save user record
//     const doctor = new Physician({
//       username: username,
//       email: email,
//       password: password,
//       specialty: specialty
//     });
//
//     doctor.save(function(err) {
//       if (err) { return next(err); }
//
//       // Repond to request indicating the user was created
//       res.json({ token: tokenForUser(doctor) });
//     });
//   });
// }
