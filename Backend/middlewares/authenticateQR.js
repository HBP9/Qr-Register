const jwt = require("jsonwebtoken");
const authQR = (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    if (!token)
      return res
        .status(401)
        .json({ msg: "No authentication token, access denied" });
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified)
      return res
        .status(401)
        .json({ msg: "Token verification failed, authorization denied" });
    req.user = verified.type;
    if (verified.type === "okay") {
      next();
    } else {
      res.status(401).json({ msg: "No authentication token, access denied" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message, mgs: "hi" });
  }
};
module.exports = authQR;
