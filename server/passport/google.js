const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

const users = require('../queries/users');

passport.serializeUser((user,done) => {
  done(null,user);
})

passport.deserializeUser((id,done) => {
    done(null,user);
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
  }, async (accessToken, refreshToken, profile, cb) => {
    
    const email = profile.emails[0].value;
    console.log({email});

    const googleUser ={
      display_name: profile.displayName,
      email,
      google_id: profile.id,
      image_url: profile.photos[0].value,
      role_id: 1,
    }

      let user = await users.findByEmail(email);
  
      if (user) {
        googleUser.role_id = user.role_id;
        user = await users.update(user.id, googleUser);
      } else {
        user = await users.insert(googleUser);
      }



    return cb(null, user);
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
  }
));