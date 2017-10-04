module.exports = {
  physician: require("./physician")
};

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const physicianSchema = new Schema({
  category: { type: String, required: true },
  physician: { type: String, required: true },
  comment:{type:[{
    date:{type: Date,default: Date.now},
    userId: {type: String},
    content: {type: String}
  }]}
});

const physician = mongoose.model("physician", physicianSchema);

module.exports = physician;
