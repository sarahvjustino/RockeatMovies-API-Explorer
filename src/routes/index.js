const { Router } = require("express");

const usersRouter = require("./users.routes");
const NotesRouter = require("./notes.routes");
const TagsRouter = require("./tags.routes");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/notes", NotesRouter);
routes.use("/tags", TagsRouter);

module.exports = routes;