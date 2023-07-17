const { Router } = require("express")

const NotesController = require("../controllers/MovieNotesController");

const NotesRoutes = Router()

const notesController = new NotesController();

NotesRoutes.post("/:user_id", notesController.create);
NotesRoutes.get("/:id", notesController.show);
NotesRoutes.get("/", notesController.index);
NotesRoutes.delete("/:id", notesController.delete);

module.exports = NotesRoutes;