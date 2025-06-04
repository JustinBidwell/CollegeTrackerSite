const express = require('express');
const getClasses = require('../controllers/classesController.js');
const router = express.Router();

router.get('/data/classes', getClasses);

module.exports = router;
