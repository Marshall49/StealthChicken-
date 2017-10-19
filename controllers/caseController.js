const dbCase = require("../models/dCase");

// Defining methods for the physiciansController
module.exports = {
  findAll: function(req, res) {
    dbCase
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    dbCase
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    dbCase
    .create(req.body, function(err) {
      if (err) {
        return res.status(200).json({ success: true, message: 'Successfully Created Case.'});
      }
        return res.status(422).json({ success: false, message: 'Error Creating Case'});
      });
    },
  update: function(req, res) {
    dbCase
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    dbCase
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
