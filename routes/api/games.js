const express = require("express");
const router = express.Router();
const gamesCtrl = require("../../controllers/api/games");

router.get("/", gamesCtrl.index);
router.post("/", gamesCtrl.create);
router.get("/:id", gamesCtrl.show);
router.put('/:id', gamesCtrl.update);
router.delete('/:id', gamesCtrl.delete);

module.exports = router;