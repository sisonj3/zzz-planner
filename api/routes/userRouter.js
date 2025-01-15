const userController = require('../controllers/userController');
const loginController = require('../controllers/loginController');

const { Router } = require('express');

const userRouter = Router();

// Create user
userRouter.post("/", userController.createUser);

// Get all users
userRouter.get("/", [loginController.verifyToken, userController.getUsers]);

// Get user by username
userRouter.get("/:username", [loginController.verifyToken, userController.getUserByUsername]);

// Update user
userRouter.put("/:userId", [loginController.verifyToken, userController.updateUser]);

// Delete user
userRouter.delete("/:userId", [loginController.verifyToken, userController.deleteUser]);

module.exports = userRouter;