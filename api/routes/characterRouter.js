const characterController = require('../controllers/characterController');

const { Router } = require('express');

const characterRouter = Router();

// Get all character names
characterRouter.get("/", characterController.getCharacterNames);

// Get character by name
characterRouter.get("/:name", characterController.getCharacterByName);

module.exports = characterRouter;