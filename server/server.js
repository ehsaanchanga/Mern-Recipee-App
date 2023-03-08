require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const corsOptions = require("./config/corsOptions");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConn");
const verifyJwt = require("./middleware/verifyJWT");
const PORT = process.env.PORT || 3500;

// connect to MongoDb
connectDb();

// Cross origin resource sharing
app.use(cors(corsOptions));

// builtin middleware to handle urlencoded data
// in other words form data
// "Content-Type: application/x-www-form-urlencoded"
app.use(express.urlencoded({ extended: false }));

// builtin middleware for json
app.use(express.json());

// routes
app.use("/register", require("./routes/register"));
app.use("/authenticate", require("./routes/auth"));

app.use(verifyJwt);
app.use("/api/recipes", require("./routes/api/recipes"));

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("json")) {
    res.json({ error: "404 not found" });
  } else {
    res.type("txt").send("404  Not Found");
  }
});

app.use(errorHandler);

mongoose.connection.once("open", (err) => {
  console.log("connected to mongodb");
  app.listen(PORT, () => {
    console.log("server started Listening to port " + PORT);
  });
});
