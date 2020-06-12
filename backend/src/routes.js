const express = require("express");

const TrashCansController = require("./controllers/TrashCansController");

const routes = express.Router();

routes.get("/trashcans", TrashCansController.index);

module.exports = routes;
