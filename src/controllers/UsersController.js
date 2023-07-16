const { hash, compare } = require("bcryptjs")
const appError = require("../utils/appError")
const sqliteConnection = require("../database/sqlite");
const { use } = require("../routes/users.routes");

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

    async update(request, response) {
        const { name, email, password, old_password } = request.body;
        const { id } = request.params;

        const database = await sqliteConnection();

        const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]);

        if (!user) {
            throw new appError("Usuário não encontrado!");
        }

        const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

        if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
            throw new appError("Esse e-mail já está em uso.");
        }

        user.name = name;
        user.email = email;

        if (password && !old_password) {
            throw new appError("Por favor, digite a senha antiga para continuar.");
        }

        if (password && old_password) {
            const checkOldPassword = await compare(old_password, user.password);

            if (!checkOldPassword) {
                throw new appError("Senha antiga não confere!");
            }

            user.password = await hash(password, 8);
        }

        await database.run(`
        UPDATE users SET
        name = ?,
        email = ?,
        password = ?,
        updated_at = DATETIME('now')
        WHERE id = ?
        `, [user.name, user.email, user.password, id])

        return response.json()
    }
}

module.exports = UsersController;