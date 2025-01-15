const query = require("../prisma/wengineQuery");
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv").config();

// Get Wengine Names
const getWengineNames = async (req, res) => {
    jwt.verify(req.token, process.env.SECRET, async (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            const wengines = await query.getWengineNames();
            return res.json(wengines);
        }
    });
}

// Get Wengine By Name
const getWengineByName = async (req, res) => {
    jwt.verify(req.token, process.env.SECRET, async (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            const wengine = await query.getWengineByName(req.params.name);
            return res.json(wengine);
        }
    });
}

module.exports = {
    getWengineNames,
    getWengineByName,
}