
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dexcomSchema = new Schema({
  unit : { type: String },
  rateUnit: { type: String },
  egvs: [{
    systemTime: { type: String },
    displayTime: { type: String },
    value: { type: Number },
    status: { type: String },
    trend: { type: String },
    trendRate: { type: Number}
  }]
});

const Dexcom = mongoose.model("dexcom", dexcomSchema);

module.exports = Dexcom;
