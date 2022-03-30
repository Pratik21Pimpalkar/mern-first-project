const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// Link the DB
dotenv.config({ path: "./config.env" });
require("./DB/DBconn");

const PORT = process.env.PORT;

// Link Router

app.use(express.json());
app.use(require("./Router/Auth"));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// MiddleWare

app.get("/", (req, res) => {
  res.send("HELLO ");
});
