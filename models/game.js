const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  title: String,
  genre: {
    type: String,
    enum: [
      "Action",
      "Adventure",
      "RPG",
      "Simulation",
      "Strategy",
      "Sports",
      "MMO",
    ],
  },
});

module.exports = mongoose.model("Game", gameSchema);
