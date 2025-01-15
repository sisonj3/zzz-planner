const wengineController = require("../controllers/wengineController");
const loginController = require('../controllers/loginController');

const { Router } = require('express');

const wengineRouter = Router();

// Get Wengine Names
wengineRouter.get("/", [loginController.verifyToken, wengineController.getWengineNames]);

// Get Wengine By Name
wengineRouter.get("/:name", [loginController.verifyToken, wengineController.getWengineByName]);

module.exports = wengineRouter;