const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/userSchema');
exports.initializingPassport = (passport) => {
    passport.use(new LocalStrategy(async (username, password, done) => {
        try {
            const user = await User.findOne({ username });
            if (!user) return done(null, false);
            if (user.password !== password) return done(null, false);
            return done(null, user);
        }
        catch (err) {
            return done(err, false);
        }
    }));

    passport.serializeUser((user, done) => {
        done(null, user._id);
    })

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findById(id);
            done(null, user);
        } catch (error) {
            done(error, false);
        }
    })
}