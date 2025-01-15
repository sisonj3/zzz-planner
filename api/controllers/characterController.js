const query = require("../prisma/characterQuery");
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv").config();

// Get all character names
const getCharacterNames = async (req, res) => {
    jwt.verify(req.token, process.env.SECRET, async (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            const characters = await query.getCharacterNames();
            return res.json(characters);
        }
    });
}

// Get character by name
const getCharacterByName = async (req, res) => {
    jwt.verify(req.token, process.env.SECRET, async (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            const character = await query.getCharacterByName(req.params.name);
            return res.json(character);
        }
    });
}

module.exports = {
    getCharacterNames,
    getCharacterByName,
}