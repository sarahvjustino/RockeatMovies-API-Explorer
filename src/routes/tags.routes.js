const { Router } = require("express")

const TagsController = require("../controllers/MovieTagsController");

const TagsRoutes = Router()

const tagsController = new TagsController();

TagsRoutes.get("/:user_id", tagsController.index);


module.exports = TagsRoutes;