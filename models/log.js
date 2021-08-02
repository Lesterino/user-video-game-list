const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logSchema = new Schema({
  game: {
    type: Schema.Types.ObjectId,
    ref: "Game",
  },
  rating: {
    type: String,
    enum: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  },
  review: {
    type: String,
  },
  user: {
      type: Schema.Types.ObjectId,
      ref: "User",
  }
});

module.exports = mongoose.model("Log", logSchema);
