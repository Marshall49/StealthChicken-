const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const physicianSchema = new Schema({
  category: { type: String, required: true },
  physician: { type: String, required: true },
  comment: String,
  date: { type: Date, default: Date.now }
});

const physician = mongoose.model("physician", physicianSchema);

module.exports = physician;
