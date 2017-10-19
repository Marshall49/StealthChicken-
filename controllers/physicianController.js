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

