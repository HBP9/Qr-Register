const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const auth = require("../middlewares/authenticateUser");
const authQR = require("../middlewares/authenticateQR");
const User = require("../models/user");
const Logs = require("../models/log");
const jwt = require("jsonwebtoken");
const QRCode = require("qrcode");


router.post("/register", async (req, res) => {
  console.log(req.body);
  const { name, phone,soc: society, pwd:password } = req.body;
  // check for missing filds
  if (!name || !password || !society || !phone) {
    res.send({ msg: "Please enter all the fields" }).status(200);
    return;
  }
  var user = name.charAt(0).toUpperCase() + name.slice(1);

  const doesUserExitsAlreay = await User.findOne({ phone });
  if (doesUserExitsAlreay) {
    res.send({ msg: "Phone already exists" }).status(200);
    return;
  }

  // lets hash the password
  const hashedPassword = await bcrypt.hash(password, 12);
  const latestUser = new User({
    phone,
    password: hashedPassword,
    name: user,
    society: society,
  });

  latestUser
    .save()
    .then(() => res.send({ msg: "Registered Successfullly" }).status(201))
    .catch((err) => res.send({ msg: err.msg }).status(200));
});

//post for login
router.post("/login", async (req, res) => {
  console.log(req.body)
  var { phone, pwd:password } = req.body;

  // check for missing filds
  if (!phone || !password) {
    res.send("Please enter all the fields");
    return;
  }

  const doesUserExits = await User.findOne({ phone });

  if (!doesUserExits) {
    res.send({ msg: "Phone invalid" }).status(200);
    return;
  }

  const doesPasswordMatch = await bcrypt.compare(
    password,
    doesUserExits.password
  );

  if (!doesPasswordMatch) {
    res.send({ msg: "Password invalid" }).status(200);
    return;
  }

  // else he\s logged in
  const jwtToken = jwt.sign({ phone: req.body.phone }, process.env.JWT_SECRET);
  res.send({ jwtToken, user: doesUserExits }).status(200);
});

router.get("/fetchLogs", auth, async (req, res) => {
  const logs = await Logs.find({ user: req.user }).sort({ 'createdAt':-1});
  //   console.log(logs);
  res.send(logs).status(200);
});

router.post("/createLog", auth, async (req, res) => {
  console.log(req.body)
  const { name, society, time, task } = req.body;
  const latestLog = new Logs({
    name,
    society,
    time,
    task,
    user: req.user,
  });
  latestLog
    .save()
    .then(() => res.send({ msg: "logged Succesfully" }).status(201))
    .catch((err) => res.send({ msg: err.msg }).status(200));
});
router.get("/generateQR", async (req, res) => {
  const opts = {
    errorCorrectionLevel: "H",
    type: "terminal",
    quality: 0.95,
    margin: 1,
    color: {
      dark: "#000",
      light: "#FFF",
    },
  };
  const qrImage = await QRCode.toDataURL(
    `http://localhost:5000/user/createLog`,
    opts
  );
  res.send({ qrImage }).status(200);
});
module.exports = router;
