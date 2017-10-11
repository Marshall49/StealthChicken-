const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const physician =require("./models/physician.js");
const clientOAuth2 = require('client-oauth2');
const app = express();
const PORT = process.env.PORT || 3001;
//Here are the Heroku deploy "Mlab" Mongo URI for the Dexcom Client Secret and the mongo lab
const CLIENTSECRET = process.env.DEXCOM_CLIENT_SECRET || "";
const MONGODB_URI = process.env.PROD_MONGODB || 'mongodb://localhost/Stealth_Chicken'
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

var testUser = new physician({
    username: 'jmar777',
    password: 'hahahaha',
});
// save user to database
testUser.save(function(err) {
    if (err) throw err;
    // fetch user and test password verification
    physician.findOne({ username: 'jmar777' }, function(err, physician) {
        if (err) throw err;
        // test a matching password
        physician.comparePassword('Password123', function(err, isMatch) {
            if (err) throw err;
            console.log('Password123:', isMatch); // -> Password123: true
        });
        // test a failing password
        physician.comparePassword('123Password', function(err, isMatch) {
            if (err) throw err;
            console.log('123Password:', isMatch); // -> 123Password: false
        });
    });
});

//==================Authentication==============================================
// const userAuth = new ClientOAuth2({
//   clientId: 'KGkhhNwb8IkWa9WYH9ibHfLTONzAAdGr',
//   clientSecret: '123', //Need to see about best way to add client secret
//   accessTokenUri: 'https://sandbox-api.dexcom.com', // https://api.dexcom.com/v1/oauth2/token is used for non sandox
//   authorizationUri: 'https://sandbox-api.dexcom.com',
//   redirectUri: 'http://example.com/auth/github/callback', //Need to make a redirectUri
//   scopes: ['offline_access']
// });
// Get the author
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
