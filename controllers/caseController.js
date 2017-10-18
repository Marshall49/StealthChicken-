const mongoose = require('mongoose');
const dCase = require('../models/dCase.js');

exports.list_all_cases = function(req,res) {
  dCase.find({}, function(err, dCase) {
    if (err)
      res.send(err);
    res.json(dCase);
  });
};

exports.create_a_case = function(req, res) {
  const new_case = new dCase(req.body);
  new_case.save(function(err, dCase) {
    if (err)
      res.send(err);
    res.json(dCase);
  });
};

exports.read_a_case = function(req, res) {
  dCase.findById(req.params.caseId, function(err, dCase) {
    if (err)
      res.send(err);
    res.json(dCase);
  });
};

exports.update_a_case = function(req, res) {
  dCase.findOneAndUpdate({_id:req.params.caseId}, req.body, {new: true}, function(err, dCase) {
    if (err);
      res.send(err);
    res.json(dCase);
  });
};

exports.delete_a_case = function(req, res) {
  dCase.remove({
    _id: req.params.caseId
  }, function(err, dCase) {
    if(err)
      res.send(err);
    res.json({ message: 'Case successfully deleted' });
  });
};








// const db = require("../models/case.js");
//
// // Defining methods for the physiciansController
// module.exports = {
//   findAll: function(req, res) {
//     db.case
//       .find(req.query)
//       .sort({ date: -1 })
//       .then(dbcase => res.json(dbcase))
//       .catch(err => res.status(422).json(err));
//   },
//   findById: function(req, res) {
//     db.case
//       .findById(req.params.id)
//       .then(dbcase => res.json(dbcase))
//       .catch(err => res.status(422).json(err));
//   },
//   create: function(req, res) {
//     db.case
//       .create(req.body)
//       .then(dbcase => res.json(dbcase))
//       .catch(err => res.status(422).json(err));
//   },
//   update: function(req, res) {
//     db.case
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbcase => res.json(dbcase))
//       .catch(err => res.status(422).json(err));
//   },
//   remove: function(req, res) {
//     db.case
//       .findById({ _id: req.params.id })
//       .then(dbcase => dbcase.remove())
//       .then(dbcase => res.json(dbcase))
//       .catch(err => res.status(422).json(err));
//   }
// };
