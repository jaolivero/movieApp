const mongoose = require("mongoose");
const { Genre } = require("..models/genre");
const express = require("express");
const router = express.Router();
const { Movie, validate } = require("../models/movie");

router.get("/", async (req, res) => {
  const movies = await Genre.find().sort("name");
  res.send(movies);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findByID(req.body.genreId);
  if(!genre) return res.status(400)
  res.send(genre).send('Invalid genre.');

  let movie = new Movie({
      title: req.body.title,
      genre: {
          _id: genre._id,
          name: genre.name
      },
      numberinStock: req.body.numberInStock,
      dailyRentalRate: req.body.dailyRentalRate
  });
  movie = await movie.save();

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    {
      new: true,
    }
  );

  if (!genre)
    return status.send(404).send("The genre with the given ID was not found");

  res.send(genre);
});

router.delete("/:id", async (req, res) => {
  const genre = await Genre.findByIdAndRemove(req.params.id);

  if (!genre)
    return res.status(404).send("The genre with the given ID was not found");

  res.send(genre);
});

router.get("/:id", async (req, res) => {
  const genre = await Genre.findByID(req.params.id);

  if (!genre)
    return res.status(404).send("The genre with the given ID was not found");

  res.send(genre);
});

module.exports = router;
