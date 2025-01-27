const express = require('express');
const session = require('express-session');
const passport = require('passport');
const dotenv = require('dotenv').config();

const app = express();

// Router constants
const characterRouter = require('./routes/characterRouter');
const wengineRouter = require('./routes/wengineRouter');
const userRouter = require('./routes/userRouter');
const accountRouter = require('./routes/accountRouter');
const loginRouter = require('./routes/loginRouter');
const imageRouter = require('./routes/imageRouter');

// Header settings
app.use(function (req, res, next) {
    
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'content-type, authorization');

    next();
});

// Set up passport session
app.use(session({ secret: process.env.SECRET, resave: false, saveUninitialized: false }));
app.use(passport.session());

// Used for req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
app.use("/character", characterRouter);
app.use("/wengine", wengineRouter);
app.use("/user", userRouter);
app.use("/account", accountRouter);
app.use("/login", loginRouter);
app.use("/images", imageRouter);

app.listen(3000, () => console.log("App listening on port 3000!"));