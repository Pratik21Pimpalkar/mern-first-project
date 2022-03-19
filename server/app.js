const express = require("express");
const app = express();
const dotenv = require("dotenv");

// Link the DB
dotenv.config({ path: "./config.env" });
require("./DB/DBconn");

const PORT = process.env.PORT;

// Link Router

app.use(express.json()) 
app.use(require('./Router/Route'))
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// MiddleWare
const middleware = (res, req, next) => {
  console.log("Hello Middleware");
  next();
};

app.get('/', (req, res) => {
  res.send("HELLO ");
});


