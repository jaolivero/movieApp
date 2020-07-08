const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");
const genres = require("./routes/genres");
const customers = require("./routes/customers");
const express = require("express");
const users = require("./routes/users");
const movies = require("./routes/movies");
const rentals = require("./routes/rentals");
const auth = require("./routes/auth");
const app = express();

app.use(express.json());
app.use("/api/genres", genres);
app.use("/api/customers", customers);
app.use("/api/users", users);
app.use("/api/movies", movies);
app.use("/api/rentals", rentals);
app.use("/api/auth", auth);

mongoose
  .connect("mongodb://localhost/movieApp", { useNewUrlParser: true })
  .then(() => console.log("connected to MongoDb.."))
  .catch((err) => console.error("Could not connect to mongodb...", err));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}...`));
