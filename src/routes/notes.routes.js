const { Router } = require("express")

const NotesController = require("../controllers/MovieNotesController");
const ensureAuthentication = require("../middlewares/ensureAuthentication");

const NotesRoutes = Router()

const notesController = new NotesController();

NotesRoutes.use(ensureAuthentication)
NotesRoutes.post("", notesController.create);
NotesRoutes.get("/", notesController.index);
NotesRoutes.get("/:id", notesController.show);
NotesRoutes.delete("/:id", notesController.delete);

module.exports = NotesRoutes;