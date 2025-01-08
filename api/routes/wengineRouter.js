const wengineController = require("../controllers/wengineController");

const { Router } = require('express');

const wengineRouter = Router();

// Get Wengine Names
wengineRouter.get("/", wengineController.getWengineNames);

// Get Wengine By Name
wengineRouter.get("/:name", wengineController.getWengineByName);

module.exports = wengineRouter;