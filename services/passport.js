const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(new GoogleStrategy(
    {
        clientID: keys.GOOGLE_CLIENT_ID, 
        clientSecret: keys.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
    }, 
        (accessToken, refreshToken, profile, done) => {    
        console.log('profile', profile); 
          
        new User({ googleID: profile.id }).save(); 
    })
);

