const { Router } = require("express")

const UsersController = require("../controllers/UsersController");
const ensureAuthentication = require("../middlewares/ensureAuthentication");

const UsersRoutes = Router()

const usersController = new UsersController();

UsersRoutes.post("/", usersController.create);
UsersRoutes.put("/", ensureAuthentication, usersController.update);
UsersRoutes.delete("/", ensureAuthentication, usersController.delete);

module.exports = UsersRoutes;