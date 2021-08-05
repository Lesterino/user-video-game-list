const Game = require("../../models/game");

const index = async (req, res) => {
    try {
      const allGames = await Game.find({});
      res.json(allGames);
    } catch {
      res.status(400);
    }
  };
  
  const show = async (req, res) => {
    try {
      const game = await Game.findById(req.params.id);
      res.json(game);
    } catch {
      res.status(400);
    }
  };
  
  const create = async (req, res) => {
    try {
      const newGame = await Game.create(req.body);
      res.status(201).json(newGame);
    } catch (err) {
      console.log(err);
      res.status(400);
    }
  };
  
  const update = async (req, res) => {
    try {
      const updatedGame = await Game.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(200).json(updatedGame);
    } catch {
      res.status(400);
    }
  };
  
  const deleteOne = async (req, res) => {
    try {
      const deletedGame = await Game.findByIdAndRemove(req.params.id);
      res.status(200).json(deletedGame);
    } catch {
      res.status(400);
    }
  }
  
  module.exports = {
    create,
    index,
    show,
    update,
    delete: deleteOne
  };