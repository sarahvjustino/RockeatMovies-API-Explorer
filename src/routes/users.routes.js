const { Router, request } = require("express")

const UsersController = require("../controllers/UsersController");

const UsersRoutes = Router()

const usersController = new UsersController();

UsersRoutes.post("/", usersController.create)

module.exports = UsersRoutes;