const Physician = require('../models/physician.js');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = function(req, res) {
  const newPhysician = new Physician(req.body);
  newPhysician.password = brcypt.hashSync(req.body.password, 10);
  newPhysician.save(function(err, physician) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      physician.password = undefined;
      return res.json(physician)
    }
  });
};
exports.sign_in = function(req, res) {
  Physician.findOne({
    email: req.body.email
  }, function(err, physician) {
    if (err) throw err;
    if (!physician) {
      res.status(401).json({ message: 'Authentication failed. User Not Found.' });
    } else if (physician) {
      if (!physician.comparePassword(req.body.password)) {
        res.status(401).json({ message: 'Authentication failed. Wrong Password.' });
      } else {
        return res.json({token: jwt.sign({ email: physician.email, username: physician.username, specialty: physician.specialty, _id: physician._id}, 'WORKING')});
        }
      }
    });
  };
exports.loginRequired = function(req, res, next) {
  if (req.physician) {
    next();
  } else {
    return res.status(401).json({ message: 'Unauthorized User!' });
    }
  };


    // const physCtrl = {
    //   authenticate(req, res, next) {
    //     Physician.findOne(
    //       {username: req.body.username},
    //       function(err, physician) {
    //         if (err) throw err;
    //         if(physician) {
    //           physician.comparePassword(req.body.password, function(err, isMatch) {
    //             if (err) throw err;
    //             res.json(user);
    //           });
    //         } else {
    //           res.status(404).send("Invalid Login Info")
    //         }
    //     });
    //   },
    // }





// Defining methods for the physiciansController
// module.exports = {
//   findAll: function(req, res) {
//     db.Physician
//       .find(req.query)
//       .sort({ date: -1 })
//       .then(dbPhysician => res.json(dbPhysician))
//       .catch(err => res.status(422).json(err));
//   },
//   findById: function(req, res) {
//     db.Physician
//       .findById(req.params.id)
//       .then(dbPhysician => res.json(dbPhysician))
//       .catch(err => res.status(422).json(err));
//   },
//   create: function(req, res) {
//     db.Physician
//       .create(req.body)
//       .then(dbPhysician => res.json(dbPhysician))
//       .catch(err => res.status(422).json(err));
//   },
//   update: function(req, res) {
//     db.Physician
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbPhysician => res.json(dbPhysician))
//       .catch(err => res.status(422).json(err));
//   },
//   remove: function(req, res) {
//     db.Physician
//       .findById({ _id: req.params.id })
//       .then(dbPhysician => dbPhysician.remove())
//       .then(dbPhysician => res.json(dbPhysician))
//       .catch(err => res.status(422).json(err));
//   }
// };
