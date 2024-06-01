const { Router } = require("express");
const UsersRouter = require("./UsersRouter");
const RentsRouter = require("./RentsRouter");

const router = Router();

router.use("/users", UsersRouter);
router.use("/rents", RentsRouter);

module.exports = router;
