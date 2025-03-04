const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Get Account with User Id
async function getAccountByUserId(userId) {
    const account = await prisma.account.findUnique({
        where: {
            userId: userId,
        },
    });

    return account;
}

// Update Account
async function updateAccount(userId, units, wengines, loadouts, inventory) {
    await prisma.account.update({
        where: {
            userId: userId,
        },
        data: {
            units: JSON.stringify(units),
            wengines: JSON.stringify(wengines),
            loadouts: JSON.stringify(loadouts),
            inventory: JSON.stringify(inventory),
        },
    });
}

// Update Account units
async function updateAccountUnits(userId, units) {
    await prisma.account.update({
        where: {
            userId: userId,
        },
        data: {
            units: JSON.stringify(units),
        },
    });
}

// Update Account wengines
async function updateAccountWengines(userId, wengines) {
    await prisma.account.update({
        where: {
            userId: userId,
        },
        data: {
            wengines: JSON.stringify(wengines),
        },
    });
}

// Update account loadouts
async function updateAccountLoadouts(userId, loadouts) {
    await prisma.account.update({
        where: {
            userId: userId,
        },
        data: {
            loadouts: JSON.stringify(loadouts),
        },
    });
}

// Update account inventory
async function updateAccountInventory(userId, inventory) {
    await prisma.account.update({
        where: {
            userId: userId,
        },
        data: {
            inventory: JSON.stringify(inventory),
        },
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