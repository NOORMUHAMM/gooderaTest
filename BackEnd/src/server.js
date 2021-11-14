const express = require("express");
const connect = require("./config/db");
const app = express();
const cors = require("cors");

app.use(express.json()); //middleware

app.use(cors());

app.listen(8000, async () => {
  await connect();
  console.log("Listening on port 8000");
});
