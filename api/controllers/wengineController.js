const query = require("../prisma/wengineQuery");

// Get Wengine Names
const getWengineNames = async (req, res) => {
    const wengines = await query.getWengineNames();

    return res.json(wengines);
}

// Get Wengine By Name
const getWengineByName = async (req, res) => {
    const wengine = await query.getWengineByName(req.params.name);

    return res.json(wengine);
}

module.exports = {
    getWengineNames,
    getWengineByName,
}