const userController = require('../controllers/userController');

const { Router } = require('express');

const userRouter = Router();

// Create user
userRouter.post("/", userController.createUser);

// Get all users
userRouter.get("/", userController.getUsers);

// Get user by username
userRouter.get("/:username", userController.getUserByUsername);

// Update user
userRouter.put("/:userId", userController.updateUser);

// Delete user
userRouter.delete("/:userId", userController.deleteUser);

module.exports = userRouter;