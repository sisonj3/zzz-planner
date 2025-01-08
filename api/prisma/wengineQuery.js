const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Get Wengine Names
async function getWengineNames() {
    const wengines = await prisma.wengine.findMany({
        select: {
            name: true,
        },
    });

    return wengines;
}

// Get Wengine By Name
async function getWengineByName(name) {
    const wengine = await prisma.wengine.findUnique({
        where: {
            name: name,
        },
    });

    return wengine;
}

module.exports = {
    getWengineNames,
    getWengineByName,
};