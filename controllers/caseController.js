const db = require("../models");

// Defining methods for the physiciansController
module.exports = {
  findAll: function(req, res) {
    db.dCase
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.dCase
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.dCase
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.dCase
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.dCase
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};





// const mongoose = require('mongoose');
// const dCase = require('../models/dCase.js');
// const physcase = require('../models/physician.js');
//
// exports.list_all_cases = function(req,res) {
//   physcase.find({}, function(err, doc) {
//     if (err)
//       res.send(err);
//     res.json(doc);
//   });
// };
//
// exports.create_a_case = function(req, res) {
//   const new_case = new dCase(req.body);
//   new_case.save(function(err, dCase) {
//     if (err)
//       res.send(err);
//     res.json(dCase);
//   });
// };
//
// exports.read_a_case = function(req, res) {
//   physcase.findOne({ "_id": req.params.caseId, function(err, dCase) {
//     if (err)
//       res.send(err);
//     res.json(dCase);
//   });
// };
//
// exports.update_a_case = function(req, res) {
//   physcase.findOneAndUpdate({ "_id":req.params.caseId }, req.body, {new: true}, function(err, dCase) {
//     if (err);
//       res.send(err);
//     res.json(dCase);
//   });
// };
//
// exports.delete_a_case = function(req, res) {
//   physcase.remove({
//     _id: req.params.caseId
//   }, function(err, dCase) {
//     if(err)
//       res.send(err);
//     res.json({ message: 'Case successfully deleted' });
//   });
// };
