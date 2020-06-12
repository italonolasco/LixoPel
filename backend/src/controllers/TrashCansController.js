const knex = require("../database/connection");

module.exports = {
  async index(request, response) {
    const trashCans = await knex("trash_cans").select("*");

    return response.json(trashCans);
  },
};
