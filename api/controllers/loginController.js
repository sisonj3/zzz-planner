const query = require("../prisma/userQuery");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

// Set up LocalStrategy
passport.use(new LocalStrategy({ passReqToCallback: true }, async (req, username, password, done) => {
    try {
        const user = await query.getUserByUsername(username);

        // Clear messages
        req.session.messages = undefined;

        // Check if user exists
        if (!user) {
            return done(null, false, { message: "Username does not exists!" });
        }

        // Use bcrypt.compare to validate password
        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return done(null, false, { message: "Incorrect password!" });
        }

        return done(null, user);

    } catch (error) {
        return done(error);
    }
}));

// Serialization and Deserialization
passport.serializeUser((user, done) => {
    done(null, user.username);
});

passport.deserializeUser(async (username, done) => {
    try {
        const user = await query.getUserByUsername(username);

        done(null, user);
    } catch (error) {
        done(error);
    }
});

// Authenticate
const loginUser = (req, res) => {
    passport.authenticate("local", {
        failureMessage: true,
    }, (err, user, options) => {
        console.log(options);
        res.status(401).send(options);
    })(req, res)
}

const getJWT = (req, res) => {
    jwt.sign({ user: req.user }, process.env.SECRET, { expiresIn: '12h' }, (err, token) => {
        res.json({
            token: token,
            id: req.user.id,
            username: req.user.username,
            account: req.user.account,
        });
    });
};

const verifyToken = (req, res, next) => {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];

    // Check if bearer is undefined
    if (bearerHeader) {

        const bearer = bearerHeader.split(' ');

        // Get token from array
        const bearerToken = bearer[1];

        // Set the token
        req.token = bearerToken;

        // Next middleware
        next();

    } else {
        // Forbidden
        res.sendStatus(403);
    }
}

module.exports = {
    loginUser,
    getJWT,
    verifyToken,

}