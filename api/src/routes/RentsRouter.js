const { Router } = require("express");
const {
  postRentsHandler,
  getAllRentsHandler,
  getRentsByEmailHandler,
  getRentsByIdHandler,
  updateRentsHandler,
} = require("../Handlers/RentsHandlers");

const RentsRouter = Router();

RentsRouter.post("/", postRentsHandler);
RentsRouter.get("/", getAllRentsHandler);
RentsRouter.get("/email", getRentsByEmailHandler);
RentsRouter.get("/:id", getRentsByIdHandler);
RentsRouter.put("/:id", updateRentsHandler);

module.exports = RentsRouter;
