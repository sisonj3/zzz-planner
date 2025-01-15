const characterController = require('../controllers/characterController');
const loginController = require('../controllers/loginController');

const { Router } = require('express');

const characterRouter = Router();

// Get all character names
characterRouter.get("/", [loginController.verifyToken, characterController.getCharacterNames]);

// Get character by name
characterRouter.get("/:name", [loginController.verifyToken, characterController.getCharacterByName]);

module.exports = characterRouter;