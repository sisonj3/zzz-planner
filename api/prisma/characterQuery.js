import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

// Get all character names
async function getCharacterNames() {
    const characters = await prisma.character.findMany({
        select: {
            name: true,
        }
    });

    return characters;
}

// Get character by name
async function getCharacterByName(name) {
    const character = await prisma.character.findUnique({
        where: {
            name: name,
        },
    });

    return character;
}

module.exports = {
    getCharacterNames,
    getCharacterByName,
}