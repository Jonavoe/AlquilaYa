const { Router } = require("express");
const {
  postUsersHandler,
  getAllUsersHandler,
  getUsersByEmailHandler,
  getUsersByNameHandler,
  getUsersByIdHandler,
  updateUsersByIdHandler,
} = require("../Handlers/UsersHandlers");

const UsersRouter = Router();

UsersRouter.post("/", postUsersHandler);
UsersRouter.get("/", getAllUsersHandler);
UsersRouter.get("/email", getUsersByEmailHandler);
UsersRouter.get("/name", getUsersByNameHandler);
UsersRouter.get("/:id", getUsersByIdHandler);
UsersRouter.put("/email", updateUsersByIdHandler);

module.exports = UsersRouter;
