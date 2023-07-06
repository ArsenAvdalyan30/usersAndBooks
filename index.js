const express = require("express");
const userRouter = require("./routes.js");
const router = express.Router();
router.use("/users", userRouter);
module.exports = router;
