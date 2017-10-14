const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const http = require('https');
//Mongoose Models
const physician = require("./models/physician.js");
const dCase = require("./models/dCase.js");
const dexcom = require("./models/dexcom.js");
// Oauth2 library
const ClientOAuth2 = require('client-oauth2');

const app = express();
const PORT = process.env.PORT || 3001;
//Here are the Heroku deploy "Mlab" Mongo URI for the Dexcom Client Secret and the mongo lab
const CLIENT_SECRET = process.env.DEXCOM_CLIENT_SECRET || "";
const MONGODB_URI = process.env.PROD_MONGODB || 'mongodb://localhost/Stealth_Chicken'
const REDIRECT_URL = process.env.REDIRECT_URL || ''
const CLIENT_ID = process.env.DEXCOM_CLIENT_ID || ''

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;

//Set up default mongoose connection
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Once the mongodb is rendered it will console.log successful
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

var exampleUser = new physician({
  category: "Optometry",
  physician: "Jason Conner",
  comment: {
    date: new Date(Date.now()),
    userId: "String",
    content: "Patient is having Eye trouble"
  }
});
// Using the save method in mongoose, we create our example user in the db
exampleUser.save(function(error, doc) {
  // Log any errors
  if (error) {
    console.log(error);
  }
  // Or log the doc
  else {
    console.log(doc);
  }
});


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
