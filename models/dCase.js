const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CaseSchema = new Schema({
  title: { type: String, required: false },
  dateCreated: { type: Date, default: Date.now },
  physicianId: { type: String, required: true, ref: 'user' },
  dexcom: {}, // get data from dexcom.js?
  description: { type: String },
  comment: [{
    type:mongoose.Schema.Types.ObjectId, ref:'Comment'
  }],
  age: { type: Number, required: true },
  sex: {type: String, required: true },
  pastHx: { type: String },
  recentHx: { type: String },
  drugs: { type: String }
});

const dCase = mongoose.model("dCase", CaseSchema, "dCase");

module.exports = dCase;
