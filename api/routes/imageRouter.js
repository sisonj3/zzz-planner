const imageController = require('../controllers/imageController');
const loginController = require('../controllers/loginController');

const { Router } = require('express');

const imageRouter = Router();

// Get inventory images
imageRouter.get('/inventory', [loginController.verifyToken, imageController.getInventoryImages]);

// Get character images
imageRouter.get('/agents', [loginController.verifyToken, imageController.getCharacterImages]);

// Get Wengine images
imageRouter.get('/wengines', [loginController.verifyToken, imageController.getWengineImages]);

module.exports = imageRouter;