const JwtStrategy = require('passport-jwt').Strategy,
const  ExtractJwt = require('passport-jwt').ExtractJwt;

// load up the user model
var config = require('./config');
var user = require('../models/user');
 // get db config file
