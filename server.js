// dependencies
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");

// Routes
const routes = require("./routes/API");

// Authorization & security dependencies
const http = require('https');
const morgan = require('morgan');
const cors = require('cors');
const jwt = require('jsonwebtoken');

//Mongoose Models
const User = require("./models/user.js");
const dCase = require("./models/dCase.js");
const Dexcom = require("./models/dexcom.js");
const Comment = require('./models/comment');

// Oauth2 library
const ClientOAuth2 = require('client-oauth2');


// PORT address
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

//Here are the Heroku deploy "Mlab" Mongo URI for the Dexcom Client Secret and the mongo lab
const CLIENT_SECRET = process.env.DEXCOM_CLIENT_SECRET || "";
// const mongoURL = process.env.MONGODB_URI || "mongodb://heroku_m4vrdwxk:alghmeaeeeudopt16qkh0kik2p@ds163294.mlab.com:63294/heroku_m4vrdwxk";
// mongoose.connect('mongodb://heroku_m4vrdwxk:alghmeaeeeudopt16qkh0kik2p@ds163294.mlab.com:63294/heroku_m4vrdwxk');

// Configure body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static("client/build"));

// Add routes
app.use(routes);

app.use(passport.initialize());
// Set mongoose to use promises
mongoose.Promise = Promise;
// Connect to MongoDB
mongoose.connect(
    mongoURL,
    {
        useMongoClient: true
    }
);

var testUser = {
    username: 'lame',
    password: 'hahahahah',
    email: 'strong.malcolm@y.com',
    specialty: 'cardiologist'
};
// save user to database
User.create(testUser)

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;
