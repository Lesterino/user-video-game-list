const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const gameSchema = new Schema({
  title: String,
  genre: String,
});

module.exports = mongoose.model("Game", gameSchema);
