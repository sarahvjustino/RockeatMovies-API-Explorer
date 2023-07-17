const { Router } = require("express");

const usersRouter = require("./users.routes");
const NotesRouter = require("./notes.routes");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/notes", NotesRouter);

module.exports = routes;