const express = require('express');
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const router = express.Router();
const logsCtrl = require('../../controllers/api/logs');

router.get('/', logsCtrl.index);
router.post('/', logsCtrl.create);
router.get('/:logId', logsCtrl.show);
router.put('/:logId', logsCtrl.update);
router.delete('/:logId', logsCtrl.delete);

module.exports = router;