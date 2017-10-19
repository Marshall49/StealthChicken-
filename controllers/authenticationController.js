const User = require('../models/user.js');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {

    register: function(req, res) {
        const newUser = new User(req.body);
        newUser.password = brcypt.hashSync(req.body.password, 10);
        newUser.save(function(err, user) {
            if (err) {
            return res.status(400).json({
                success: false,
                message: 'Email already exists.'
            });
            } else {
            User.password = undefined;
            return res.status(200).json({
                success: true,
                message: 'New user created.' })
            }
        });
    },

    sign_in: function(req, res) {
        User.findOne({
            email: req.body.email
        }, function(err, user) {
            if (err) throw err;
            if (!user) {
                return res.status(404).send({ message: 'Authentication failed. User Not Found.' });
            } else if (user) {
                if (!user.comparePassword(req.body.password)) {
                res.status(401).send({ message: 'Authentication failed. Wrong Password.' });
                } else {
                    return res.status(200).json({token: jwt.sign({ email: User.email, username: User.username, specialty: User.specialty, _id: User._id}, 'WORKING')});
                }
            }
        });
    },

    loginRequired: function(req, res, next) {
        console.log("Verifying");
        var token = req.params.token || req.body.token || req.headers['x-access-token'];
        if (token) {
            jwt.verify(token.replace("JWT", ""), config.secret, function(eff, decoded) {
            if(err) {
                console.log('There is an error ' + err)
            } else {
                console.log(decoded.data._id);
                res.status(200).send({ success: false, _id: decoded.data._id, message: 'No token provided.' });
            }
            })
        } else {
            return res.status(403).send({ success: false, _id: null, message: 'No token provided.' });
        }
    },

    logout: function(req, res) {
        return res.status(200).send({ success: false, token: null, email: null });
    }
}
