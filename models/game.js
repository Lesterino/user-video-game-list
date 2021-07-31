const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const genreEnum = [
  "Action",
  "Adventure",
  "RPG",
  "Simulation",
  "Strategy",
  "Sports",
  "MMO",
];

const gameSchema = new Schema({
  title: String,
  genre: {
    type: String,
    enum: genreEnum,
  },
});

module.exports = mongoose.model("Game", gameSchema);
