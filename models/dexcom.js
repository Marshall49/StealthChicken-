module.exports = {
  Dexcom: require("./dexcom")
};

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dexcomSchema = new Schema({
  unit : { type: String },
  rateUnit: { type: String },
  egvs: { type : Array }
});


const Dexcom = mongoose.model("dexcom", dexcomSchema);

module.exports = Dexcom;


// type: [{
//   systemTime: { type: String, required: true }, // find way to limit what is pulled in API request to reduce types for mongoose
//   displayTime: { type: String, required: true },  //DateTime is not a supported type. How to solve?
//   value: { type: Number, required: true },  //Will Decimals work with Mongoose?
//   status: { type: String, required: true },
//   trend: { type: String, required: true },
//   trendRate: { type: Number, required: true }
// }]
