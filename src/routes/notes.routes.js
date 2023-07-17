const { Router } = require("express")

const NotesController = require("../controllers/MovieNotesController");

const NotesRoutes = Router()

const notesController = new NotesController();

NotesRoutes.post("/:user_id", notesController.create);

module.exports = NotesRoutes;