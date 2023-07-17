const { Router } = require("express")

const UsersController = require("../controllers/UsersController");

const UsersRoutes = Router()

const usersController = new UsersController();

UsersRoutes.post("/", usersController.create);
UsersRoutes.put("/:id", usersController.update);

module.exports = UsersRoutes;