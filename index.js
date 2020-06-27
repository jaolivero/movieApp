const express = require("express");
const mongoose = require("mongoose");
const User = require("../movieApp/models/User");

mongoose
  .connect("mongodb://localhost/playground/movieApp")
  .then(() => console.log("connected to MongoDb.."))
  .catch((err) => console.error("Could not connect to mongodb...", err));

async function createCustomer() {
  const customer = new Customer({
    firstName: "Joel",
    lastName: "Olivero",
    email: "joelolivero.student@careerdevs.com",
    isGold: true,
  });

  const result = await createCustomer.save();
  console.log(result);
}

createCustomer();
