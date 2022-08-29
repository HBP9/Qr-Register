const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.use("/user", require("../routes/user"));

router.get("/", (req, res) => {
  res.send({ msg: "Hello from Backend" }).status(200);
});

module.exports = router;
