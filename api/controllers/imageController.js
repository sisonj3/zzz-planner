const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

const images = require.context('../assets/Inventory')

// Get inventory images
const getInventoryImages = async (req, res) => {
    const images = require.context('../assets/Inventory');
    const imageList = images.keys().map(image => images(image));

    return res.json(imageList);
}

// Get character images
const getCharacterImages = async (req, res) => {
    const images = require.context('../assets/Agents');
    const imageList = images.keys().map(image => images(image));

    return res.json(imageList);
}

// Get Wengine images
const getWengineImages = async (req, res) => {
    const images = require.context('../assets/W-Engines');
    const imageList = images.keys().map(image => images(image));

    return res.json(imageList);
}

module.exports = {
    getInventoryImages,
    getCharacterImages,
    getWengineImages,
}