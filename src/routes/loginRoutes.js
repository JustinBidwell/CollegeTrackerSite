const express = require('express');
const getUsername = require('../controllers/loginController.js');
const router = express.Router();

router.get('/data/username', getUsername);

module.exports = router;
