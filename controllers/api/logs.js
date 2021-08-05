const Log = require("../../models/log");

const index = async (req, res) => {
  try {
    const allLogs = await Log.find({});
    res.json(allLogs);
  } catch {
    res.status(400);
  }
};

const show = async (req, res) => {
  try {
    const log = await Log.findById(req.params.logId);
    res.json(log);
  } catch {
    res.status(400);
  }
};

const create = async (req, res) => {
  try {
    const newLog = await Log.create(req.body);
    console.log(newLog);
    res.status(201).json(newLog);
  } catch {
    res.status(400);
  }
};

const update = async (req, res) => {
  try {
    const updatedLog = await Log.findByIdAndUpdate(req.params.logId, req.body, {
      new: true,
    });
    res.status(200).json(updatedLog);
  } catch {
    res.status(400);
  }
};

const deleteOne = async (req, res) => {
  try {
     const deletedLog = await Log.findByIdAndRemove(req.params.logId);
    res.status(200).json(deletedLog);
  } catch {
    res.status(400);
  }
};

module.exports = {
  create,
  index,
  show,
  update,
  delete: deleteOne,
};
