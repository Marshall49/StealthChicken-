const path = require("path");
const router = require("express").Router();
// const apiRoutes = require("./API");
const ClientOAuth2 = require('client-oauth2');

const CLIENT_SECRET = process.env.DEXCOM_CLIENT_SECRET || "";
const CLIENT_ID = process.env.DEXCOM_CLIENT_ID || "";
const REDIRECT_URL = process.env.REDIRECT_URL || "";

const pAuth = new ClientOAuth2({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET, //use environmental variable
  accessTokenUri: 'https://sandbox-api.dexcom.com/v1/oauth2/token', // https://api.dexcom.com/v1/oauth2/token is used for non sandox
  authorizationUri: 'https://sandbox-api.dexcom.com/v1/oauth2/login',
  redirectUri: REDIRECT_URL + 'API/auth/dexcom/callback', //Need to make a redirectUri
  scopes: ['offline_access']
});

// API Routes
// router.use("/API", apiRoutes);

router.get('/test', function(req, res) {
  res.json({ "status": true });
});

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });


module.exports = router;
