const router = require("express").Router();
// const physicianRoutes = require("./physician");


// =============Patient Authentication=================================
// const CLIENT_SECRET = process.env.DEXCOM_CLIENT_SECRET || "";
// const REDIRECT_URL = process.env.REDIRECT_URL || ''
// const CLIENT_ID = process.env.DEXCOM_CLIENT_ID || ''
const ClientOAuth2 = require('client-oauth2');
const dexcom = require("../../models/dexcom.js");
const https = require('https');

const pAuth = new ClientOAuth2({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET, //use environmental variable
  accessTokenUri: 'https://sandbox-api.dexcom.com/v1/oauth2/token', // https://api.dexcom.com/v1/oauth2/token is used for non sandox
  authorizationUri: 'https://sandbox-api.dexcom.com/v1/oauth2/login',
  redirectUri: REDIRECT_URL + '/auth/dexcom/callback', //Need to make a redirectUri
  scopes: ['offline_access']
});

// Redirect to Dexcom Auth --> Use hard code link instead
router.get('/auth/dexcom', function (req, res) {
console.log("IM OVER HERE!!!");
  var uri = pAuth.code.getUri();

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
      })

      // Sign API requests on behalf of the current user.
      // user.sign({
      //   method: 'get',
      //   url: 'https://sandbox-api.dexcom.com/v1/users/self/egvs?startDate=2017-06-16T15:30:00&endDate=2017-06-17T15:45:00'
      // })
      // return res.send(user.accessToken)

      // API request
        var options = {
          "method": "GET",
          "hostname": "sandbox-api.dexcom.com",
          "port": null,
          "path": "/v1/users/self/egvs?startDate=2017-06-16T15:30:00&endDate=2017-06-17T15:45:00", //testing with just one month data to show concept.  Future: ability to select dates, then later make API calls using user token
          "headers": {
            "authorization": "Bearer " + user.accessToken,
            }
        };

        console.log(options.headers.authorization);
        // make API call with http request
        https.request(options, function (res) {
          if (err) throw (err);
          // create an empty object to store the result
          var potato = [];
          // on receipt of the data, push it into "result"
          res.on("data", function (chunk) {
            potato.push(chunk);
          });
          console.log(potato);

          res.on("end", function () {
            var body = Buffer.concat(potato);
            console.log(body.toString());
          });
          // fit the result data into the dexcom schema
          // let newPat = new dexcom(result);
          // // Save the data to the db
          // newPat.save(function(err, doc) {
          //   if (err) {
          //     console.log(err);
          //   }
          //   else {
          //     console.log(doc);
          //   }
          // });
      // // We should store the token into a database.
      //   return res.send(user.accessToken)
    });
  });
});

//
//       // var req = http.request(options, function (res) {
//       //   var chunks = [];
//       //
//       //   res.on("data", function (chunk) {
//       //     chunks.push(chunk);
//       //   });
//       //
//       //   res.on("end", function () {
//       //     var body = Buffer.concat(chunks);
//       //     console.log(body.toString());
//       //   });
//       // });
//

//
//         res.on("end", function () {
//           var body = Buffer.concat(chunks);
//           console.log(body.toString());
//         });
//       });
//
//       req.end();
//
//       // Should we store the token into a database?  Future feature allowing API calls from the app using stored tokens?
//       // return res.send(user.accessToken)
//     })
// })


// Physician routes
// router.use("/physician", physicianRoutes);
// router.use("/oauth2", oauth2Routes);
module.exports = router;
