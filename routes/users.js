const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const { User, validate } = require("../models/genre");

router.post("/", async (req, res) => {
  const users = await Genre.find().sort("name");
  res.send(users);
});

module.exports = router;
