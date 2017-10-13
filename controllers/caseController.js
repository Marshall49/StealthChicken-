const db = require("../models/case.js");

// Defining methods for the physiciansController
module.exports = {
  findAll: function(req, res) {
    db.case
      .find(req.query)
      .sort({ date: -1 })
      .then(dbcase => res.json(dbcase))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.case
      .findById(req.params.id)
      .then(dbcase => res.json(dbcase))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.case
      .create(req.body)
      .then(dbcase => res.json(dbcase))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.case
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbcase => res.json(dbcase))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.case
      .findById({ _id: req.params.id })
      .then(dbcase => dbcase.remove())
      .then(dbcase => res.json(dbcase))
      .catch(err => res.status(422).json(err));
  }
};
