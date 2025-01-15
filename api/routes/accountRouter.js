const accountController = require('../controllers/accountController');
const loginController = require('../controllers/loginController');

const { Router } = require('express');

const accountRouter = Router();

// Get Account with User Id
accountRouter.get("/:userId", [loginController.verifyToken, accountController.getAccountByUserId]);

// Update Account
accountRouter.put("/:userId", [loginController.verifyToken, accountController.updateAccount]);

// Update Account units
accountRouter.put("/units/:userId", [loginController.verifyToken, accountController.updateAccountUnits]);

// Update Account wengines
accountRouter.put("/wengines/:userId", [loginController.verifyToken, accountController.updateAccountWengines]);

// Update account inventory
accountRouter.put("/inventory/:userId", [loginController.verifyToken, accountController.updateAccountInventory]);

module.exports = accountRouter;