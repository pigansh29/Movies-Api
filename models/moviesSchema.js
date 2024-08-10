const mongoose = require("mongoose");


const  moviesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Movie title is required"],
    },
    genre: {
      type: String,
      required: [true, "Genre is required"],
    },
    releaseDate: {
      type: Date,
      required: [true, "Release date is required"],
    },
    rating: {
      type: Number,
      required: [true, "Rating is required"],
    }
  }
);

const MovieCollection = mongoose.model("movies", moviesSchema); // Convert schema to collection
module.exports = MovieCollection;