const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
// const logsCtrl = require('../../controllers/api/logs');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login);
router.get('/:userId', usersCtrl.show);

// /* /api/user/logs */
// router.get('/logs', logsCtrl.index);
// router.post('/logs', logsCtrl.create);
// router.get('/logs/:logId', logsCtrl.show);
// router.put('/logs/:logId', logsCtrl.update);
// router.delete('/logs/:logId', logsCtrl.delete);

router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;