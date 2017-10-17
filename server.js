const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const routes = require("./routes");
const https = require("https");
//Mongoose Models
const physician = require("./models/physician.js");
const dCase = require("./models/dCase.js");
const dexcom = require("./models/dexcom.js");
// Oauth2 library
const ClientOAuth2 = require("client-oauth2");

const app = express();
const PORT = process.env.PORT || 3001;
const CLIENT_SECRET = process.env.DEXCOM_CLIENT_SECRET || "";
const CLIENT_ID = process.env.DEXCOM_CLIENT_ID || "";
const REDIRECT_URL = process.env.REDIRECT_URL || "";

const pAuth = new ClientOAuth2({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET, //use environmental variable
  accessTokenUri: "https://sandbox-api.dexcom.com/v1/oauth2/token", // https://api.dexcom.com/v1/oauth2/token is used for non sandox
  authorizationUri: "https://sandbox-api.dexcom.com/v1/oauth2/login",
  redirectUri: REDIRECT_URL + "/auth/dexcom/callback", //Need to make a redirectUri
  scopes: ["offline_access"]
});

const MONGODB_URI =
  process.env.PROD_MONGODB || "mongodb://localhost/Stealth_Chicken";

// router = express.Router();
app.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

app.get("/test", function(req, res) {
  res.json({ status: true });
});

app.get("/auth/dexcom", function(req, res) {
  console.log("IM OVER HERE!!!");
  var uri = pAuth.code.getUri();

  console.log("go away! go here: " + uri);
  res.redirect(302, uri);
});

app.get("/auth/dexcom/callback", function(req, res) {
  pAuth.code.getToken(req.originalUrl).then(function(user) {
    console.log(user); //=> { accessToken: '...', tokenType: 'bearer', ... }

    // Refresh the current users access token.
    user.refresh().then(function(updatedUser) {
      console.log(updatedUser !== user); //=> true
      console.log(updatedUser.accessToken);
    });

    // Sign API requests on behalf of the current user.
    // user.sign({
    //   method: 'get',
    //   url: 'https://sandbox-api.dexcom.com/v1/users/self/egvs?startDate=2017-06-16T15:30:00&endDate=2017-06-17T15:45:00'
    // })
    // return res.send(user.accessToken)

    // API request
    var options = {
      method: "GET",
      hostname: "sandbox-api.dexcom.com",
      port: null,
      path:
        "/v1/users/self/egvs?startDate=2017-06-16T15:30:00&endDate=2017-06-17T15:45:00", //testing with just one month data to show concept.  Future: ability to select dates, then later make API calls using user token
      headers: {
        authorization: "Bearer " + user.accessToken
      }
    };

    console.log(options.headers.authorization);
    // make API call with http request
    var dreq = https.request(options, function(res) {
      // if (err) throw err;
      // create an empty object to store the result
      var potato = [];
      // on receipt of the data, push it into "result"
      res.on("data", function(chunk) {
        potato.push(chunk);
      });
      console.log(potato);

      res.on("end", function() {
        var body = Buffer.concat(potato);
        console.log(body.toString());
      });

    });

    dreq.end();
  });
});


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/public"));
// Add routes, both API and view
// app.use(routes);
// Set up promises with mongoose
mongoose.Promise = global.Promise;
//Set up default mongoose connection
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
//Once the mongodb is rendered it will console.log successful
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
