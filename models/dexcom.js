module.exports = {
  dexcom: require("./dexcom")
};

const mongoose = require('mongoose');
const Schema = moongoose.Schema;

const dexcomSchema = new Schema({
  egv: {type: [
    displayTime: { type: DateTime, required: true },  //DateTime is not a supported type. How to solve?
    value: { type: Number, required: true },  //Will Decimals work with Mongoose?
    status: { type: String, required: true },
    trend: { type: String, required: true },
    trendRate: { type: Number, required: true }
  ]}
})
