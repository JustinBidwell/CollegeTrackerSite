const express = require('express');
const createAccount = require('../controllers/createAccountController.js');
const router = express.Router();

router.post('/data/createAccount', createAccount);

module.exports = router;
