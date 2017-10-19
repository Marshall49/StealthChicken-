const db = require("../models");

// Defining methods for the dexcomsController
module.exports = {
  findAll: function(req, res) {
    db.dexcom
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.dexcom
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.dexcom
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.dexcom
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.dexcom
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //Method to get dexcom egv values and put in an array
  getX: function(req, res) {
    db.dexcom
    .find({req.query},
          { _id: 0} )
    .select( 'egvs.value' )
    .exec(function(err, docs){
        docs = docs.map(function(doc) { return doc.egvs.value; });
        if(err){
            res.json(err)
        } else {
            res.json(docs)
        }
    })
    .catch(err => res.status(422).json(err));
  },
  //Method to get dexcom egv displayTImes and put in an array
  getY:function(req, res) {
    db.dexcom
    .find({req.query},
          { _id: 0} )
    .select( 'egvs.displayTime' )
    .exec(function(err, docs){
        docs = docs.map(function(doc) { return doc.egvs.displayTime; });
        if(err){
            res.json(err)
        } else {
            res.json(docs)
        }
    })
    .catch(err => res.status(422).json(err));
  }
};
