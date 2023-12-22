const { Router } = require("express")
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const UsersController = require("../controllers/UsersController");
const ensureAuthentication = require("../middlewares/ensureAuthentication");

const usersRoutes = Router()
const upload = multer(uploadConfig.MULTER)

const usersController = new UsersController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthentication, usersController.update);
usersRoutes.delete("/", ensureAuthentication, usersController.delete);
usersRoutes.patch("/avatar", ensureAuthentication,)

module.exports = usersRoutes;