const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");
const Patient = require("../models/Patient");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8080/auth/google/callback",
      accessType: "offline",
      prompt: "consent",
    },
    async (accessToken, refreshToken, profile, done) => {
      // console.log(refreshToken);
      try {
        let user = await User.findOne({ googleId: profile.id });
        if (!user) {
          user = await User.create({
            username: profile.displayName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            email: profile.emails[0].value,
            profilePicture: profile.photos[0].value,
            role: "patient",
            googleAccessToken: accessToken, // Store the access token
            googleRefreshToken: refreshToken, // Store the refresh token if neede
            ...(profile.id && { googleId: profile.id }),
          });

          // Store the refresh token if it's present
          if (refreshToken) {
            user.googleRefreshToken = refreshToken; // Save refresh token if available
          }
          // Create role-specific document
          if (user.role === "patient") {
            const patient = new Patient({ user: user._id });
            await patient.save();
          }
        }

        // console.log(profile);

        // Update tokens if user exists
        user.googleAccessToken = accessToken;
        if (refreshToken) {
          user.googleRefreshToken = refreshToken; // Update refresh token if available
          // console.log(user);
          await user.save();
        }

        done(null, user);
      } catch (err) {
        console.error(err);
        done(err, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});
