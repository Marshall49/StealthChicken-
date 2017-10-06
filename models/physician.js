module.exports = {
  physician: require("./physician"),
  case: require("./case")
};
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const physicianSchema = new Schema({
  category: { type: String, required: false },
  username: { type: String, required: true },
  email: { type: String, required: true },
    date:{ type: Date,default: Date.now },
});
const caseSchema = new Schema({
  description: { type: String, required: false },
  dateCreated: { type: Date,default: Date.now },
  physicianId: { type: String, required: true, ref: '' },
    dexcom: { type: [{
    }]}
    patientHistory: { type: [{
    }]}
  detailedDescription: { type: String },
    comments: { type: [{
      content: { type: String },
    }]}
});


const physician = mongoose.model("physician", physicianSchema);
const case = mongoose.model("case", caseSchema);

module.exports = physician;
module.exports = case;
