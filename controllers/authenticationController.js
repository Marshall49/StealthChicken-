const Physician = require('../models/physician.js');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    
    register: function(req, res) {
        const newPhysician = new Physician(req.body);
        newPhysician.password = brcypt.hashSync(req.body.password, 10);
        newPhysician.save(function(err, physician) {
            if (err) {
            return res.status(400).json({
                success: false,
                message: 'Email already exists.'
            });
            } else {
            physician.password = undefined;
            return res.status(200).json({ 
                success: true, 
                message: 'New user created.' })
            }
        });
    },

    sign_in: function(req, res) {
        Physician.findOne({
            email: req.body.email
        }, function(err, physician) {
            if (err) throw err;
            if (!physician) {
                return res.status(404).send({ message: 'Authentication failed. User Not Found.' });
            } else if (physician) {
                if (!physician.comparePassword(req.body.password)) {
                res.status(401).send({ message: 'Authentication failed. Wrong Password.' });
                } else {
                    return res.status(200).json({token: jwt.sign({ email: physician.email, username: physician.username, specialty: physician.specialty, _id: physician._id}, 'WORKING')});
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