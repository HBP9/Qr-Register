const mongoose = require("mongoose");

const LogsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    society: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      require: true,
    },
    task: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("Logs", LogsSchema);
