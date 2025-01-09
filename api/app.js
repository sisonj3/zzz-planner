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

// Header settings

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

app.listen(3000, () => console.log("App listening on port 3000!"));