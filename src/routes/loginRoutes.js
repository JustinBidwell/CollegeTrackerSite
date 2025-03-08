const express = require('express');
const getUsername = require('../controllers/loginController.js');
const router = express.Router();

router.post('/data/username', getUsername);

module.exports = router;
