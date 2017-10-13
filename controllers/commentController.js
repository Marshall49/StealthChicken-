const db = require("../models/comment.js");

// Defining methods for the commentController
module.exports = {
  findAll: function(req, res) {
    db.comment
      .find(req.query)
      .sort({ date: -1 })
      .then(dbcomment => res.json(dbcomment))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.comment
      .findById(req.params.id)
      .then(dbcomment => res.json(dbcomment))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.comment
      .create(req.body)
      .then(dbcomment => res.json(dbcomment))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.comment
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbcomment => res.json(dbcomment))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.comment
      .findById({ _id: req.params.id })
      .then(dbcomment => dbcomment.remove())
      .then(dbcomment => res.json(dbcomment))
      .catch(err => res.status(422).json(err));
  }
};