const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logSchema = new Schema({
  game: {
    type: String,
    ref: "Game",
  },
  rating: String,
  review: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Log", logSchema);
