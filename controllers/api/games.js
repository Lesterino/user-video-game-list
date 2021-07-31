const Game = require("../../models/game");

const index = async (req, res) => {
    try {
      const allGames = await Game.find({});
      res.json(allGames);
    } catch {
      console.log("failed to execute index function");
      res.status(400);
    }
  };
  
  const show = async (req, res) => {
    try {
      console.log("before show");
      const game = await Game.findById(req.params.id);
      console.log("after show");
      res.json(game);
    } catch {
      console.log("failed to execute show function");
      res.status(400);
    }
  };
  
  const create = async (req, res) => {
    try {
      console.log("before create");
      const newGame = await Game.create(req.body);
      console.log("created");
      res.status(201).json(newGame);
    } catch (err) {
      console.log(err);
      console.log("failed to execute create function");
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
      console.log("failed to execute update function");
      res.status(400);
    }
  };
  
  const deleteOne = async (req, res) => {
    try {
      const deletedGame = await Game.findByIdAndRemove(req.params.id);
      res.status(200).json(deletedGame);
    } catch {
      console.log("failed to delete pup");
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