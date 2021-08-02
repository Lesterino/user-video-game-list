const Log = require("../../models/log");

const index = async (req, res) => {
    try {
      const allLogs = await Log.find({});
      res.json(allLogs);
    } catch {
      console.log("failed to execute index function");
      res.status(400);
    }
  };
  
  const show = async (req, res) => {
      console.log(req.params);
    try {
      const log = await Log.findById(req.params.id);
      res.json(log);
    } catch {
      console.log("failed to execute show function");
      res.status(400);
    }
  };
  
  const create = async (req, res) => {
    try {
      const newLog = await Log.create(req.body);
      res.status(201).json(newLog);
    } catch (err) {
      console.log(err);
      console.log("failed to execute create function");
      res.status(400);
    }
  };
  
  const update = async (req, res) => {
    try {
      const updatedLog = await Log.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(200).json(updatedLog);
    } catch {
      console.log("failed to execute update function");
      res.status(400);
    }
  };
  
  const deleteOne = async (req, res) => {
    try {
      const deletedLog = await Log.findByIdAndRemove(req.params.id);
      res.status(200).json(deletedLog);
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