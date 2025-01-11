const { PrismaClient, Prisma } = require('@prisma/client');
const inventoryJson = require('./template/inventoryJson');

const prisma = new PrismaClient();

// Create user with account
async function createUser(username, password) {

    const user = await prisma.user.create({
        data: {
            username: username,
            password: password,
        },
    });

    await prisma.account.create({
        data: {
            userId: user.id,
            name: username,
            units: JSON.stringify([]),
            wengines: JSON.stringify([]),
            inventory: JSON.stringify(inventoryJson),
        },
    });
}

// Get all users
async function getUsers() {
    const users = await prisma.user.findMany();

    return users;
}

// Get user by username
async function getUserByUsername(username) {
    const user = await prisma.user.findUnique({
        where: {
            username: username,
        },
    });

    return user;
}

// Update user
async function updateUser(id, username, password) {
    await prisma.user.update({
        where: {
            id: id,
        },
        data: {
            username: username,
            password: password,
        },
    });
}

// Delete user
async function deleteUser(id) {
    // Delete account
    await prisma.account.delete({
        where: {
            userId: id,
        },
    });

    await prisma.user.delete({
        where: {
            id: id,
        },
    });
}

module.exports = {
    createUser,
    getUsers,
    getUserByUsername,
    updateUser,
    deleteUser,
};