const db = require("../models");

// Defining methods for the physiciansController
module.exports = {
  findAll: function(req, res) {
    db.physician
      .find(req.query)
      .sort({ date: -1 })
      .then(dbphysician => res.json(dbphysician))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.physician
      .findById(req.params.id)
      .then(dbphysician => res.json(dbphysician))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.physician
      .create(req.body)
      .then(dbphysician => res.json(dbphysician))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.physician
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbphysician => res.json(dbphysician))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.physician
      .findById({ _id: req.params.id })
      .then(dbphysician => dbphysician.remove())
      .then(dbphysician => res.json(dbphysician))
      .catch(err => res.status(422).json(err));
  }
};
