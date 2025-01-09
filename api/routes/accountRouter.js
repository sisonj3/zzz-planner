const accountController = require('../controllers/accountController');

const { Router } = require('express');

const accountRouter = Router();

// Get Account with User Id
accountRouter.get("/:userId", accountController.getAccountByUserId);

// Update Account
accountRouter.put("/:userId", accountController.updateAccount);

// Update Account units
accountRouter.put("/units/:userId", accountController.updateAccountUnits);

// Update Account wengines
accountRouter.put("/wengines/:userId", accountController.updateAccountWengines);

// Update account inventory
accountRouter.put("/inventory/:userId", accountController.updateAccountInventory);

module.exports = accountRouter;