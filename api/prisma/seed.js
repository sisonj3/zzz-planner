import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const seedCharacters = require('./characterSeed');

async function main() {
    console.log("Seeding...");

    // Seed all characters
    seedCharacters();
    
    // Seed all wengines

    console.log("Done!");
}

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
})