const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const seedCharacters = require('./characterSeed');
const seedWengines = require('./wengineSeed');

async function main() {
    console.log("Seeding...");

    // Delete all accounts
    await prisma.account.deleteMany({});

    // Delete all users
    await prisma.user.deleteMany({});
    
    // Seed all characters
    seedCharacters();
    
    // Seed all wengines
    seedWengines();

    console.log("Done!");
}

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
})