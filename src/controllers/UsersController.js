const { hash } = require("bcryptjs")
const appError = require("../utils/appError")
const sqliteConnection = require("../database/sqlite")

class UsersController {
    async create(request, response) {
        const { name, email, password } = request.body;

        const database = await sqliteConnection();

        const UserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

        if (UserExists) {
            throw new appError("Esse usuário já está cadastrado!")
        }

        const hashedPassword = await hash(password, 8)

        await database.run("INSERT INTO users (name, email,password) VALUES (?, ?, ?)", [name, email, hashedPassword]);

        return response.json()
    }
}

module.exports = UsersController;