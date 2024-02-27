const routes = require('express').Router();
const routeController = require("../controller/routes.controller")

routes.get("/", routeController.getAll);

routes.post("/", routeController.create);

routes.put("/:id", routeController.update);

routes.delete("/:id", routeController.delete);

module.exports = routes;