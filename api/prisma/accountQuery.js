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
async function updateAccount(userId, units, wengines, inventory) {
    await prisma.account.update({
        where: {
            userId: userId,
        },
        data: {
            units: JSON.stringify(units),
            wengine: JSON.stringify(wengines),
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
            wengine: JSON.stringify(wengines),
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
    updateAccountInventory,
}