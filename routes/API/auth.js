const express = require('express');
const passport = require('passport');
const router = require('express').Router();
const authController = require('../../controllers/authenticationController');

router.route('/register')
    .post(authController.register);

router.route('/authenticate')
    .post(authController.authenticate);

router.route('/:token')
    .get(authController.loginRequired);

router.route('/logout')
    .get(authController.logout);

router.route('/dashboard')
    .get(passport.authenticate('jwt', { session: false }), function(req, res) {
        res.send('Success! User ID: ' + req.user + '.');
    });

module.exports = router;

