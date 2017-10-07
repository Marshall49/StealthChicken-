const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const http = require('https');
//Mongoose Models
const physician = require("./models/physician.js");
const case = require("./models/case.js");
const dexcom = require("./models/dexcom.js");
// Oauth2 library
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


//==================Authentication==============================================
const pAuth = new ClientOAuth2({
  clientId: 'KGkhhNwb8IkWa9WYH9ibHfLTONzAAdGr',
  clientSecret: '123', //use environmental variable
  accessTokenUri: 'https://sandbox-api.dexcom.com', // https://api.dexcom.com/v1/oauth2/token is used for non sandox
  authorizationUri: 'https://sandbox-api.dexcom.com',
  redirectUri: 'http://example.com/auth/github/callback', //Need to make a redirectUri
  scopes: ['offline_access']
});

// Get the authorization code, token, and
app.get('/auth/dexcom', function (req, res) {
  var uri = pAuth.code.getUri()

  res.redirect(uri)
})

app.get('/auth/dexcom/callback', function (req, res) {
  pAuth.code.getToken(req.originalUrl)
    .then(function (user) {
      console.log(user) //=> { accessToken: '...', tokenType: 'bearer', ... }

      // Refresh the current users access token.
      user.refresh().then(function (updatedUser) {
        console.log(updatedUser !== user) //=> true
        console.log(updatedUser.accessToken)
      })

      // Sign API requests on behalf of the current user.
      user.sign({
        method: 'get',
        url: 'http://example.com'
      })

      // We should store the token into a database.
      return res.send(user.accessToken)
    })
})

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
