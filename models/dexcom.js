module.exports = {
  dexcom: require("./dexcom")
};

const mongoose = require('mongoose');
const Schema = moongoose.Schema;

const dexcomSchema = new Schema({
  unit : { type: String },
  rateUnite: { type: String },
  egv: { type: [
    systemTime: { type: DateTime, required: true }, // find way to limit what is pulled in API request to reduce types for mongoose
    displayTime: { type: DateTime, required: true },  //DateTime is not a supported type. How to solve?
    value: { type: Number, required: true },  //Will Decimals work with Mongoose?
    status: { type: String, required: true },
    trend: { type: String, required: true },
    trendRate: { type: Number, required: true }
  ]}
})


const dexcom = mongoose.model("dexcom", dexcomSchema);

module.exports = dexcom;
