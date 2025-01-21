const query = require('../prisma/userQuery');
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv").config();

// Validate user
const validate = [
    body("username").custom(async value => {
        const user = await query.getUserByUsername(value);

        if (user) {
            throw new Error('Username already in use');
        }
    }),
    body('confirmPassword').custom((value, { req }) => {
        return value === req.body.password 
    }).withMessage('Password must match!'),
];

// Create user
const createUser = [validate, async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).send(errors.array());
    }

    // Bcrypt password
    bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
        await query.createUser(req.body.username, hashedPassword);
    });

    return res.status(201).send("POST: Created User!");
}
];

// Get all users
const getUsers = (req, res) => {
    jwt.verify(req.token, process.env.SECRET, async (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            const users = await query.getUsers();
            return res.json(users);
        }
    });
}

// Get user by username
const getUserByUsername = (req, res) => {
    jwt.verify(req.token, process.env.SECRET, async (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            const user = await query.getUserByUsername(req.params.username);
            return res.json(user);
        }
    });
}

// Update user
const updateUser = (req, res) => {
    jwt.verify(req.token, process.env.SECRET, async (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            // Bcrypt password
            bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
                await query.updateUser(Number(req.params.userId), req.body.username, hashedPassword);
            });

            return res.send('PUT: Updated User!');
        }
    });    
}

// Delete user
const deleteUser = (req, res) => {
    jwt.verify(req.token, process.env.SECRET, async (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            await query.deleteUser(Number(req.params.userId));
            return res.send('DELETE: Deleted User!');
        }
    });  
}

module.exports = {
    createUser,
    getUsers,
    getUserByUsername,
    updateUser,
    deleteUser,
};