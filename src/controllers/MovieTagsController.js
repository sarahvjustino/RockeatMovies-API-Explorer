const knex = require("../database/knex")

class MovieTagsController {
    async index(request, response) {
        const { user_id } = request.params;

    }
}

module.exports = MovieTagsController