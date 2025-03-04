const query = require('../prisma/accountQuery');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv").config();

// Get Account with User Id
const getAccountByUserId = async (req, res) => {
    jwt.verify(req.token, process.env.SECRET, async (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            const account = await query.getAccountByUserId(Number(req.params.userId));
            return res.json(account);
        }
    });
}

// Update Account
const updateAccount = async (req, res) => {
    jwt.verify(req.token, process.env.SECRET, async (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            await query.updateAccount(Number(req.params.userId), req.body.units, req.body.wengines, req.body.loadouts, req.body.inventory);
            return res.send("PUT: Account Updated!");
        }
    });  
}

// Update Account units
const updateAccountUnits = async (req, res) => {
    jwt.verify(req.token, process.env.SECRET, async (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            await query.updateAccountUnits(Number(req.params.userId), req.body.units);
            return res.send("PUT: Account Units Updated!");
        }
    });   
}

// Update Account wengines
const updateAccountWengines = async (req, res) => {
    jwt.verify(req.token, process.env.SECRET, async (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            await query.updateAccountWengines(Number(req.params.userId), req.body.wengines);
            return res.send("PUT: Account Wengines Updated!");
        }
    });    
}

// Update Account loadouts
const updateAccountLoadouts = async (req, res) => {
    jwt.verify(req.token, process.env.SECRET, async (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            await query.updateAccountLoadouts(Number(req.params.userId), req.body.loadouts);
            return res.send("PUT: Account Loadouts Updated!");
        }
    });    
}

// Update account inventory
const updateAccountInventory = async (req, res) => {
    jwt.verify(req.token, process.env.SECRET, async (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            await query.updateAccountInventory(Number(req.params.userId), req.body.inventory);
            return res.send("PUT: Account Inventory Updated!");
        }
    });
}

module.exports = {
    getAccountByUserId,
    updateAccount,
    updateAccountUnits,
    updateAccountWengines,
    updateAccountLoadouts,
    updateAccountInventory,
}