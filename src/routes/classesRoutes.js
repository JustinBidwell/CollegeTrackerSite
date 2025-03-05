const express = require('express');
const { getClasses, test } = require('../controllers/classesController.js');
const router = express.Router();

router.get('/data/classes', getClasses);
router.post('/data/user', test);

module.exports = router;
