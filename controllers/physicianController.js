const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Physician
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Physician
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Physician
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Physician
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Physician
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};



// const Physician = require('../models/physician.js');
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
//
// exports.register = function(req, res) {
//   const newPhysician = new Physician(req.body);
//   newPhysician.password = brcypt.hashSync(req.body.password, 10);
//   newPhysician.save(function(err, physician) {
//     if (err) {
//       return res.status(400).send({
//         message: err
//       });
//     } else {
//       physician.password = undefined;
//       return res.json(physician)
//     }
//   });
// };
// exports.sign_in = function(req, res) {
//   Physician.findOne({
//     email: req.body.email
//   }, function(err, physician) {
//     if (err) throw err;
//     if (!physician) {
//       res.status(401).json({ message: 'Authentication failed. User Not Found.' });
//     } else if (physician) {
//       if (!physician.comparePassword(req.body.password)) {
//         res.status(401).json({ message: 'Authentication failed. Wrong Password.' });
//       } else {
//         return res.json({token: jwt.sign({ email: physician.email, username: physician.username, specialty: physician.specialty, _id: physician._id}, 'WORKING')});
//         }
//       }
//     });
//   };
// exports.loginRequired = function(req, res, next) {
//   if (req.physician) {
//     next();
//   } else {
//     return res.status(401).json({ message: 'Unauthorized User!' });
//     }
//   };
