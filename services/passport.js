const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(new GoogleStrategy(
    {
        clientID: keys.GOOGLE_CLIENT_ID, 
        clientSecret: keys.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
        mongoURI: 'mongodb+srv://yepDB:LOVyowqZg17AdQVk@oauth.ckspy.mongodb.net/oAuthDB?retryWrites=true&w=majority',
        cookieKey: '',
    }, 
        (accessToken, refreshToken, profile, done) => {    
        console.log('profile', profile);        
    })
);

