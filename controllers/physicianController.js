const db = require("../models/physician.js");
const Physician = require('../models/physician.js');
const bodyParser = require('body-parser');
//
//     const physCtrl = {
//       authenticate(req, res, next) {
//         Physician.findOne(
//           {username: req.body.username},
//           function(err, physician) {
//             if (err) throw err;
//             if(physician) {
//               physician.comparePassword(req.body.password, function(err, isMatch) {
//                 if (err) throw err;
//                 res.json(user);
//               });
//             } else {
//               res.status(404).send("Invalid Login Info")
//             }
//         });
//       },
//     }





// Defining methods for the physiciansController
module.exports = {
  findAll: function(req, res) {
    db.Physician
      .find(req.query)
      .sort({ date: -1 })
      .then(dbPhysician => res.json(dbPhysician))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Physician
      .findById(req.params.id)
      .then(dbPhysician => res.json(dbPhysician))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Physician
      .create(req.body)
      .then(dbPhysician => res.json(dbPhysician))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Physician
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbPhysician => res.json(dbPhysician))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Physician
      .findById({ _id: req.params.id })
      .then(dbPhysician => dbPhysician.remove())
      .then(dbPhysician => res.json(dbPhysician))
      .catch(err => res.status(422).json(err));
  }
};
