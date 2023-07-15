const { hash } = require("bcryptjs")

const appError = require("../utils/appError")

class UsersController {
    create(request, response) {
        const { name, email, password } = request.body;

        if (!name) {
            throw new appError("O nome é obrigatório!")
        }

        response.json({ name, email, password })
    }
}

module.exports = UsersController;