const mongoose = require("mongoose");
const User = require("/models");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("connected to MongoDb.."))
  .catch((err) => console.error("Could not connect to mongodb...", err));

  async function createRental {
    
  }