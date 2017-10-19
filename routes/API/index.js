const router = require("express").Router();
const userRoutes = require("./user");
const authRoute = require('./auth');

// auth route
router.use('/auth', authRoute);


// =============Patient Authentication=================================
const CLIENT_SECRET = process.env.DEXCOM_CLIENT_SECRET || "";
const REDIRECT_URL = process.env.REDIRECT_URL || ''
const CLIENT_ID = process.env.DEXCOM_CLIENT_ID || ''
const ClientOAuth2 = require('client-oauth2');
const Dexcom = require("../../models/dexcom.js");
const https = require('https');

const pAuth = new ClientOAuth2({
  clientId: 'EOoo2Rk7zVA7oAA7kpFn9vDGwHzZ39u7',
  clientSecret: 'jzmbcseSdEA9CKtA', //use environmental variable
  accessTokenUri: 'https://sandbox-api.dexcom.com/v1/oauth2/token', // https://api.dexcom.com/v1/oauth2/token is used for non sandox
  authorizationUri: 'https://sandbox-api.dexcom.com/v1/oauth2/login',
  redirectUri: 'https://vast-refuge-19207.herokuapp.com/auth/dexcom/callback',
  scopes: ['offline_access']
});

// Redirect to Dexcom Auth --> Use hard code link instead
router.get('/auth/dexcom', function (req, res) {
  var uri = pAuth.code.getUri();
  // Redirect to Dexcom Authorization site
  res.redirect(302, uri);
});

router.get('/auth/dexcom/callback', function (req, res) {
  pAuth.code.getToken(req.originalUrl)
    .then(function (user) {
      console.log(user) //=> { accessToken: '...', tokenType: 'bearer', ... }
      // Refresh the current users access token.
      user.refresh().then(function (updatedUser) {
        console.log(updatedUser !== user) //=> true
        console.log(updatedUser.accessToken)
      });

      // API request
        var options = {
          "method": "GET",
          "hostname": "sandbox-api.dexcom.com",
          "port": null,
          "path": "/v1/users/self/egvs?startDate=2017-06-16T15:30:00&endDate=2017-06-16T16:30:00", //testing with just one month data to show concept.  Future: ability to select dates, then later make API calls using user token
          "headers": {
            "authorization": "Bearer " + user.accessToken,
            }
        };

        console.log(options.headers.authorization);
        // make API call with http request
        var dreq = https.request(options, function (res) {

          // create an empty object to store the result
          var potato = [];
          // on receipt of the data, push it into "result"
          res.on("data", function (chunk) {
            potato.push(chunk);
          });

          res.on("end", function () {
            var body = Buffer.concat(potato);
            var stuff = body.toString();
            //^^From Dexcom example
            var more_stuff = JSON.parse(stuff);
            var entry = new Dexcom(more_stuff);
            entry.save(function(err, doc) {
              // Log any errors
              if (err) {
                console.log(err);
              }
              // Or log the doc
              else {
                console.log(doc);
              }
            });
          });
        });
      dreq.end();
    });
  });




// Physician routes
router.use("/user", userRoutes);
// router.use("/oauth2", oauth2Routes);
module.exports = router;
