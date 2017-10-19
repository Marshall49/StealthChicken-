const dbComment = require("../models/comment");

// Defining methods for the CommentController
module.exports = {
  findAll: function(req, res) {
    dbComment
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    dbComment
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    dbComment
    .create(req.body, function(err) {
      if (err) {
        return res.status(200).json({ success: true, message: 'Successfully Created Comment.'});
      }
        return res.status(422).json({ success: false, message: 'Error Creating Comment'});
      });
    };
  update: function(req, res) {
    dbComment
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    dbComment
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
