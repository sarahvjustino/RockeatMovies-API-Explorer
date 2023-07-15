const { Router, request } = require("express")

const UsersRoutes = Router()

UsersRoutes.post("/", (request, response) => {
    const { name, email, password } = request.body;

    response.json({ name, email, password })
})

module.exports = UsersRoutes;