const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  phone: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  society: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model("User", UserSchema);
