const { Router } = require("express")

const TagsController = require("../controllers/MovieTagsController");
const ensureAuthentication = require("../middlewares/ensureAuthentication");

const TagsRoutes = Router()

const tagsController = new TagsController();

TagsRoutes.get("/", ensureAuthentication, tagsController.index);


module.exports = TagsRoutes;