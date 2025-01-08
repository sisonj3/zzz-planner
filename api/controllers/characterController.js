const query = require("../prisma/characterQuery");

// Get all character names
const getCharacterNames = async (req, res) => {
    const characters = await query.getCharacterNames();

    return res.json(characters);
}

// Get character by name
const getCharacterByName = async (req, res) => {
    const character = await query.getCharacterByName(req.params.name);

    return res.json(character);
}

module.exports = {
    getCharacterNames,
    getCharacterByName,
}