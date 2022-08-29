const express = require("express");
require("dotenv").config();
const app = express();
const cors=require('cors')
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());
app.use("/", require("./routes/index"));


mongoose.connect(process.env.URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Database is connected successfully!!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at :http://localhost:${process.env.PORT}/`);
});
