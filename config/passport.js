  const JwtStrategy = require('passport-jwt').Strategy,
  const  ExtractJwt = require('passport-jwt').ExtractJwt;

  // load up the user model
  const config = require('./config');
  const user = require('../models/user');
   // get db config file

   module.exports = function(passport) {
     let opts = {};
     opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
     opts.secretOrKey = config.secret;

  //Setting up the Session
   passport.serializeUser(function(user, done) {
    done(null, user);
  });

   passport.deserializeUser(function(obj, done) {
      done(null, obj);
    });

    //Passport Strategy
   passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    user.findOne({id: jwt_payload.id}, function(err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
      });
    }));
  };
