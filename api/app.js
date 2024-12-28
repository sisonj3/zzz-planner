const express = require('express');
const session = require('express-session');
const passport = require('passport');
const dotenv = require('dotenv').config();

const app = express();

// Router constants

// Header settings

// Set up passport session
app.use(session({ secret: "san_Z", resave: false, saveUninitialized: false }));
app.use(passport.session());

// Used for req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers

app.listen(3000, () => console.log("App listening on port 3000!"));