//Here we are exporting the physician schema
module.exports = {
  physician: require("./physician"),
};

//Requiring Mongoose and creating a new schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const physicianSchema = new Schema({
  category: { type: String, required: false },
  username: { type: String, required: true },
  email: { type: String, required: true },
    date:{ type: Date,default: Date.now },
});



const physician = mongoose.model("physician", physicianSchema);


module.exports = physician;
