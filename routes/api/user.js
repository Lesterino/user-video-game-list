const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const logsCtrl = require('../../controllers/api/logs');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login);
router.get('/:userId', usersCtrl.show);
router.get(':userId/logs', logsCtrl.index);
router.post(':userId/logs/newlog', logsCtrl.create);
router.get('/:userId/logs/:logId', logsCtrl.show);

router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken); 

module.exports = router;