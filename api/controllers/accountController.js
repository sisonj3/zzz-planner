const query = require('../prisma/accountQuery');

// Get Account with User Id
const getAccountByUserId = async (req, res) => {
    const account = await query.getAccountByUserId(Number(req.params.userId));

    return res.json(account);
}

// Update Account
const updateAccount = async (req, res) => {
    await query.updateAccount(Number(req.params.userId), req.body.units, req.body.wengines, req.body.inventory);

    return res.send("PUT: Account Updated!");
}

// Update Account units
const updateAccountUnits = async (req, res) => {
    await query.updateAccountUnits(Number(req.params.userId), req.body.units);

    return res.send("PUT: Account Units Updated!");
}

// Update Account wengines
const updateAccountWengines = async (req, res) => {
    await query.updateAccountWengines(Number(req.params.userId), req.body.wengines);

    return res.send("PUT: Account Wengines Updated!");
}

// Update account inventory
const updateAccountInventory = async (req, res) => {
    await query.updateAccountInventory(Number(req.params.userId), req.body.inventory);

    return res.send("PUT: Account Inventory Updated!");
}

module.exports = {
    getAccountByUserId,
    updateAccount,
    updateAccountUnits,
    updateAccountWengines,
    updateAccountInventory,
}