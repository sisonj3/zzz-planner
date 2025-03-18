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

// const loginUser = passport.authenticate("local", {
//     failureMessage: true,
// });

// Authenticate
const loginUser = (req, res, next) => {
    passport.authenticate("local", {
        failWithError: true,
    }, 
        (err, user, options) => {
            
        if (user == false) {
            console.log("No user");
            return res.status(401).send(options);
        } else {
            console.log("User exists");
            req.user = user;
            next();
        }
    })(req, res, next)
}

const getJWT = (req, res) => {
    jwt.sign({ user: req.user }, process.env.SECRET, { expiresIn: '12h' }, (err, token) => {
        console.log("Getting JWT");
        console.log(req.user);
        
        res.status(200).json({
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